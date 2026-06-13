import { SectionPage } from '../../../app/placeholders/SectionPage';

export function ChatPage() {
  return (
    <SectionPage
      badge="Chat"
      title="Direct agent interaction"
      summary="Chat is the landing surface and operational front door for Neevo Orca. Users should be able to ask questions, execute work, and attach context here before moving into more structured areas."
      primaryAction="Start a conversation"
      highlights={[
        'Chat is the default landing surface for casual and power users alike.',
        'This area will feed ticket #4 on direct agent interaction and chat-session UX.',
      ]}
    />
  );
}
