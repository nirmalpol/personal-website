import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CV from "./pages/CV";
import ProstheticsPage from "./pages/ProstheticsPage";
import IrosChallenge from "./pages/IrosChallenge";
import { SEO } from "./components/common/SEO";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/prosthetics" element={<ProstheticsPage />} />
        <Route path="/community/iros-2026" element={<IrosChallenge />} />
        <Route
          path="*"
          element={
            <section
              style={{ maxWidth: 900, margin: "80px auto", padding: "0 24px" }}
            >
              <SEO title="Page not found | Nirmal Pol" noIndex />
              <h1>Page not found</h1>
              <p>
                This page may have moved.{" "}
                <Link to="/">Return to Nirmal Pol’s homepage.</Link>
              </p>
            </section>
          }
        />
      </Routes>
    </Layout>
  );
}
