import { Code, Monitor, PenTool, Settings, Palette, Bot, ArrowRight } from 'lucide-react'
import { services } from '../data.js'

const icons = { code: Code, monitor: Monitor, pen: PenTool, settings: Settings, palette: Palette, bot: Bot }

export default function Services() {
  const go = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">My Services</span>
            <h3 className="h-md">What I Do</h3>
          </div>
          <p className="muted">I offer a range of web development and digital services to help you build, automate, and grow your online presence.</p>
          <button className="btn btn-primary" onClick={go}>
            View All Services <ArrowRight size={14} />
          </button>
        </div>
        <div className="services-grid reveal">
          {services.map((s) => {
            const Icon = icons[s.icon]
            return (
              <div key={s.title} className="service" onClick={go}>
                <Icon className="service-icon" size={34} />
                <h5>{s.title}</h5>
                <p>{s.text}</p>
                <span className="circle-arrow"><ArrowRight size={14} /></span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
