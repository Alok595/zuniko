/**
 * All editable site content lives here.
 *
 * Before launch, replace:
 *  - `site.email`, `site.whatsapp`, `site.instagram` with the real details
 *  - `projects` and `reviews` with real work and real client quotes
 * Then set `showSampleNotice` to false to remove the "sample content" labels.
 */

export const site = {
  name: "Zuniko",
  description:
    "Zuniko is a software agency building websites, mobile apps, e-commerce stores, chatbots and custom software, made to fit the way your business works.",
  email: "contact.zuniko@gmail.com",
  /** Country code + number, digits only for WhatsApp (India +91) */
  whatsapp: "919123332744",
  phone: "+91 91233 32744",
  phoneRaw: "+919123332744",
  instagram: "zuniko.co",
  linkedin: "https://linkedin.com/company/zuniko",
  github: "https://github.com/zuniko",
  x: "https://x.com/zuniko",
  location: "Remote · Available Worldwide",
  timezone: "UTC / EST / GMT friendly",
};

export const showSampleNotice = false;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#technology", label: "Technology" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const statement =
  "Most businesses end up bending around software that was never built for them. We work the other way round. We learn how you actually operate, then design and build the website, app, store or system that fits it.";

export const services = [
  {
    title: "Websites",
    body: "Company sites, landing pages and web platforms that load fast, rank well and are simple for your team to update.",
    tags: ["Marketing sites", "Web apps", "CMS", "SEO"],
  },
  {
    title: "Mobile apps",
    body: "iOS and Android apps, cross-platform or fully native depending on what the product needs. We handle store submission too.",
    tags: ["iOS", "Android", "Cross-platform", "App Store release"],
  },
  {
    title: "E-commerce",
    body: "Shopify stores or fully custom shops, with payments, stock, shipping and an admin your team will actually use.",
    tags: ["Shopify", "Custom storefronts", "Payments", "Inventory"],
  },
  {
    title: "Chatbots & AI",
    body: "Assistants for WhatsApp, Instagram and your website that answer from your own data and hand over to a person when they should.",
    tags: ["WhatsApp bots", "Support", "Lead capture", "Internal tools"],
  },
  {
    title: "Custom software",
    body: "Portals, dashboards, CRMs, booking systems and automations that replace the spreadsheets your business has outgrown.",
    tags: ["Dashboards", "CRMs", "Integrations", "Automation"],
  },
];

export type ProjectVisual = "store" | "app" | "chat" | "ops";

/** Sample projects. Replace with real client work. */
export const projects: {
  name: string;
  kind: string;
  body: string;
  visual: ProjectVisual;
}[] = [
  {
    name: "Oakline Supply",
    kind: "E-commerce",
    body: "A custom storefront for a homeware brand, with stock synced across shop and warehouse.",
    visual: "store",
  },
  {
    name: "Tempo Fit",
    kind: "Mobile app",
    body: "Class booking and progress tracking for a chain of fitness studios, on iOS and Android.",
    visual: "app",
  },
  {
    name: "Clinic Desk",
    kind: "AI chatbot",
    body: "A WhatsApp assistant that books appointments and answers patient questions around the clock.",
    visual: "chat",
  },
  {
    name: "Fleetboard",
    kind: "Custom software",
    body: "An operations dashboard that replaced four spreadsheets for a regional logistics company.",
    visual: "ops",
  },
];

export const techMarquee = [
  "Next.js",
  "React Native",
  "Flutter",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Shopify",
  "AWS",
];

export const techGroups = [
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { group: "Backend", items: ["Node.js", "NestJS", "Python", "GraphQL"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { group: "Commerce", items: ["Shopify", "WooCommerce", "Stripe", "Razorpay"] },
  { group: "AI", items: ["OpenAI", "Claude", "LangChain", "WhatsApp API"] },
  { group: "Cloud", items: ["AWS", "Vercel", "Docker", "Cloudflare"] },
];

/** Sample reviews. Replace with real client quotes. Never publish these as genuine. */
export const reviews = [
  {
    quote:
      "They asked better questions about our business than our last three vendors combined. The store they built is the first one our team hasn't complained about.",
    name: "A. Mehta",
    role: "Founder, retail brand",
  },
  {
    quote:
      "We came in with a vague idea and a tight deadline. Every week we had something real to click through, and the app shipped when they said it would.",
    name: "S. Laurent",
    role: "Director, fitness studios",
  },
  {
    quote:
      "The WhatsApp assistant now handles most of what used to fill our front desk's morning. It also knows when to stop and pass a patient to a person.",
    name: "R. Nair",
    role: "Operations lead, healthcare",
  },
  {
    quote:
      "Four spreadsheets and a lot of phone calls became one screen. They kept improving it after launch without us having to chase them.",
    name: "D. Okafor",
    role: "General manager, logistics",
  },
];

export const projectTypes = [
  "Website",
  "Mobile app",
  "E-commerce",
  "Chatbot",
  "Custom software",
  "Not sure yet",
];

export const processes = [
  {
    step: "01",
    title: "Discovery & Scope",
    body: "We start by uncovering how your business operates day-to-day. We challenge assumptions, map out user flows, and agree on measurable targets before writing any code.",
    tags: ["User flows", "Tech stack choice", "Requirements doc", "Fixed timeline"],
  },
  {
    step: "02",
    title: "Architecture & Design",
    body: "We prototype the user experience and database schema. You get high-fidelity clickable interfaces and clear architecture diagrams so there are zero surprises.",
    tags: ["UI/UX prototype", "Data modeling", "Design tokens", "Feedback rounds"],
  },
  {
    step: "03",
    title: "Engineering & QA",
    body: "Clean, maintainable code written with test coverage. We provide weekly staging deployments so you can test real progress and give feedback along the way.",
    tags: ["Weekly staging builds", "Automated tests", "Security check", "Performance audit"],
  },
  {
    step: "04",
    title: "Launch & Evolution",
    body: "We handle domain configuration, production infrastructure, App Store approval, and team onboarding. Full repository ownership is handed over with zero lock-in.",
    tags: ["Production deployment", "App Store release", "Documentation", "Support warranty"],
  },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most high-performance websites and landing pages ship within 1 to 3 weeks. Full-scale mobile apps, e-commerce stores, and custom software systems usually take between 4 to 8 weeks, depending on complexity. We work in structured weekly milestones with playable previews at every stage.",
  },
  {
    question: "How do you charge for projects?",
    answer:
      "We believe in transparent, fixed-scope pricing whenever possible. After our initial discovery conversation, you receive an itemized proposal with a fixed quote and delivery timeline — no surprise billing. For evolving products, we also offer dedicated monthly sprints.",
  },
  {
    question: "Who owns the code and intellectual property?",
    answer:
      "You do. 100%. Upon completion and final payment, all intellectual property, source code, design assets, and production credentials belong exclusively to you. There is zero vendor lock-in.",
  },
  {
    question: "Can you help update or rescue an existing codebase?",
    answer:
      "Yes. We frequently audit, refactor, and modernize existing codebases, transition legacy stacks to modern frameworks (like Next.js or React Native), and fix performance bottlenecks or fragile integrations.",
  },
  {
    question: "What happens after the project launches?",
    answer:
      "Every project includes a 30-day post-launch warranty period for any bug fixes and performance fine-tuning. Afterwards, we offer ongoing maintenance, feature expansion retainers, or can hand off to your internal team with comprehensive documentation.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send us a quick message via our contact form, email, or WhatsApp. Tell us a bit about what you want to build and your timeframe. We will schedule a 20-minute intro call to see if we are a good fit.",
  },
];
