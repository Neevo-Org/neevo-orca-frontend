import { Card, CardBody, Column, Row, Text } from 'neevo-ui';

import type { ChatAgent, ChatMessage } from '../domain/types';

type ChatConversationProps = {
  agent: ChatAgent;
  messages: ChatMessage[];
};

export function ChatConversation({ agent, messages }: ChatConversationProps) {
  return (
    <Column className="chat-page__messages">
      {messages.map((message) => (
        <Row
          key={message.id}
          className={`chat-page__message-row${message.author === 'user' ? ' chat-page__message-row--user' : ''}`}
        >
          <Card className={`chat-page__bubble chat-page__bubble--${message.author}`}>
            <CardBody>
              <Column gap={10}>
                <Row align="center" className="chat-page__message-meta">
                  <Text tone={message.author === 'user' ? undefined : 'muted'} weight="semibold">
                    {message.author === 'user' ? 'You' : message.author === 'agent' ? agent.name : 'System'}
                  </Text>
                  <Text tone={message.author === 'user' ? undefined : 'muted'}>{message.timestamp}</Text>
                </Row>
                <Text>{message.body}</Text>
              </Column>
            </CardBody>
          </Card>
        </Row>
      ))}
    </Column>
  );
}
