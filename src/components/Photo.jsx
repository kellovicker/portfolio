import { useState } from 'react'
import Logo from './Logo.jsx'

// Shows your photo from /public/images; falls back to a KC glow if the file is missing.
export default function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed)
    return (
      <div className={`photo-fallback ${className}`}>
        <Logo size={90} />
      </div>
    )
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}
