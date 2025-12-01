'use client'
import { useState } from 'react'

export default function EventPage({ params }) {
  const [p1, setP1] = useState('')
  const [p2, setP2] = useState('')
  const [p3, setP3] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit() {
    setLoading(true)
    try {
      await fetch('/api/pronostics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId: params.id, picks: [p1, p2, p3] })
      })
      alert("Pronostic envoyé !")
    } catch {
      alert("Erreur réseau")
    }
    setLoading(false)
  }

  return (
    <section>
      <h2>Course {params.id}</h2>
      <div className="card" style={{ maxWidth: 640 }}>
        <label>1er</label>
        <input value={p1} onChange={e=>setP1(e.target.value)} />

        <label>2e</label>
        <input value={p2} onChange={e=>setP2(e.target.value)} />

        <label>3e</label>
        <input value={p3} onChange={e=>setP3(e.target.value)} />

        <button className="btn btn-primary" onClick={submit} disabled={loading}>
          {loading ? "Envoi..." : "Valider"}
        </button>
      </div>
    </section>
  )
}
