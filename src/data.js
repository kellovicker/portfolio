// ─── Edit everything about the site here ───────────────────────────
export const profile = {
  name: 'Kingsley Chindah',
  first: 'Kingsley',
  last: 'Chindah',
  role: 'Web Developer',
  location: 'Port Harcourt, Rivers State, Nigeria',
  email: 'Kingsleychindah1@gmail.com', // TODO: put your real email
  // Optional: a FormSubmit/Formspree URL. Leave '' to open the visitor's email app instead.
  formEndpoint: '',
  github: 'https://github.com/kellovicker',
  linkedin: '#', // TODO
  x: '#', // TODO
  facebook: '#', // TODO
}

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export const stats = [
  { icon: 'code', value: '3+', label: 'Years Experience' },
  { icon: 'monitor', value: '20+', label: 'Projects Completed' },
  { icon: 'users', value: '10+', label: 'Happy Clients' },
  { icon: 'star', value: '100%', label: 'Commitment' },
]

export const skills = [
  { name: 'HTML5', icon: 'SiHtml5', color: '#e34f26' },
  { name: 'CSS3', icon: 'SiCss3', color: '#1572b6' },
  { name: 'JavaScript', icon: 'SiJavascript', color: '#f7df1e' },
  { name: 'React', icon: 'SiReact', color: '#61dafb' },
  { name: 'Express.js', icon: 'SiExpress', color: '#ffffff' },
  { name: 'MongoDB', icon: 'SiMongodb', color: '#47a248' },
  { name: 'Git & GitHub', icon: 'SiGithub', color: '#ffffff' },
  { name: 'Bootstrap', icon: 'SiBootstrap', color: '#7952b3' },
  { name: 'Figma', icon: 'SiFigma', color: '#f24e1e' },
  { name: 'n8n', icon: 'N8n', color: '#ea4b71' },
]

export const services = [
  { icon: 'code', title: 'Website Development', text: 'Modern, responsive and fast websites.' },
  { icon: 'monitor', title: 'Web Application', text: 'Scalable web apps for your business.' },
  { icon: 'bot', title: 'AI Automation', text: 'Chatbots and workflows that save you time.' },
  { icon: 'pen', title: 'UI/UX Design', text: 'Clean, simple and user-friendly designs.' },
  { icon: 'settings', title: 'Maintenance & Support', text: 'Keep your site running smoothly.' },
  { icon: 'palette', title: 'Branding', text: 'Build a strong and memorable brand.' },
]

// image: put a screenshot in /public/projects/ and set e.g. '/projects/velvet.png'
// url:   live link (leave '' for private/client work)
export const projects = [
  {
    title: 'Jeyshawn Engineering',
    subtitle: 'Engineering Services Website + CMS',
    tags: ['React', 'Node.js', 'MongoDB'],
    url: 'https://jeyshawnng.com',
    image: '',
    colors: ['#f59e0b', '#1e3a8a'],
  },
  {
    title: 'The Velvet Lounge',
    subtitle: 'Restaurant & Lounge Website',
    tags: ['React', 'Vite'],
    url: '',
    image: '',
    colors: ['#b45309', '#1c1917'],
  },
  {
    title: 'K-Techra',
    subtitle: 'AI Automation & Tech Services',
    tags: ['React', 'Node.js'],
    url: '',
    image: '',
    colors: ['#6366f1', '#0f172a'],
  },
  {
    title: 'Wedding Website',
    subtitle: 'Wedding Invitation Website',
    tags: ['React', 'Vite'],
    url: '',
    image: '',
    colors: ['#d6a77a', '#3b2a20'],
  },
  {
    title: 'Esther & Victor',
    subtitle: 'Wedding Invitation + RSVP',
    tags: ['React', 'Vite', 'FormSubmit'],
    url: '',
    image: '',
    colors: ['#0f766e', '#4a2c1d'],
  },
  {
    title: 'Royal Dean Hotel & Suites',
    subtitle: 'Hotel Website + WhatsApp Automation',
    tags: ['React', 'Vite', 'n8n'],
    url: '',
    image: '',
    colors: ['#b8893b', '#12182b'],
  },
  {
    title: 'FRO NATION Salon',
    subtitle: 'Hair & Beauty Salon Website',
    tags: ['React', 'Vite'],
    url: '',
    image: '',
    colors: ['#db2777', '#1e1033'],
  },
  {
    title: 'The Palate',
    subtitle: 'Restaurant & Grill Website',
    tags: ['React', 'Vite', 'n8n'],
    url: '',
    image: '',
    colors: ['#dc2626', '#1f1410'],
  },
  {
    title: 'Signature Sound Studio',
    subtitle: 'Studio Website + Admin Dashboard',
    tags: ['React', 'TypeScript'],
    url: '',
    image: '',
    colors: ['#ca8a04', '#0a0a0a'],
  },
  {
    title: 'Luma Studio',
    subtitle: 'Photo Studio Booking Website',
    tags: ['React', 'AI Chatbot'],
    url: '',
    image: '',
    colors: ['#a78bfa', '#1e1b4b'],
  },
  {
    title: 'King-X (Kellox)',
    subtitle: 'Fashion E-commerce Store',
    tags: ['React', 'EmailJS'],
    url: '',
    image: '',
    colors: ['#eab308', '#0a0a0a'],
  },
  {
    title: 'Solace Dashboard',
    subtitle: 'Fintech Admin Dashboard',
    tags: ['React', 'Chart.js'],
    url: '',
    image: '',
    colors: ['#fb923c', '#1a1a2e'],
  },
  {
    title: 'CheckIn',
    subtitle: 'Team Task & Project Management App',
    tags: ['React', 'Vite', 'Router'],
    url: '',
    image: '',
    colors: ['#2563eb', '#0b1437'],
  },
  {
    title: 'Sui-X',
    subtitle: 'Web3 Social App on Sui',
    tags: ['React', 'Vite', 'Sui'],
    url: '',
    image: '',
    colors: ['#38bdf8', '#0c1222'],
  },
  {
    title: 'Football Predictor',
    subtitle: 'Match Predictions · Poisson Model',
    tags: ['React', 'API-Football'],
    url: '',
    image: '',
    colors: ['#16a34a', '#052e16'],
  },
  {
    title: 'Salon Booking Bot',
    subtitle: 'AI Booking Chatbot Automation',
    tags: ['n8n', 'OpenAI'],
    url: '',
    image: '',
    colors: ['#ec4899', '#2e1065'],
  },
  {
    title: 'Well Grand Integrity',
    subtitle: 'Engineering Company Website',
    tags: ['React', 'Vite'],
    url: '',
    image: '',
    colors: ['#0ea5e9', '#082f49'],
  },
  {
    title: 'Lenpec Global Concept',
    subtitle: 'Oil & Gas Procurement Services',
    tags: ['React', 'Vite'],
    url: '',
    image: '',
    colors: ['#f97316', '#1c1917'],
  },
]
