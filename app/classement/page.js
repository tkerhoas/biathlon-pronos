import prisma from "../../lib/prisma"

export default async function ClassementPage() {
  let ranking = []

  try {
    ranking = await prisma.user.findMany({
      orderBy: { id: "asc" },
      take: 50,
    })
  } catch {
    ranking = [
      { username: "Tanguy", pts: 120 },
      { username: "Mika", pts: 98 },
      { username: "Jules", pts: 87 },
    ]
  }

  return (
    <section>
      <h2>Classement général</h2>

      <div className="card">
        <ol>
          {ranking.map((u, i) => (
            <li key={i}>
              <strong>{u.username}</strong> — {u.pts || 0} pts
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
