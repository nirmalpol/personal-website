import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';
import { Github, Youtube, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.container}>
      <SEO 
        title="Projects | Nirmal Pol" 
        description="Research and engineering projects in surgical robotics, perception, and control systems."
        canonicalUrl="/projects"
      />
      <h1 className={styles.pageTitle}>Projects</h1>
      <p className={styles.pageIntro}>Projects spanning biomedical engineering, accessible design, and applied machine learning.</p>
      
      <div className={styles.projectList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            {/* Left: Thumbnail or Image Gallery */}
            <div className={styles.thumbnail}>
              {project.images && project.images.length > 0 ? (
                <div className={styles.imageGallery}>
                  {project.images.map((img, idx) => (
                    <img loading="lazy" key={idx} src={img} alt={`${project.title} ${idx + 1}`} className={styles.galleryImage} />
                  ))}
                </div>
              ) : project.thumbnail ? (
                 <img loading="lazy" src={project.thumbnail} alt={project.title} className={styles.thumbnailImage} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              ) : (
                <div className={styles.thumbnailPlaceholder}>Image</div>
              )}
            </div>

            {/* Right: Content */}
            <div className={styles.content}>
              <div className={styles.header}>
                <h2 className={styles.title}>{project.title}</h2>
                {project.venue && <span className={styles.venue}>{project.venue}</span>}
              </div>
              
              {project.authors && <p className={styles.authors}>{project.authors}</p>}
              
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.links}>
                {project.internalLink && (
                  <Link to={project.internalLink} className={styles.linkBtn}>
                    <Globe size={16} /> Interactive Demo
                  </Link>
                )}
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <Github size={16} /> Code
                  </a>
                )}
                {project.links.paper && (
                  <a href={project.links.paper} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FileText size={16} /> Paper
                  </a>
                )}
                {project.links.video && (
                  <a href={project.links.video} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <Youtube size={16} /> Video
                  </a>
                )}
                 {project.links.website && (
                  <a href={project.links.website} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <Globe size={16} /> Website
                  </a>
                )}
                {project.links.article && (
                  <a href={project.links.article} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                    <FileText size={16} /> Article
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
