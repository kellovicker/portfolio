import { FaLinkedinIn, FaGithub, FaXTwitter, FaFacebookF } from 'react-icons/fa6'
import { profile } from '../data.js'

export default function Socials({ small = false }) {
  const items = [
    { Icon: FaLinkedinIn, href: profile.linkedin, label: 'LinkedIn' },
    { Icon: FaGithub, href: profile.github, label: 'GitHub' },
    { Icon: FaXTwitter, href: profile.x, label: 'X' },
    { Icon: FaFacebookF, href: profile.facebook, label: 'Facebook' },
  ]
  return (
    <div className={`socials ${small ? 'small' : ''}`}>
      {items.map(({ Icon, href, label }) => (
        <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
          <Icon />
        </a>
      ))}
    </div>
  )
}
