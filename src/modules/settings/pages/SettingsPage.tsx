import { SectionPage } from '../../../app/placeholders/SectionPage';

export function SettingsPage() {
  return (
    <SectionPage
      badge="Settings"
      title="Personal and account-level controls"
      summary="Settings should hold personal preferences, model defaults, API keys, security, and other controls that support the rest of the workspace."
      primaryAction="Review settings"
      highlights={['Settings belongs in utility navigation rather than the primary execution/workspace group.']}
    />
  );
}
