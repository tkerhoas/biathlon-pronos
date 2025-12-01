import Link from "next/link"

export default function TopNav(){
  return (
    <div style={{display:'flex',gap:12,alignItems:'center'}}>
      <Link href="/events" className="btn">Courses</Link>
      <Link href="/classement" className="btn">Classement</Link>
      <Link href="/admin" className="btn ghost">Admin</Link>
    </div>
  )
}
