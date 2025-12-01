import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        {/* simple svg logo; replace with /public/logo.svg if you prefer */}
        <svg width="48" height="48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect width="64" height="64" rx="10" fill="#2B8FD6"/>
          <text x="50%" y="56%" fill="#fff" fontWeight="700" fontSize="22" textAnchor="middle" fontFamily="Inter">B</text>
        </svg>
        <div>
          <div style={{fontWeight:800}}>Biathlon Pronos</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Coupe du Monde — Saison</div>
        </div>
      </div>

      <nav style={{marginLeft:12}}>
        <Link href="/events" style={{marginRight:12}}>Courses</Link>
        <Link href="/classement" style={{marginRight:12}}>Classement</Link>
      </nav>

      <div style={{marginLeft:'auto', display:'flex', gap:8, alignItems:'center'}}>
        <Link href="/admin" className="btn ghost">Admin</Link>
      </div>
    </header>
  )
}
