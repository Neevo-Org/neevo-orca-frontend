import { Badge, Button, Card, CardBody, CardHeader } from 'neevo-ui';

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
    detail: 'React Hook Form and Zod are installed as the default pair for form state and validation.',
  },
  {
    title: 'UI foundation',
    detail: 'neevo-ui is installed as the shared styling and component foundation for follow-up UI work.',
  },
  {
    title: 'Global state',
    detail: 'No major global state library is included by default; feature state should stay local until the app proves otherwise.',
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

      <Card>
        <CardHeader>
          <div className="library-card-header">
            <h3>Issue 6 baseline</h3>
            <Badge>Installed</Badge>
          </div>
        </CardHeader>
        <CardBody>
          <p>
            The chosen frontend stack is now present in the repo: `neevo-ui`, React Router, TanStack Query,
            React Hook Form, and Zod.
          </p>
          <Button type="button">Neevo UI ready for follow-up tickets</Button>
        </CardBody>
      </Card>
    </section>
  );
}
