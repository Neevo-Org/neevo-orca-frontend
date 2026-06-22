import { Avatar, Badge, Column, Row, Text } from 'neevo-ui';

import type { ChatConversation, ChatAgent } from '../domain/types';
import { getChatAvatarLabel } from './chat-avatar';

type ChatHeaderProps = {
  agent: ChatAgent;
  conversation?: ChatConversation;
};

export function ChatHeader({ agent, conversation }: ChatHeaderProps) {
  return (
    <Column gap={16}>
      <Row align="center" className="chat-page__header-row">
        <Row gap={12} align="center">
          <Avatar
            name={agent.name}
            fallback={getChatAvatarLabel(agent.name)}
            className="chat-page__avatar chat-page__avatar--large"
          />
          <Column gap={4}>
            <Row gap={8} align="center">
              <Text as="h2" weight="semibold">
                {agent.name}
              </Text>
              {agent.status === 'default' ? <Badge>Primary</Badge> : null}
            </Row>
            <Text tone="muted">{conversation?.summary ?? 'Direct conversation thread.'}</Text>
          </Column>
        </Row>
      </Row>
      <Row gap={16} align="center" className="chat-page__meta-row">
        <Text tone="muted">Direct agent interaction only</Text>
        <Text tone="muted">No workflow traces. No orchestration internals.</Text>
      </Row>
    </Column>
  );
}
