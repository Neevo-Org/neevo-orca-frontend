import { SectionPage } from '../../../app/placeholders/SectionPage';

export function AgentsPage() {
  return (
    <SectionPage
      badge="Agents"
      title="Reusable agent definitions"
      summary="Agents define prompts, model choices, permissions, tools, and memory access that can later be used in Chat, workflows, and orchestrations."
      primaryAction="Create an agent"
      highlights={[
        'Agents are reusable assets, not the main entrypoint for casual users.',
        'This surface should stay globally discoverable even when attached to projects.',
      ]}
    />
  );
}
