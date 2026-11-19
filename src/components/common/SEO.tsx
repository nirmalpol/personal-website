import { Helmet } from "react-helmet-async";
import { profile } from "../../data/profile";
import { site } from "../../data/site";

interface SEOProps {
  title: string;
  description?: string;
  canonicalUrl?: string;
  profilePage?: boolean;
  noIndex?: boolean;
}

export function SEO({
  title,
  description = site.description,
  canonicalUrl = "/",
  profilePage = false,
  noIndex = false,
}: SEOProps) {
  const fullUrl = new URL(`${canonicalUrl.replace(/\/$/, "")}/`, site.url).href;
  const personId = `${site.url}/#person`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: `${site.url}/`,
        image: `${site.url}/profile.webp`,
        jobTitle: profile.title,
        description: site.description,
        sameAs: [profile.github, profile.linkedin],
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "University of Toronto",
          url: "https://www.utoronto.ca",
        },
        knowsAbout: [
          "Surgical robotics",
          "Optical coherence tomography",
          "Robot perception",
          "Robotic control",
          "Biomedical engineering",
        ],
      },
      {
        "@type": profilePage ? "ProfilePage" : "WebPage",
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: title,
        description,
        ...(profilePage
          ? { mainEntity: { "@id": personId } }
          : { about: { "@id": personId } }),
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      <meta
        name="robots"
        content={
          noIndex ? "noindex, follow" : "index, follow, max-image-preview:large"
        }
      />
      <link rel="canonical" href={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${site.url}${site.image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Nirmal Pol — Surgical robotics researcher, University of Toronto"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${site.image}`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData).replace(/</g, "\\u003c")}
      </script>
    </Helmet>
  );
}
