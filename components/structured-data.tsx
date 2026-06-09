import {
  SITE_URL,
  SITE_NAME,
  PERSON_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  BOOKING_URL,
  TANGO_URL,
  SOMATICA_URL,
} from "@/lib/site"
import { faqs } from "@/lib/faq"

// Server-rendered JSON-LD. Lives in the root layout so the markup is present in
// the initial HTML for crawlers and AI engines. One @graph keeps every entity
// cross-linked by @id. Descriptions use wellness/intimacy framing on purpose.

const personId = `${SITE_URL}/#gabriele`
const practiceId = `${SITE_URL}/#practice`
const websiteId = `${SITE_URL}/#website`

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: PERSON_NAME,
      jobTitle: "Somatic Coach",
      description:
        "Trained Somatica® Coach helping analytical people reconnect with their bodies, desire, and pleasure through trauma-informed somatic coaching.",
      url: SITE_URL,
      image: `${SITE_URL}/images/about.jpg`,
      knowsAbout: [
        "Somatic coaching",
        "Somatica method",
        "Intimacy coaching",
        "Sexuality coaching",
        "Trauma-informed coaching",
        "Embodiment",
      ],
      hasCredential: [
        "Trained Somatica® Coach",
        "PhD in Physics",
      ],
      sameAs: [TANGO_URL, SOMATICA_URL],
      worksFor: { "@id": practiceId },
    },
    {
      "@type": "ProfessionalService",
      "@id": practiceId,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      email: CONTACT_EMAIL,
      priceRange: "$$",
      founder: { "@id": personId },
      provider: { "@id": personId },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Berlin",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City", name: "Berlin" },
        { "@type": "Place", name: "Worldwide (online)" },
      ],
      serviceType: "Somatic intimacy and sexuality coaching",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Coaching options",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Free 15-minute discovery call",
              description:
                "A friendly, no-pressure conversation to explore what you are looking for and whether we are a good fit.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Single coaching session",
              description: "A one-off somatic coaching session.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "5-session coaching journey",
              description:
                "A personalised five-session journey with sliding-scale pricing.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "10-session coaching journey",
              description:
                "A personalised ten-session journey with sliding-scale pricing.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": personId },
      inLanguage: "en",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@type": "VideoObject",
      name: "Client testimonial: somatic coaching with Gabriele",
      description:
        "An executive business coach shares how somatic coaching with Gabriele helped her reconnect with her body and feel more integrated.",
      thumbnailUrl: `${SITE_URL}/images/testimonial-poster.jpg`,
      contentUrl: `${SITE_URL}/videos/testimonial-stephanie.mp4`,
      uploadDate: "2026-06-08",
      duration: "PT1M39S",
      publisher: { "@id": personId },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
