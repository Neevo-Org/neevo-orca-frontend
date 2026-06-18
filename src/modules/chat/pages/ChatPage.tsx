import { SectionPage } from '../../../app/placeholders/SectionPage';
import { appEnv } from '../../../shared/config/env';

import { useChatOverview } from '../queries/useChatOverview';

export function ChatPage() {
  const { data, error, isLoading } = useChatOverview();

  const badge = `Chat · ${appEnv.dataMode.toUpperCase()}`;
  const title = 'Direct agent interaction';

  if (isLoading) {
    return (
      <SectionPage
        badge={badge}
        title={title}
        summary="Loading chat overview from the active development data mode."
        primaryAction="Preparing chat surface"
        highlights={[
          'The Chat page now resolves its overview through a module-owned query hook.',
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
        summary="Chat API mode is enabled, but the overview endpoint is not available yet."
        primaryAction="Verify API configuration"
        highlights={[
          error instanceof Error ? error.message : 'Unknown chat overview error.',
          'Mock mode remains the default development path when real integration is not needed.',
        ]}
      />
    );
  }

  return (
    <SectionPage
      badge={badge}
      title={title}
      summary={data?.summary ?? 'Chat overview is unavailable.'}
      primaryAction={data?.primaryAction ?? 'Open chat'}
      highlights={data?.highlights ?? []}
    />
  );
}
