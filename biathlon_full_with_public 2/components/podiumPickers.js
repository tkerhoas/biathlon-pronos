'use client'
import { useState } from 'react'

export default function PodiumPicker({ onSubmit }) {
  const [p, setP] = useState({ p1:'', p2:'', p3:'' })
  const [loading, setLoading] = useState(false)

  async function handleSubmit(){
    if(!p.p1) return alert('Choisis au moins le 1er')
    setLoading(true)
    try{
      await fetch('/api/pronostics', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ picks:[p.p1,p.p2,p.p3] }) })
      alert('Pronostic enregistré')
      if(onSubmit) onSubmit()
    }catch(e){ alert('Erreur') }
    setLoading(false)
  }

  return (
    <div>
      <div className="podium" aria-label="Choix podium">
        <div className="slot">
          <div className="pos">1er</div>
          <div className="ath"><input className="input" value={p.p1} onChange={e=>setP({...p,p1:e.target.value})} placeholder="Nom 1er"/></div>
        </div>

        <div className="slot">
          <div className="pos">2e</div>
          <div className="ath"><input className="input" value={p.p2} onChange={e=>setP({...p,p2:e.target.value})} placeholder="Nom 2e"/></div>
        </div>

        <div className="slot">
          <div className="pos">3e</div>
          <div className="ath"><input className="input" value={p.p3} onChange={e=>setP({...p,p3:e.target.value})} placeholder="Nom 3e"/></div>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <button className="btn btn-primary" onClick={handleSubmit} disabled={loading}>{loading ? 'Envoi...' : 'Valider le podium'}</button>
      </div>
    </div>
  )
}
