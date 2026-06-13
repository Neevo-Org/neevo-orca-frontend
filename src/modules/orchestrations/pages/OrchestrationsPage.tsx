import { SectionPage } from '../../../app/placeholders/SectionPage';

export function OrchestrationsPage() {
  return (
    <SectionPage
      badge="Orchestrations"
      title="Multi-agent runtime structures"
      summary="Orchestrations define hierarchical or collaborative agent systems where delegation and dynamic execution matter more than fixed process flow."
      primaryAction="Create an orchestration"
      highlights={[
        'This is intentionally separated from workflows to prevent conceptual overlap.',
        'It should remain visible, but likely feel more advanced than the rest of the workspace.',
      ]}
    />
  );
}
