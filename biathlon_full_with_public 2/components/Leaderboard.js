import Link from "next/link"

export default function Leaderboard({ list = [] }) {
  return (
    <div className="card leaderboard">
      <h3>Top joueurs</h3>
      {list.map((u,i)=>(
        <div key={u.id || u.username} className="row">
          <div style={{display:'flex',gap:12,alignItems:'center'}}><div style={{fontWeight:700}}>{i+1}.</div><div>{u.username}</div></div>
          <div style={{fontWeight:700}}>{u.pts || 0} pts</div>
        </div>
      ))}
      <div style={{marginTop:10}}><Link href="/classement" className="btn ghost">Voir le classement complet</Link></div>
    </div>
  )
}
