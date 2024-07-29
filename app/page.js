import { GrUserWorker } from 'react-icons/gr'
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <header className="bg-gray-200 text-primary-50 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center gap-3 text-primary">
            <GrUserWorker className="mb-2" />
            ArtiConnect
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 min-h-screen">
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Facilitez vos transactions avec ArtiConnect
          </h2>
          <p className="text-lg text-text">
            Notre plateforme connecte les artisans aux marchés et propose une
            solution de caisse efficace.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary">
              Connexion facile
            </h3>
            <p>
              Connectez-vous facilement aux marchés et aux clients grâce à notre
              plateforme intuitive.
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary">
              Gestion des ventes
            </h3>
            <p>
              Gérez vos ventes avec notre logiciel de caisse intégré, adapté à
              tous vos besoins.
            </p>
          </div>
          <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-primary">
              Sécurité des données
            </h3>
            <p>
              Vos données sont protégées et sécurisées, garantissant
              confidentialité et intégrité.
            </p>
          </div>
        </section>

        <section className="bg-linear-primary-secondary text-text p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Commencez dès aujourd'hui
          </h2>
          <p className="text-lg mb-6">
            Inscrivez-vous maintenant et améliorez vos transactions avec
            ArtiConnect.
          </p>
          <button className="bg-accent text-background px-4 py-2 rounded-lg font-bold">
            S'inscrire
          </button>
        </section>
      </main>

      <footer className="bg-primary text-background py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ArtiConnect. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
