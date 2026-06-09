import { NavLink, Outlet } from 'react-router-dom';

const primaryNavigation = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/chat', label: 'Chat' },
  { to: '/runs', label: 'Runs' },
  { to: '/admin', label: 'Admin' },
];

export function AppShell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <p className="eyebrow">Neevo Orca</p>
          <h1>Frontend platform baseline</h1>
          <p className="muted">
            React, Vite, and TypeScript provide the application shell for follow-up product work.
          </p>
        </div>

        <nav aria-label="Primary">
          <ul className="nav-list">
            {primaryNavigation.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}