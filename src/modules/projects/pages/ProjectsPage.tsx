import { SectionPage } from '../../../app/placeholders/SectionPage';
import { appEnv } from '../../../shared/config/env';

import { useProjectsOverview } from '../queries/useProjectsOverview';

export function ProjectsPage() {
  const { data, error, isLoading } = useProjectsOverview();

  const badge = `Projects · ${appEnv.dataMode.toUpperCase()}`;
  const title = 'Persistent work context';

  if (isLoading) {
    return (
      <SectionPage
        badge={badge}
        title={title}
        summary="Loading projects overview from the active development data mode."
        primaryAction="Preparing projects surface"
        highlights={[
          'The Projects page now resolves its overview through a module-owned query hook.',
          `Active data mode: ${appEnv.dataMode}.`,
        ]}
      />
    );
  }

  if (error) {
    return (
      <SectionPage
        badge={badge}
        title={title}
        summary="Projects API mode is enabled, but the overview endpoint is not available yet."
        primaryAction="Verify API configuration"
        highlights={[
          error instanceof Error ? error.message : 'Unknown projects overview error.',
          'Mock mode remains the default development path when real integration is not needed.',
        ]}
      />
    );
  }

  return (
    <SectionPage
      badge={badge}
      title={title}
      summary={data?.summary ?? 'Projects overview is unavailable.'}
      primaryAction={data?.primaryAction ?? 'Open projects'}
      highlights={data?.highlights ?? []}
    />
  );
}
