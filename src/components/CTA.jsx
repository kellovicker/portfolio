import { Send, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="container cta-inner">
        <Send className="cta-plane" size={64} strokeWidth={1.4} />
        <div className="cta-text">
          <span className="eyebrow blue">Let’s Work Together</span>
          <h3>Have a Project in Mind?</h3>
          <p>I’m always open to discussing new ideas, collaborations and opportunities.</p>
        </div>
        <a className="btn btn-primary btn-lg" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
          <Send size={14} /> Get In Touch <ArrowRight size={14} />
        </a>
      </div>
    </section>
  )
}
