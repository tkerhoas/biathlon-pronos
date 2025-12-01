import Link from "next/link"

export default function HomePage() {
  return (
    <section>
      <div className="card">
        <h2>Bienvenue sur Biathlon Pronos</h2>
        <p>
          Vous pouvez pronostiquer chaque course de la Coupe du Monde, suivre le classement
          et comparer vos résultats avec les autres joueurs tout au long de la saison.
        </p>

        <h3>Navigation</h3>
        <ul>
          <li>
            <Link href="/events">📅 Voir les courses</Link>
          </li>
          <li>
            <Link href="/classement">🏆 Voir le classement</Link>
          </li>
          <li>
            <Link href="/admin">🔧 Espace Administrateur</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
