import { MapPin, Briefcase, GraduationCap, Code, Monitor, Users, Star } from 'lucide-react'
import Photo from './Photo.jsx'
import { stats, profile } from '../data.js'

const icons = { code: Code, monitor: Monitor, users: Users, star: Star }

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div className="about-main reveal">
          <div className="about-photo">
            <Photo src="/images/about.jpg" alt={profile.name} />
          </div>
          <div className="about-text">
            <span className="eyebrow">About Me</span>
            <h3 className="h-lg">
              Turning Ideas Into <br />
              <span className="purple">Powerful Web Solutions</span>
            </h3>
            <p>
              I’m {profile.name}, a passionate web developer based in Port Harcourt, Rivers State, Nigeria. I specialize
              in building modern websites and web applications using clean code, creative design and the latest
              technologies.
            </p>
            <div className="about-facts">
              <div><MapPin /> <span>Port Harcourt,<br />Rivers State, Nigeria</span></div>
              <div><Briefcase /> <span>Available for<br />new projects</span></div>
              <div><GraduationCap /> <span>Always learning,<br />always growing</span></div>
            </div>
          </div>
        </div>

        <aside className="stats-card reveal">
          <h4>Quick Stats</h4>
          <div className="stats-grid">
            {stats.map((s) => {
              const Icon = icons[s.icon]
              return (
                <div key={s.label} className="stat">
                  <Icon className="stat-icon" />
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              )
            })}
          </div>
        </aside>
      </div>
    </section>
  )
}
