const architectureDecisions = [
  {
    title: 'Application scaffold',
    detail: 'Vite keeps the platform lightweight while React + TypeScript provide a typed SPA foundation.',
  },
  {
    title: 'Rendering model',
    detail: 'Client-side rendering is the default until a concrete SEO or edge-rendering requirement exists.',
  },
  {
    title: 'Routing',
    detail: 'React Router owns route composition so follow-up tickets can add nested layouts per product area.',
  },
  {
    title: 'Server state',
    detail: 'TanStack Query is the baseline for API data fetching, caching, and invalidation.',
  },
  {
    title: 'Forms and validation',
    detail: 'React Hook Form and Zod are reserved as the default pair for future form-heavy flows.',
  },
  {
    title: 'UI foundation',
    detail: 'neevo-ui remains the intended styling and component system once the package is introduced into the repo.',
  },
];

export function HomePage() {
  return (
    <section className="page">
      <header className="hero-card">
        <p className="eyebrow">Ticket 5 output</p>
        <h2>Initial frontend architecture</h2>
        <p>
          This starter app codifies the chosen frontend platform so later UI tickets can build on a stable shell
          instead of revisiting scaffolding decisions.
        </p>
      </header>

      <div className="decision-grid">
        {architectureDecisions.map((decision) => (
          <article key={decision.title} className="decision-card">
            <h3>{decision.title}</h3>
            <p>{decision.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}