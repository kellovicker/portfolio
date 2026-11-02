import { MapPin } from 'lucide-react'
import Logo from './Logo.jsx'
import Socials from './Socials.jsx'
import { navLinks, profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <Logo size={38} />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </div>
        <Socials small />
        <nav className="footer-links">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
        <div className="footer-meta">
          <span><MapPin size={14} /> {profile.location}</span>
          <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}
