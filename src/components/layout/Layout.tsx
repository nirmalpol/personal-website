import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash)
      document
        .getElementById(decodeURIComponent(hash.slice(1)))
        ?.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
