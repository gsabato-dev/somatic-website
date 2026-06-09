// Single source of truth for the FAQ. Rendered as an accordion on the page
// (app/page.tsx) and mirrored into FAQPage JSON-LD (components/structured-data.tsx)
// so the visible content and the schema can never drift apart.
//
// Answers are written in plain, factual, 2-4 sentence form: this is the format
// AI answer engines (ChatGPT, Perplexity, Google AI Overviews) quote directly.

export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: "What is somatic coaching?",
    answer:
      "Somatic coaching is a body-centered approach to personal growth. Instead of working only with thoughts and analysis, it helps you notice and trust the sensations, emotions, and impulses in your body. The goal is to reconnect you with feeling, presence, and authentic desire rather than living entirely in your head.",
  },
  {
    question: "What is the Somatica® method?",
    answer:
      "Somatica® is a relational, experiential approach to intimacy and connection coaching. It blends emotional, body-based, and relational practices to help people feel more present, expressive, and connected, both in their relationships and in their own bodies.",
  },
  {
    question: "Is somatic coaching the same as therapy?",
    answer:
      "No. Somatic coaching is growth-oriented and focused on helping you reconnect with your body, desire, and confidence in the present. It is not a substitute for psychotherapy or medical treatment. Many clients find it complements other healing work they are already doing.",
  },
  {
    question: "Who is this coaching for?",
    answer:
      "Everyone can benefit from it. This coaching is for anyone who wants to feel more present, trust their sensations, and express what you want with clarity. It's especially helpful if you've struggled to access pleasure or presence because of early conditioning, shame, or burnout, or if you live primarily in your head and crave more embodied connection.",
  },
  {
    question: "What happens in a session, and is it confidential?",
    answer:
      "Sessions are grounded, consent-based, and trauma-informed. They combine conversation with gentle body-awareness practices that help you reconnect with your sensations and emotions. You set the pace and stay in control throughout, and everything you share is kept confidential.",
  },
  {
    question: "Do you offer online sessions, and where are you based?",
    answer:
      "Gabriele is based in Berlin and works in person there as well as online with clients worldwide. Online sessions make the coaching accessible wherever you live.",
  },
  {
    question: "How much does coaching cost, and how do I start?",
    answer:
      "Every journey begins with a free 15-minute discovery call. From there you can choose single sessions or 5- or 10-session journeys, with sliding-scale pricing based on your location and situation. You can book the free discovery call directly from this website.",
  },
]
