import { cvData } from '../data/cv';
import { SEO } from '../components/common/SEO';
import DateBadge from '../components/cv/DateBadge';
import { ExternalLink } from 'lucide-react';
import styles from './CV.module.css';

const CV = () => {
  return (
    <div className={styles.container}>
      <SEO 
        title="CV | Nirmal Pol" 
        description="Curriculum Vitae of Nirmal Pol - PhD Researcher in Surgical Robotics at University of Toronto."
        canonicalUrl="/cv"
      />
      {/* Left Sidebar - Table of Contents */}
      <aside className={styles.sidebar}>
        <h2 className={styles.tocTitle}>Table of Contents</h2>
        <ul className={styles.tocList}>
          {[['education', 'Education'], ['experience', 'Experience'], ['publications', 'Publications'], ['abstracts', 'Refereed abstracts'], ['teaching', 'Teaching'], ['awards', 'Honors & awards'], ['service', 'Leadership & service'], ['skills', 'Skills']].map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
        </ul>
      </aside>

      {/* Right Content */}
      <div className={styles.content}>
        <p className="eyebrow">Experience & background</p>
        <h1 className={styles.pageTitle}>Curriculum vitae</h1>
        <p className={styles.pageIntro}>Nirmal Pol · Biomedical engineering & surgical robotics</p>
        
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.skillsGrid}>
            {cvData.skills.map((skillGroup) => (
              <div key={skillGroup.category} className={styles.skillGroup}>
                <h3 className={styles.skillCategory}>{skillGroup.category}:</h3>
                <p className={styles.skillList}>{skillGroup.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {cvData.education.map((item) => (
            <div key={item.id} className={styles.entry}>
              <div className={styles.dateColumn}>
                <DateBadge start={item.startDate} end={item.endDate} />
              </div>
              <div className={styles.detailsColumn}>
                <h3 className={styles.entryTitle}>{item.url ? <a href={item.url}>{item.title} <ExternalLink size={14} /></a> : item.title}</h3>
                <div className={styles.institution}>{item.institution}</div>
                {item.location && <div className={styles.location}>{item.location}</div>}
                {item.description.length > 0 && (
                  <ul className={styles.description}>
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

        <section id="experience" className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {cvData.experience.map((item) => (
            <div key={item.id} className={styles.entry}>
              <div className={styles.dateColumn}>
                <DateBadge start={item.startDate} end={item.endDate} />
              </div>
              <div className={styles.detailsColumn}>
                <h3 className={styles.entryTitle}>{item.url ? <a href={item.url}>{item.title} <ExternalLink size={14} /></a> : item.title}</h3>
                <div className={styles.institution}>{item.institution}</div>
                {item.location && <div className={styles.location}>{item.location}</div>}
                <ul className={styles.description}>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="teaching" className={styles.section}>
          <h2 className={styles.sectionTitle}>Teaching Assistant (TA)</h2>
          {cvData.teachingAssistant.map((item) => (
            <div key={item.id} className={styles.entry}>
              <div className={styles.detailsColumn} style={{ marginLeft: 0 }}>
                <h3 className={styles.entryTitle}>
                   {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                      {item.title} <ExternalLink size={14} />
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <div className={styles.institution}>{item.institution}</div>
                {item.summary && <p className={styles.descriptionSingle}>{item.summary}</p>}
                {item.location && <div className={styles.location}>{item.location}</div>}
                <ul className={styles.description}>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="publications" className={styles.section}>
          <h2 className={styles.sectionTitle}>Publications</h2>
          <div className={styles.publicationList}>
            {cvData.publications.filter(p => p.category !== 'Abstract').map((pub) => (
              <div key={pub.id} className={styles.pubEntry}>
                <h3 className={styles.pubTitle}>{pub.links?.paper ? <a href={pub.links.paper}>{pub.title} <ExternalLink size={14} /></a> : pub.title}</h3>
                <div className={styles.pubAuthors}>{pub.authors}</div>
                <div className={styles.pubVenue}>
                  {pub.venue} {pub.year && `(${pub.year})`}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="abstracts" className={styles.section}>
          <h2 className={styles.sectionTitle}>Refereed Abstracts</h2>
          <div className={styles.publicationList}>
            {cvData.publications.filter(p => p.category === 'Abstract').map((pub) => (
              <div key={pub.id} className={styles.pubEntry}>
                <h3 className={styles.pubTitle}>{pub.links?.paper ? <a href={pub.links.paper}>{pub.title} <ExternalLink size={14} /></a> : pub.title}</h3>
                <div className={styles.pubAuthors}>{pub.authors}</div>
                <div className={styles.pubVenue}>
                  {pub.venue} {pub.year && `(${pub.year})`}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="awards" className={styles.section}>
          <h2 className={styles.sectionTitle}>Honors & Awards</h2>
          {cvData.awards.map((item) => (
            <div key={item.id} className={styles.entry} style={{ gap: '1rem' }}>
               <div className={styles.dateColumn}>
                <DateBadge start={item.startDate} end={item.endDate} />
              </div>
              <div className={styles.detailsColumn}>
                <h3 className={styles.entryTitle}>{item.url ? <a href={item.url}>{item.title} <ExternalLink size={14} /></a> : item.title}</h3>
                <div className={styles.institution}>{item.institution}</div>
                <div className={styles.descriptionSingle}>{item.description[0]}</div>
              </div>
            </div>
          ))}
        </section>

        <section id="service" className={styles.section}>
          <h2 className={styles.sectionTitle}>Leadership & Service</h2>
          {cvData.service.map((item) => (
            <div key={item.id} className={styles.entry}>
               <div className={styles.dateColumn}>
                <DateBadge start={item.startDate} end={item.endDate} />
              </div>
              <div className={styles.detailsColumn}>
                <h3 className={styles.entryTitle}>{item.url ? <a href={item.url}>{item.title} <ExternalLink size={14} /></a> : item.title}</h3>
                <div className={styles.institution}>{item.institution}</div>
                {item.description.length > 0 && (
                  <ul className={styles.description}>
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </section>

      </div>
    </div>
  );
};

export default CV;
