import { profile } from "../../data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          © {new Date().getFullYear()} {profile.name}
          <span> · Surgical robotics & biomedical engineering</span>
        </p>
        <div className={styles.socials}>
          <a href={profile.github}>GitHub</a>
          <a href={profile.linkedin}>LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
