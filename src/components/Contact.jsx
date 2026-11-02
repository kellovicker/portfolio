import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import Socials from './Socials.jsx'
import { profile } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('') // '', 'sending', 'sent', 'error'
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (profile.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ ...form, _subject: form.subject || `Portfolio message from ${form.name}` }),
        })
        if (!res.ok) throw new Error()
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } catch {
        setStatus('error')
      }
      return
    }
    // no endpoint configured: open the visitor's email app
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">Contact</span>
          <h3 className="h-md">Send Me a Message</h3>
          <p>Tell me about your project and I’ll get back to you as soon as possible.</p>
          <ul>
            <li><Mail size={18} /> {profile.email}</li>
            <li><MapPin size={18} /> {profile.location}</li>
          </ul>
          <Socials />
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <label>Your Name
            <input required value={form.name} onChange={set('name')} placeholder="John Doe" />
          </label>
          <label>Email Address
            <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
          </label>
          <label className="full">Subject
            <input value={form.subject} onChange={set('subject')} placeholder="I need a website for my business" />
          </label>
          <label className="full">Message
            <textarea required rows="5" value={form.message} onChange={set('message')} placeholder="Tell me about your project..." />
          </label>
          <button className="btn btn-primary btn-lg" type="submit" disabled={status === 'sending'}>
            <Send size={14} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'sent' && <p className="form-note">Thanks! Your message is on its way.</p>}
          {status === 'error' && <p className="form-note err">Something went wrong. Please try again or email me directly.</p>}
        </form>
      </div>
    </section>
  )
}
