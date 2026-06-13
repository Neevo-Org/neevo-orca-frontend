import { SectionPage } from '../../../app/placeholders/SectionPage';

export function WorkflowsPage() {
  return (
    <SectionPage
      badge="Workflows"
      title="Deterministic process execution"
      summary="Workflows represent predictable multi-step processes with explicit sequencing, branching, approvals, and artifact production."
      primaryAction="Create a workflow"
      highlights={[
        'Workflows stay separate from orchestrations because they solve a different execution problem.',
        'This surface should eventually expose versioning, triggers, and run history.',
      ]}
    />
  );
}
