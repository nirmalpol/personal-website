import { PublicationEntry } from "../../data/types";
import { FileText, Youtube, Code, Globe } from "lucide-react";
import styles from "./PublicationCard.module.css";

interface PublicationCardProps {
  publication: PublicationEntry;
}

const PublicationCard = ({ publication }: PublicationCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.thumbnail}>
        {publication.videoPreview ? (
          <video
            src={publication.videoPreview}
            controls
            autoPlay={publication.videoAutoplay}
            muted={publication.videoAutoplay}
            loop={publication.videoAutoplay}
            preload={publication.videoAutoplay ? "metadata" : "none"}
            poster={publication.thumbnail}
            aria-label={`Research demonstration: ${publication.title}`}
            playsInline
            className={styles.videoPreview}
          />
        ) : publication.thumbnail ? (
          <a
            href={publication.thumbnail}
            target="_blank"
            rel="noreferrer"
            className={styles.figureLink}
            aria-label={`Open full-size figure: ${publication.title}`}
            title="Open full-size figure"
          >
            <img
              loading="lazy"
              width="660"
              height="412"
              src={publication.thumbnail}
              alt={publication.title}
              className={styles.image}
            />
          </a>
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span>{publication.title[0]}</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {publication.link || publication.links?.paper ? (
            <a
              href={publication.link || publication.links?.paper}
              target="_blank"
              rel="noreferrer"
            >
              {publication.title}
            </a>
          ) : (
            publication.title
          )}
        </h3>
        <div className={styles.authors}>{publication.authors}</div>
        <div className={styles.venue}>
          {publication.venue} {publication.year && `(${publication.year})`}
        </div>

        {publication.abstract && (
          <p className={styles.abstract}>{publication.abstract}</p>
        )}

        {publication.links && (
          <div className={styles.links}>
            {publication.links.paper && (
              <a
                href={publication.links.paper}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <FileText size={14} /> Paper
              </a>
            )}
            {publication.links.code && (
              <a
                href={publication.links.code}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <Code size={14} /> Code
              </a>
            )}
            {publication.links.video && (
              <a
                href={publication.links.video}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <Youtube size={14} /> Video
              </a>
            )}
            {publication.links.website && (
              <a
                href={publication.links.website}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                <Globe size={14} /> Website
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default PublicationCard;
