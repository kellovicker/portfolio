import { ArrowRight } from 'lucide-react'
import { FaCss3Alt as SiCss3 } from 'react-icons/fa'
import { SiHtml5, SiJavascript, SiReact, SiExpress, SiMongodb, SiGithub, SiBootstrap, SiFigma } from 'react-icons/si'
import { skills, profile } from '../data.js'

function N8n({ size = 30, color = '#ea4b71' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.6" strokeLinecap="round">
      <circle cx="6" cy="16" r="3.2" fill={color} />
      <circle cx="19" cy="8" r="3.2" fill={color} />
      <circle cx="19" cy="24" r="3.2" fill={color} />
      <circle cx="28" cy="16" r="2.4" fill={color} />
      <path d="M9 15 16 9.5M9 17l7 5.5M22 9l4 5.5M22 23l4-5.5" />
    </svg>
  )
}
const map = { SiHtml5, SiCss3, SiJavascript, SiReact, SiExpress, SiMongodb, SiGithub, SiBootstrap, SiFigma, N8n }
const iconFor = (name) => map[name]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">My Skills</span>
            <h3 className="h-md">Technologies I Work With</h3>
          </div>
          <p className="muted">The tools and technologies I use to bring ideas to life.</p>
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            View All Skills <ArrowRight size={14} />
          </a>
        </div>
        <div className="skills-grid reveal">
          {skills.map((s) => {
            const Icon = iconFor(s.icon)
            return (
              <div key={s.name} className="skill">
                {Icon && <Icon size={30} color={s.color} />}
                <span>{s.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
