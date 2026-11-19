import { NavLink } from "react-router-dom";
import { profile } from "../../data/profile";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.container} aria-label="Main navigation">
        <NavLink to="/" className={styles.logo} aria-label="Nirmal Pol home">
          <span>Nirmal Pol</span>
        </NavLink>
        <div className={styles.links}>
          {[
            ["/", "About"],
            ["/projects", "Projects"],
            ["/cv", "CV"],
          ].map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a className={styles.contact} href={`mailto:${profile.email}`}>
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
