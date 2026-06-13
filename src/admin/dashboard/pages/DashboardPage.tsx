import { SectionPage } from '../../../app/placeholders/SectionPage';

export function DashboardPage() {
  return (
    <SectionPage
      badge="Admin"
      title="Organization dashboard"
      summary="Admin views are intentionally separated from daily user work so governance does not dominate the main workspace navigation."
      primaryAction="View admin dashboard"
      highlights={['Admin navigation should only be visible to users with the appropriate scope.']}
    />
  );
}
