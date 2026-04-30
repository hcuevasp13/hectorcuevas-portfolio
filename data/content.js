export const services = {
  es: [
    { num: "001", name: "Investigación & Research", desc: "Búsqueda y análisis de información sobre ONGs, mercados, competidores y datos. Todo organizado y listo para usar." },
    { num: "002", name: "Automatización con IA", desc: "Flujos de trabajo automatizados con herramientas modernas de IA. Ahorra tiempo en tareas repetitivas y enfócate en lo que importa." },
    { num: "003", name: "Soporte Administrativo", desc: "Gestión de tareas, organización de información, entrada de datos y soporte general a tu operación." },
    { num: "004", name: "Excel & Google Sheets", desc: "Organización de datos, fórmulas, tablas dinámicas, reportes y dashboards para que tus números hablen solos." },
    { num: "005", name: "Bots con IA", desc: "Creación de bots personalizados con Telegram, Claude API y Python. Automatizan tareas, responden preguntas y ahorran horas de trabajo." },
    { num: "006", name: "Diseño & Contenido", desc: "Logos básicos y edición de contenido. Diseño visual funcional con Canva para tu marca o proyecto." },
  ],
  en: [
    { num: "001", name: "Research & Data Collection", desc: "Web research and information analysis on NGOs, markets, competitors, and data. Organized and ready to use." },
    { num: "002", name: "AI Automation", desc: "Automated workflows using modern AI tools. Save time on repetitive tasks and focus on what matters." },
    { num: "003", name: "Admin Support", desc: "Task management, information organization, data entry, and general support for your operation." },
    { num: "004", name: "Excel & Google Sheets", desc: "Data organization, formulas, pivot tables, reports, and dashboards so your numbers speak for themselves." },
    { num: "005", name: "AI Bots", desc: "Custom bots built with Telegram, Claude API, and Python. They automate tasks, answer questions, and save hours of work." },
    { num: "006", name: "Design & Content", desc: "Basic logos and content editing. Functional visual design with Canva for your brand or project." },
  ]
}

export const projects = {
  es: [
    {
      id: 1,
      cat: "Automatización",
      title: "School Agenda Bot",
      desc: "Bot de Telegram que procesa PDFs escolares, organiza tareas por tipo, arma lista de mochila diaria y sincroniza con Google Calendar.",
      client: "Proyecto personal",
      tags: ["Python", "Telegram", "Claude Haiku", "Railway"],
      image: "/projects/School Agenda BOT.png"
    },
    {
      id: 2,
      cat: "Automatización",
      title: "ProposalPilot",
      desc: "App web que analiza ofertas de Upwork, decide si aplica o no, y genera cover letters optimizadas usando Claude API.",
      client: "Proyecto personal",
      tags: ["Next.js", "Claude API", "Vercel"],
      image: "/projects/Proposal Pilot.png"
    },
    {
      id: 3,
      cat: "Automatización",
      title: "Bridgit",
      desc: "App de escritorio que traduce reuniones de Zoom y Teams en tiempo real, con sugerencias de respuesta en ES e EN.",
      client: "Proyecto personal",
      tags: ["Electron", "Python", "Whisper", "Claude API"],
      image: "/projects/BRIGIT.png"
    },
    {
      id: 4,
      cat: "Data Entry",
      title: "Data Entry",
      desc: "Automatización de hojas de cálculo y organización de datos para negocios.",
      client: "Trabajo freelance, Upwork",
      tags: ["Google Sheets", "Excel", "Data Processing", "Automation"],
      image: "/projects/Data Entry.png"
    },
  ],
  en: [
    {
      id: 1,
      cat: "Automation",
      title: "School Agenda Bot",
      desc: "Telegram bot that processes school PDFs, organizes tasks by type, builds a daily backpack list, and syncs with Google Calendar.",
      client: "Personal project",
      tags: ["Python", "Telegram", "Claude Haiku", "Railway"],
      image: "/projects/School Agenda BOT.png"
    },
    {
      id: 2,
      cat: "Automation",
      title: "ProposalPilot",
      desc: "Web app that analyzes Upwork job posts, decides whether to apply, and generates optimized cover letters using Claude API.",
      client: "Personal project",
      tags: ["Next.js", "Claude API", "Vercel"],
      image: "/projects/Proposal Pilot.png"
    },
    {
      id: 3,
      cat: "Automation",
      title: "Bridgit",
      desc: "Desktop app that translates Zoom and Teams meetings in real time, with ready-to-use response suggestions in ES and EN.",
      client: "Personal project",
      tags: ["Electron", "Python", "Whisper", "Claude API"],
      image: "/projects/BRIGIT.png"
    },
    {
      id: 4,
      cat: "Data Entry",
      title: "Data Entry",
      desc: "Spreadsheet automation and data organization for businesses.",
      client: "Freelance work, Upwork",
      tags: ["Google Sheets", "Excel", "Data Processing", "Automation"],
      image: "/projects/Data Entry.png"
    },
  ]
}

export const certificates = [
  {
    platform: "Platzi",
    name: { es: "Claude AI", en: "Claude AI" },
    year: "2024"
  },
  {
    platform: "Platzi",
    name: { es: "ChatGPT con Google Sheets", en: "ChatGPT with Google Sheets" },
    year: "2024"
  },
  {
    platform: "Platzi",
    name: { es: "Marketing Digital", en: "Digital Marketing" },
    year: "2024"
  },
  {
    platform: "Platzi",
    name: { es: "Prompt Engineering", en: "Prompt Engineering" },
    year: "2024"
  },
  {
    platform: "Platzi",
    name: { es: "Diseño gráfico para Ads", en: "Graphic Design for Ads" },
    year: "2025",
    status: true
  },
  {
    platform: "Platzi",
    name: { es: "Claude Code", en: "Claude Code" },
    year: "2025",
    status: true
  },
  {
    platform: "Domestika",
    name: { es: "Usar ChatGPT para trabajar", en: "Using ChatGPT for Work" },
    year: "2025"
  },
  {
    platform: "Domestika",
    name: { es: "Canva de 0 a 100", en: "Canva from 0 to 100" },
    year: "2025"
  },
  {
    platform: "Universidad",
    name: { es: "Ingeniería en Sistemas", en: "Systems Engineering" },
    year: ""
  },
]

export const skills = {
  es: [
    { name: "Investigación web", level: 95 },
    { name: "Atención al cliente", level: 95 },
    { name: "Microsoft Office", level: 90 },
    { name: "Automatización con IA", level: 88 },
    { name: "Gestión de datos", level: 82 },
    { name: "Diseño con Canva", level: 80 },
  ],
  en: [
    { name: "Web research", level: 95 },
    { name: "Customer support", level: 95 },
    { name: "Microsoft Office", level: 90 },
    { name: "AI automation", level: 88 },
    { name: "Data management", level: 82 },
    { name: "Canva design", level: 80 },
  ]
}

export const tools = [
  "Claude AI", "ChatGPT", "Google Workspace", "Microsoft Excel",
  "Microsoft Word", "Microsoft PowerPoint", "Outlook",
  "Google Calendar", "Whisper", "Notion", "Trello", "Canva",
  "Upwork", "Vercel", "GitHub", "HubSpot", "Zoom", "Slack",
  "Telegram API", "Railway", "Python", "Electron", "Anthropic API", "Zoho Mail"
]

export const stats = {
  es: [
    { num: "3+", label: "Años de experiencia" },
    { num: "4+", label: "Proyectos propios" },
    { num: "100%", label: "Job Success" },
    { num: "Rising", label: "Talent — Upwork" },
  ],
  en: [
    { num: "3+", label: "Years of experience" },
    { num: "4+", label: "Own projects" },
    { num: "100%", label: "Job Success" },
    { num: "Rising", label: "Talent — Upwork" },
  ]
}

export const ui = {
  es: {
    nav: ["Servicios", "Portafolio", "Habilidades", "Certificados", "Contacto"],
    available: "Disponible para proyectos",
    role: "Freelancer, Automatización, Research, Soporte Admin",
    heroDesc: "Ayudo a empresas y emprendedores a trabajar más inteligente. Organizo datos, automatizo flujos de trabajo e investigo lo que necesitan para tomar mejores decisiones.",
    ctaPrimary: "Ver mi trabajo",
    ctaSecondary: "Contáctame",
    servicesTitle: "Lo que puedo hacer por ti",
    portfolioTitle: "Proyectos y Trabajo",
    skillsTitle: "Habilidades y Herramientas",
    certsTitle: "Certificados y Formación",
    contactTitle: "Hablemos",
    contactQuote: "Cuéntame en qué estás trabajando, vemos cómo puedo ayudarte.",
    contactLocation: "Panamá, disponible para trabajo remoto global",
    filters: ["Todos", "Automatización", "Research", "Data Entry"],
    filterAll: "Todos",
    skillsLabel: "Habilidades principales",
    toolsLabel: "Herramientas que uso",
    formName: "Tu nombre",
    formEmail: "Tu email",
    formSubject: "Asunto",
    formMessage: "Cuéntame sobre tu proyecto...",
    formSend: "Enviar mensaje",
    upwork: "Ver en Upwork",
    footerRights: "Héctor Cuevas, Panamá",
    inProgress: "En progreso",
  },
  en: {
    nav: ["Services", "Portfolio", "Skills", "Certificates", "Contact"],
    available: "Available for projects",
    role: "Freelancer, Automation, Research, Admin Support",
    heroDesc: "I help businesses and entrepreneurs work smarter. I organize data, automate workflows, and research what they need to make better decisions.",
    ctaPrimary: "See my work",
    ctaSecondary: "Contact me",
    servicesTitle: "What I can do for you",
    portfolioTitle: "Projects & Work",
    skillsTitle: "Skills & Tools",
    certsTitle: "Certificates & Education",
    contactTitle: "Let's talk",
    contactQuote: "Tell me what you're working on, let's see how I can help.",
    contactLocation: "Panama, available for remote work worldwide",
    filters: ["All", "Automation", "Research", "Data Entry"],
    filterAll: "All",
    skillsLabel: "Main skills",
    toolsLabel: "Tools I use",
    formName: "Your name",
    formEmail: "Your email",
    formSubject: "Subject",
    formMessage: "Tell me about your project...",
    formSend: "Send message",
    upwork: "View on Upwork",
    footerRights: "Héctor Cuevas, Panama",
    inProgress: "In progress",
  }
}
