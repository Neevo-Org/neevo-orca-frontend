import { SectionPage } from '../../../app/placeholders/SectionPage';

export function RunsPage() {
  return (
    <SectionPage
      badge="Runs"
      title="Cross-surface observability"
      summary="Runs is the shared place to inspect execution history, outputs, tool calls, failures, and replay/debug information across the product."
      primaryAction="Inspect recent runs"
      highlights={[
        'Runs is global because execution history cuts across Chat, workflows, and orchestrations.',
        'This surface will later need strong filtering by execution source and project context.',
      ]}
    />
  );
}
