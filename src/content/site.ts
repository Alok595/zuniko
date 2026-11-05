export const CONFIG = {
  studio: "Zuniko Studio",
  founder: "Founder",
  founderFirst: "Zuniko",
  founderInitials: "ZK",
  founderRole: "Founder, Zuniko Studio",
  whatsapp: "919123332744",
  whatsappLabel: "+91 91233 32744",
  instagram: "zuniko.co",
  email: "contact.zuniko@gmail.com",
};

export const site = {
  name: "Zuniko Studio",
  description:
    "Mobile apps, websites, management systems, AI and custom software, designed and built from scratch around how your business really works.",
  email: CONFIG.email,
  whatsapp: CONFIG.whatsapp,
  phone: CONFIG.whatsappLabel,
  phoneRaw: `+${CONFIG.whatsapp}`,
  instagram: CONFIG.instagram,
  location: "India · Available Worldwide",
  timezone: "IST (UTC+5:30)",
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const instagramUrl = `https://www.instagram.com/${CONFIG.instagram}/`;

export const navLinks = [
  { href: "#founder", label: "Founder" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#details", label: "Details" },
  { href: "#contact", label: "Contact" },
];

export const SERVICES = [
  { title: "Mobile apps", desc: "Android and cross-platform apps with smooth interfaces, offline support and push notifications." },
  { title: "iOS apps", desc: "Native iPhone and iPad apps, built to App Store standards from first screen to release." },
  { title: "Websites", desc: "Fast, responsive business sites and web apps that look sharp on every screen." },
  { title: "Management systems", desc: "Inventory, billing, staff, students or patients, all in one dashboard your team can learn in a day." },
  { title: "E-commerce stores", desc: "Online shops of any size with payments, delivery tracking and a catalogue you control." },
  { title: "SEO", desc: "Technical fixes, page structure and speed work that help customers find you on search." },
  { title: "Admin panels", desc: "Control panels so your team can manage content, users and orders without calling a developer." },
  { title: "Chatbots", desc: "Bots for WhatsApp, Instagram and your website that answer customers around the clock." },
  { title: "AI integration", desc: "Smart search, summaries, automation and assistants added to the tools you already use." },
  { title: "2D game development", desc: "Mobile and browser games with original art, tight controls and a polished feel." },
  { title: "Custom software", desc: "Anything that does not fit a template. Describe the problem and we build the tool." },
];

export const WORK = [
  {
    title: "Salon Booking App",
    kind: "Mobile app, iOS and Android",
    desc: "Appointments, staff calendars and reminders in one app.",
    visual: "phone",
    color: "blue",
    size: "390 × 844 px",
  },
  {
    title: "Wholesale Ordering Portal",
    kind: "Website and admin panel",
    desc: "Retailers reorder in a few taps while the owner tracks stock, dues and dispatch.",
    visual: "browser",
    color: "mist",
    size: "1440 × 900 px",
  },
  {
    title: "Clinic Management System",
    kind: "Management system",
    desc: "Patient records, doctor schedules and billing, with a daily summary for the front desk.",
    visual: "dash",
    color: "mist",
    size: "1920 × 1080 px",
  },
  {
    title: "Pixel Dash",
    kind: "2D game",
    desc: "A side-scrolling runner with hand-drawn pixel art, tight controls and a weekly leaderboard.",
    visual: "game",
    color: "blue",
    size: "320 × 180 px",
  },
  {
    title: "Support Assistant",
    kind: "Chatbot and AI integration",
    desc: "Answers common questions on WhatsApp and the website, then hands over to a person when needed.",
    visual: "chat",
    color: "blue",
    size: "WhatsApp and web",
  },
  {
    title: "Handmade Goods Store",
    kind: "E-commerce and SEO",
    desc: "Catalogue, payments and delivery tracking, structured from day one to be found on search.",
    visual: "store",
    color: "mist",
    size: "1280 × 800 px",
  },
];

export const STEPS = [
  { n: "1", title: "Discovery call", desc: "We listen, ask questions and write down what success looks like." },
  { n: "2", title: "Scope and quote", desc: "A clear plan, timeline and price before any work starts." },
  { n: "3", title: "Design", desc: "Screens and flows you can click through and approve." },
  { n: "4", title: "Build", desc: "Regular demos, so you see progress and not only promises." },
  { n: "5", title: "Launch and support", desc: "We publish, monitor and stay available after go-live." },
];

export const SPECS = [
  { dt: "Based in", dd: "India, working in IST (UTC+5:30) and available for remote projects" },
  { dt: "Hours", dd: "Monday to Saturday, 10:00 to 19:00 IST" },
  { dt: "Replies", dd: "Within one working day" },
  { dt: "Languages", dd: "English and Hindi" },
  { dt: "Platforms", dd: "iOS, Android, web and desktop" },
  { dt: "Tools", dd: "Swift, Kotlin, Flutter, React, Next.js, Node.js, Python, Unity" },
  { dt: "Working together", dd: "Fixed-scope projects, or a monthly retainer for ongoing work" },
  { dt: "After launch", dd: "Hosting help, fixes and updates available as support" },
];

export const showSampleNotice = false;
export const faqs: { question: string; answer: string }[] = [];
export const reviews: { name: string; quote: string; author: string; role: string; metric?: string }[] = [];
export type ProjectVisual = "store" | "app" | "chat" | "ops";

