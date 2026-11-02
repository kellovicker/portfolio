export default function Logo({ size = 44 }) {
  return (
    <svg width={size} height={size * 0.82} viewBox="0 0 64 52" fill="none" aria-label="KC logo">
      <defs>
        <linearGradient id="kc" x1="0" y1="0" x2="64" y2="52">
          <stop stopColor="#60a5fa" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path d="M6 4v44M6 26 24 4M10 26l18 22" stroke="url(#kc)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 12C54 6 48 4 42 4c-9 0-15 7-15 22s6 22 15 22c6 0 12-2 16-8" stroke="url(#kc)" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}
