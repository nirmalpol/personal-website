import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { cvData } from "../data/cv";
import { irosChallenge, site } from "../data/site";
import { SEO } from "../components/common/SEO";
import PublicationCard from "../components/home/PublicationCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
        title={site.title}
        description={site.description}
        canonicalUrl="/"
        profilePage
      />
      <section className={styles.introduction} aria-labelledby="intro-title">
        <div>
          <h1 id="intro-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.bio}>
            I’m a PhD candidate in the{" "}
            <a href="https://medcvr.utm.utoronto.ca/">MEDCVR Lab</a> at the
            University of Toronto, supervised by{" "}
            <a href="https://bme.utoronto.ca/faculty-research/core-faculty/lueder-kahrs/">
              Prof. Lueder A. Kahrs
            </a>.
          </p>
          <p className={styles.bio}>
            My research focuses on perception and control for surgical robotics.
            I use optical coherence tomography (OCT), an imaging technique that
            captures micron-scale subsurface detail, to estimate surgical tool
            motion and guide precise robotic manipulation.
          </p>
          <div
            className={styles.profileLinks}
            aria-label="Professional and contact links"
          >
            <Link to="/cv">CV</Link>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.github}>GitHub</a>
          </div>
        </div>
        <img
          className={styles.portrait}
          src={profile.image}
          alt="Nirmal Pol"
          width="800"
          height="800"
          fetchPriority="high"
        />
      </section>

      <section
        id="publications"
        className={styles.section}
        aria-labelledby="publications-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="publications-title">Publications</h2>
        </div>
        {cvData.publications
          .filter((pub) => pub.category !== "Abstract")
          .map((pub) => (
            <PublicationCard key={pub.id} publication={pub} />
          ))}
        <p className={styles.publicationNote}>
          * Equal contribution. See my <Link to="/cv#abstracts">CV</Link> for
          refereed abstracts.
        </p>
      </section>

      <section
        id="leadership"
        className={styles.section}
        aria-labelledby="leadership-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="leadership-title">Robotics community</h2>
        </div>
        <article className={styles.leadershipEntry}>
          <div className={styles.leadershipHeader}>
            <h3>{irosChallenge.conference} Competition Organizer</h3>
            <time dateTime={irosChallenge.year}>{irosChallenge.year}</time>
          </div>
          <p className={styles.challengeName}>{irosChallenge.title}</p>
          <p className={styles.leadershipDescription}>
            Co-organized a hands-on robotics challenge introducing participants
            to precise teleoperation through needle threading and M2 bolt
            pick-and-place.
          </p>
          <Link className={styles.leadershipLink} to={irosChallenge.path}>
            Competition details <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>

      <section className={styles.section} aria-labelledby="projects-title">
        <div className={styles.sectionHeader}>
          <h2 id="projects-title">Projects</h2>
          <Link to="/projects">Project details</Link>
        </div>
        <div className={styles.projectList}>
          <article>
            <h3>
              <Link to="/prosthetics">Interactive prosthetics database</Link>
            </h3>
            <p>
              An open-source tool for customizing and downloading 3D-printable
              prosthetic attachments for recreational activities.
            </p>
          </article>
          <article>
            <h3>
              <Link to="/projects">
                IMI BIGDataAIHUB competition — 2nd place
              </Link>
            </h3>
            <p>
              Led a team applying machine learning to financial transaction
              analysis in the University of Toronto’s 2025 case competition.
            </p>
          </article>
        </div>
      </section>

      <section
        id="teaching"
        className={styles.section}
        aria-labelledby="teaching-title"
      >
        <div className={styles.sectionHeader}>
          <h2 id="teaching-title">Teaching</h2>
          <Link to="/cv#teaching">Teaching details</Link>
        </div>
        <p className={styles.teachingIntro}>
          My teaching assistant experience at the University of Toronto includes:
        </p>
        <ul className={styles.teachingList}>
          {cvData.teachingAssistant.map((course) => (
            <li key={course.id}>
              {course.url ? (
                <a href={course.url}>{course.title}</a>
              ) : (
                course.title
              )}
              {course.summary && (
                <p className={styles.teachingSummary}>{course.summary}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
