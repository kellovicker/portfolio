import { useEffect, useState } from 'react'
import { Send, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, profile } from '../data.js'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 120
      let current = 'home'
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={(e) => go(e, 'home')}>
          <Logo />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta-mobile" onClick={(e) => go(e, 'contact')}>
            Hire Me <Send size={14} />
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta" onClick={(e) => go(e, 'contact')}>
          Hire Me <Send size={14} />
        </a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
