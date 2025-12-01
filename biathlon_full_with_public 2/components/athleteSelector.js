'use client'
import { useState, useMemo } from 'react'

export default function AthleteSelector({ athletes = [], onPick }) {
  const [q, setQ] = useState('')
  const filtered = useMemo(()=> {
    if(!q) return athletes.slice(0,10)
    return athletes.filter(a => a.name.toLowerCase().includes(q.toLowerCase())).slice(0,10)
  }, [q, athletes])

  return (
    <div>
      <input className="input" placeholder="Rechercher un athlète" value={q} onChange={e=>setQ(e.target.value)} />
      <div style={{marginTop:8}}>
        {filtered.map(a => (
          <div key={a.id || a.name} className="athlete-row" style={{padding:'8px 6px',cursor:'pointer'}} onClick={()=>onPick && onPick(a)}>
            <img className="athlete-flag" src={a.flag || '/flags/default.svg'} alt="" />
            <div>
              <div className="athlete-name">{a.name}</div>
              <div style={{fontSize:12,color:'var(--muted)'}}>{a.nation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
