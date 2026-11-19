import { lazy, Suspense, useEffect, useState } from "react";
import { SEO } from "../components/common/SEO";

const ProstheticsDesigner = lazy(
  () => import("../components/prosthetics/ProstheticsDesigner"),
);

export default function ProstheticsPage() {
  const [interactive, setInteractive] = useState(false);
  useEffect(() => setInteractive(true), []);
  return (
    <>
      <SEO
        title="Interactive Prosthetics Designer | Nirmal Pol"
        description="Explore and customize 3D-printable prosthetic attachments for recreational activities. An open-source biomedical engineering project by Nirmal Pol."
        canonicalUrl="/prosthetics"
      />
      <header
        style={{ maxWidth: 1180, margin: "36px auto 0", padding: "0 24px" }}
      >
        <p className="eyebrow">Accessible design / Interactive project</p>
        <h1>Prosthetics designer</h1>
        <p>
          Explore and customize 3D-printable prosthetic attachments for
          recreational activities.
        </p>
      </header>
      {interactive ? (
        <Suspense
          fallback={
            <p role="status" style={{ padding: 24 }}>
              Loading the interactive designer…
            </p>
          }
        >
          <ProstheticsDesigner />
        </Suspense>
      ) : (
        <p style={{ padding: 24 }}>
          The interactive 3D designer requires JavaScript.{" "}
          <a href="https://github.com/nirmalpol/prosthetics-database-website">
            View the project and source files on GitHub.
          </a>
        </p>
      )}
    </>
  );
}
