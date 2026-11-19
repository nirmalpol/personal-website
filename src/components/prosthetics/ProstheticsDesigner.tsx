import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import styles from './ProstheticsDesigner.module.css';

interface ProstheticData {
  [activity: string]: {
    "Side of Body": string[];
    "SizeLabels": string[];
    "Size": string[];
    "Dimension": string[];
    "Measurement": number[][];
    "numParts": number;
    "Coordinates": { [key: string]: number[] };
    "Materials": string[];
    "Weight": number[][];
    "Costs": number[][];
    "ImageSrc": string;
    "ImageAlt": string;
    "SizeImageSrc": string;
    "SizeImageAlt": string;
  }
}

const ProstheticsDesigner: React.FC = () => {
  const [data, setData] = useState<ProstheticData | null>(null);
  const [activity, setActivity] = useState<string>('');
  const [side, setSide] = useState<string>('Right'); // Default to Right, matching JSON likely
  const [size, setSize] = useState<string>('Child'); // Default to Child
  const [sceneReady, setSceneReady] = useState<number>(0); // Counter to trigger model loading
  const mountRef = useRef<HTMLDivElement>(null);
  
  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  useEffect(() => {
    // Load JSON data
    fetch(`${import.meta.env.BASE_URL}prosthetics/main.json`)
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
        // Set default activity if available
        const activities = Object.keys(jsonData);
        if (activities.length > 0) {
          setActivity(activities[0]);
          // Check side/size defaults from loaded data if needed, but hardcoded is fine for initialization
        }
      })
      .catch(err => console.error("Error loading prosthetics data:", err));
  }, []);

  // Initialize Three.js
  useEffect(() => {
    // Use setTimeout to ensure ref is attached after first render
    const initTimeout = setTimeout(() => {
      if (!mountRef.current) {
        console.log("Mount ref not ready");
        return;
      }

      const container = mountRef.current;
      
      // Clear any existing canvas (from previous render)
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Use fixed dimensions matching CSS (height: 350px in .canvasContainer)
      const width = container.clientWidth || 600;
      const height = 350; // Fixed to match CSS

      console.log("Initializing Three.js with dimensions:", width, height);

      // Scene setup
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x2a2a2a);
      sceneRef.current = scene;

      // Camera setup - Position camera closer and looking at origin
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 5000);
      camera.position.set(100, 100, 100);
      camera.lookAt(0, 0, 0);
      cameraRef.current = camera;

      // Renderer setup
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting - Very bright
      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2.0);
      scene.add(hemiLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
      dirLight.position.set(50, 100, 50);
      scene.add(dirLight);

      // Ground - smaller and closer
      const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshBasicMaterial({ color: 0x444444, side: THREE.DoubleSide })
      );
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      // Grid - smaller
      const grid = new THREE.GridHelper(200, 20, 0xffffff, 0x888888);
      scene.add(grid);

      // Axes Helper - clearly visible
      const axesHelper = new THREE.AxesHelper(30);
      scene.add(axesHelper);

      // Controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.update();
      controlsRef.current = controls;

      // Animation Loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      console.log("Three.js initialized successfully");
      
      // Trigger model loading
      setSceneReady(prev => prev + 1);
    }, 100); // Small delay to ensure DOM is ready

    // Cleanup
    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  // Update Models when selection changes or scene is ready
  useEffect(() => {
    if (!data || !activity || !side || !size || !sceneRef.current || sceneReady === 0) return;

    console.log(`Updating models: ${activity}, ${side}, ${size}`);

    const currentData = data[activity];
    if (!currentData) return;

    // Clear existing models (keep lights and ground and grid and axes)
    const objectsToRemove: THREE.Object3D[] = [];
    sceneRef.current.traverse((child) => {
        if (child.name && child.name.endsWith('.stl')) {
            objectsToRemove.push(child);
        }
    });
    objectsToRemove.forEach(obj => sceneRef.current?.remove(obj));

    // Load new models
    const loader = new STLLoader();
    const material = new THREE.MeshPhongMaterial({
      color: 0xaaaaaa,
      specular: 0x111111,
      shininess: 200,
    });

    const numParts = currentData.numParts;

    for (let i = 1; i <= numParts; i++) {
        const partName = `${activity}/${side}/${size}/part${i}.stl`;
        const url = `${import.meta.env.BASE_URL}prosthetics/models/${partName}`;
        
        console.log(`Loading STL: ${url}`);

        loader.load(url, (geometry: THREE.BufferGeometry) => {
            console.log(`Loaded STL: ${url}`);
            const mesh = new THREE.Mesh(geometry, material);
            const coords = currentData.Coordinates[partName];
            if (coords) {
                mesh.position.set(coords[0], coords[1], coords[2]);
            }
            mesh.rotation.set(-Math.PI / 2, 0, 0); // Standard rotation for these models
            mesh.scale.set(0.5, 0.5, 0.5); // Check this scale factor from original code line 323
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            mesh.name = partName; 
            sceneRef.current?.add(mesh);
        }, undefined, (err) => {
            console.error("Error loading STL:", url, err);
        });
    }

  }, [data, activity, side, size, sceneReady]);

  const handleDownload = async () => {
      if (!data || !activity || !side || !size) return;

      const currentData = data[activity];
      const zip = new JSZip();
      const numParts = currentData.numParts;

      const fetchPromises = [];

      for (let i = 1; i <= numParts; i++) {
          const partName = `${activity}/${side}/${size}/part${i}.stl`;
          const url = `${import.meta.env.BASE_URL}prosthetics/models/${partName}`;
          
          fetchPromises.push(
              fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
                    return res.arrayBuffer();
                })
                .then(buffer => {
                    zip.file(`part${i}.stl`, buffer);
                })
          );
      }

      try {
          await Promise.all(fetchPromises);
          const zipBlob = await zip.generateAsync({ type: 'blob' });
          saveAs(zipBlob, `${activity}_${side}_${size}_DesignFiles.zip`);
      } catch (err) {
          console.error("Error creating zip:", err);
          alert("Failed to create download package.");
      }
  };

  if (!data) return <div>Loading...</div>;

  const currentActivityData = data[activity];
  const sizeIndex = currentActivityData?.Size.indexOf(size) ?? 0;

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Open-source prosthetics database</h2>
      <p className={styles.pageDescription}>
        An open-source database of 3D-printable recreational terminal devices for individuals with upper limb differences. 
        This tool provides affordable, customizable prosthetic designs that can be sized for children through adults. 
        Select an activity, customize the size and side, preview the 3D model, and download the STL files for printing.
      </p>

      {/* Activity Selector */}
      <div className={styles.activitySelector}>
        {Object.keys(data).map(key => (
          <button
            key={key}
            className={`${styles.activityCard} ${activity === key ? styles.active : ''}`}
            onClick={() => setActivity(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Main Layout: Canvas + Controls */}
      <div className={styles.mainLayout}>
        {/* Left: 3D Canvas */}
        <div className={styles.canvasContainer} ref={mountRef} />

        {/* Right: Controls + Size Image */}
        {currentActivityData && (
          <div className={styles.controlsPanel}>
            {/* Side Selection */}
            <div className={styles.controlCard}>
              <h3>Side of Body</h3>
              <div className={styles.pillGroup}>
                {currentActivityData["Side of Body"].map(opt => (
                  <button
                    key={opt}
                    className={`${styles.pill} ${side === opt ? styles.active : ''}`}
                    onClick={() => setSide(opt)}
                  >
                    {opt} Hand
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className={styles.controlCard}>
              <h3>Size</h3>
              <div className={styles.pillGroup}>
                {currentActivityData.Size.map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.pill} ${size === opt ? styles.active : ''}`}
                    onClick={() => setSize(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Diagram - Larger */}
            <div className={styles.sizeHelper}>
              <img 
                src={currentActivityData.SizeImageSrc.replace('../static', `${import.meta.env.BASE_URL}prosthetics`)} 
                alt={currentActivityData.SizeImageAlt} 
              />
            </div>

            {/* Download Button */}
            <button className={styles.downloadButton} onClick={handleDownload}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download STL Files
            </button>
          </div>
        )}
      </div>

      {/* Bottom Section: Dimensions + Materials */}
      {currentActivityData && (
        <div className={styles.bottomInfo}>
          <div className={styles.infoCard}>
            <h3>Dimensions</h3>
            <table className={styles.specsTable}>
              <tbody>
                {currentActivityData.Dimension.map((dim, i) => (
                  <tr key={dim}>
                    <td>{dim}</td>
                    <td>{currentActivityData.Measurement[sizeIndex]?.[i] ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.infoCard}>
            <h3>Material Estimates</h3>
            <div className={styles.materialsGrid}>
              {currentActivityData.Materials.map((mat, i) => (
                <div key={mat} className={styles.materialItem}>
                  <div className="name">{mat}</div>
                  <div className="value">
                    {currentActivityData.Weight[sizeIndex]?.[i] ?? '-'}g
                  </div>
                  <div className="value" style={{color: 'var(--accent-primary)'}}>
                    ${currentActivityData.Costs[sizeIndex]?.[i] ?? '-'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProstheticsDesigner;


