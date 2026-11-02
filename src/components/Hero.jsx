import { Rocket, Mail, ArrowRight } from 'lucide-react'
import Photo from './Photo.jsx'
import Socials from './Socials.jsx'
import { profile } from '../data.js'

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section id="home" className="hero">
      <div className="hero-photo">
        <Photo src="/images/hero.jpg" alt={profile.name} />
      </div>
      <div className="hero-quote">
        Code
        <br />
        Automate
        <br />
        Create
        <br />
        Grow
        <svg viewBox="0 0 120 30" fill="none"><path d="M2 26C40 22 80 14 118 4" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" /></svg>
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="badge"><i /> Available for new projects</span>
          <p className="hello">Hi, I’m</p>
          <h1>
            {profile.first} <span className="grad">{profile.last}</span>
          </h1>
          <h2>
            Web Developer <b>|</b> <span className="purple">Problem Solver</span> <b>|</b> <span className="blue">Opportunity Creator</span>
          </h2>
          <p className="lead">
            I build fast, responsive and user-friendly websites and web applications that help businesses work smarter,
            operate efficiently and grow digitally. I turn ideas into real solutions with clean code and modern technology.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary btn-lg" onClick={() => go('projects')}>
              <Rocket size={16} /> View My Work <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline btn-lg" onClick={() => go('contact')}>
              <Mail size={16} /> Get In Touch
            </button>
          </div>
          <Socials />
        </div>
      </div>
    </section>
  )
}
