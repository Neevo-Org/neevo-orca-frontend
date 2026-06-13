import { SectionPage } from '../../../app/placeholders/SectionPage';

export function AuditLogsPage() {
  return (
    <SectionPage
      badge="Admin"
      title="Audit logs"
      summary="Security-sensitive activity, permission changes, connector changes, and approval events belong in a dedicated audit surface."
      primaryAction="Inspect audit logs"
      highlights={['Audit visibility should not pollute the primary user navigation model.']}
    />
  );
}
