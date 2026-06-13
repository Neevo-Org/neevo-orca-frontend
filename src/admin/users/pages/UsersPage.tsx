import { SectionPage } from '../../../app/placeholders/SectionPage';

export function UsersPage() {
  return (
    <SectionPage
      badge="Admin"
      title="User management"
      summary="This surface will manage invitations, roles, team access, and usage visibility across the organization."
      primaryAction="Manage users"
      highlights={['Admin controls remain grouped separately from core product work areas.']}
    />
  );
}
