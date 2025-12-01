import Link from "next/link"
import prisma from "../../lib/prisma"

export default async function EventsPage() {
  let events = []

  try {
    events = await prisma.course.findMany({
      orderBy: { date: "asc" },
      take: 100,
    })
  } catch (err) {
    events = [
      { id: 1, name: "Sprint — Östersund", date: new Date().toISOString() },
      { id: 2, name: "Poursuite — Östersund", date: new Date(Date.now()+86400000).toISOString() },
    ]
  }

  return (
    <section>
      <h2>Courses de la saison</h2>

      <div className="card">
        <ul>
          {events.map(ev => (
            <li key={ev.id}>
              <Link href={`/events/${ev.id}`}>
                {ev.name} — {new Date(ev.date).toLocaleDateString("fr-FR")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
