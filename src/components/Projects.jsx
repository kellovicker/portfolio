import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects, profile } from '../data.js'

function Thumb({ p }) {
  if (p.image) return <img src={p.image} alt={p.title} className="thumb-img" />
  const [a, b] = p.colors
  const initials = p.title.split(/\s+/).filter((w) => /[A-Za-z]/.test(w[0])).slice(0, 2).map((w) => w[0]).join('')
  return (
    <div className="thumb-fallback" style={{ background: `linear-gradient(135deg, ${a}cc, ${b})` }}>
      <span>{initials}</span>
      <em>{p.title}</em>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Featured Projects</span>
            <h3 className="h-md">Some of My Recent Work</h3>
          </div>
          <span />
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="project reveal">
              <div className="thumb"><Thumb p={p} /></div>
              <div className="project-body">
                <div className="project-top">
                  <div>
                    <h5>{p.title}</h5>
                    <p>{p.subtitle}</p>
                  </div>
                  {p.url ? (
                    <a className="circle-arrow" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                      <ArrowRight size={14} />
                    </a>
                  ) : (
                    <span className="circle-arrow dim"><ArrowRight size={14} /></span>
                  )}
                </div>
                <div className="tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                {p.url ? (
                  <a className="view" href={p.url} target="_blank" rel="noreferrer">
                    View Project <ExternalLink size={11} />
                  </a>
                ) : (
                  <span className="view muted">Client project</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
