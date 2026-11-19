import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { irosChallenge } from "../data/site";
import styles from "./IrosChallenge.module.css";

export default function IrosChallenge() {
  return (
    <article className={styles.container}>
      <SEO
        title="IROS 2026 Competition Organizer | Nirmal Pol"
        description="Nirmal Pol helped organize the IROS 2026 Forceps-Based Fine Manipulation Challenge in Pittsburgh, introducing participants to precise robotic teleoperation."
        canonicalUrl={irosChallenge.path}
      />
      <Link to="/" className="text-link">
        <ArrowLeft size={16} /> Back to home
      </Link>
      <header className={styles.header}>
        <p className="eyebrow">Robotics community / {irosChallenge.year}</p>
        <h1>{irosChallenge.title}</h1>
        <p className={styles.subtitle}>
          Bringing people together around precise robotic manipulation.
        </p>
        <div className={styles.meta}>
          <span>{irosChallenge.conference}</span>
          <span>{irosChallenge.location}</span>
          <span>{irosChallenge.role}</span>
        </div>
      </header>
      <div className={styles.body}>
        <section>
          <h2>Hands-on with surgical robotic instruments</h2>
          <p>{irosChallenge.summary}</p>
          <p>
            Our goal was to introduce more people to surgical robotic platforms
            and the precision and control involved in manipulating small
            objects. Participants had the opportunity to experience the
            instruments through two deceptively simple tasks.
          </p>
        </section>
        <div className={styles.tasks}>
          <section>
            <span className="eyebrow">Task 01</span>
            <h2>Needle threading</h2>
            <p>
              Guide a thread through needle eyes using a teleoperated robotic
              instrument.
            </p>
          </section>
          <section>
            <span className="eyebrow">Task 02</span>
            <h2>M2 bolt pick-and-place</h2>
            <p>
              Pick up and place M2 bolts using a teleoperated robotic
              instrument.
            </p>
          </section>
        </div>
        <section>
          <h2>A shared effort</h2>
          <p>
            I was grateful to help organize the challenge alongside Lueder A.
            Kahrs, Peter Kazanzides, Adnan Munawar, Loris Fichera, Thomas Looi,
            Tamás Haidegger, Christos Bergeles, Aban Merali, and Michael Yip.
          </p>
          <p>
            Thank you to the participating platform teams from Johns Hopkins
            University’s LCSR, the University of Toronto’s MEDCVR Lab, and
            King’s College London’s RViM Lab, and to everyone who participated
            and supported the event.
          </p>
          <p>
            Special thanks to Radian Gondokaryono, Adam Axelrod, Anton Deguet,
            and Aakansh Panda for helping make the challenge happen, and to
            Stäubli and Brandon Harrison for their support.
          </p>
        </section>
        <section className={styles.results}>
          <p className="eyebrow">Independent Human Teleoperation Evaluation</p>
          <h2>Celebrating the participants</h2>
          <p>
            <strong>Winner:</strong> Victor Kowalski
            <br />
            <strong>Runner-up:</strong> Simon Jones
          </p>
        </section>
        <a className="button" href={irosChallenge.url}>
          Visit the official challenge website <ArrowUpRight size={17} />
        </a>
      </div>
    </article>
  );
}
