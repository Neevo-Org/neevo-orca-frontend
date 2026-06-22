import type { ChangeEvent } from 'react';
import { Button, Column, I, Row, TextArea } from 'neevo-ui';

import type { ChatAgent } from '../domain/types';

type ChatComposerProps = {
  agent: ChatAgent;
  draft: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onOpenAgents: () => void;
  onSend: () => void;
};

export function ChatComposer({ agent, draft, placeholder, onChange, onOpenAgents, onSend }: ChatComposerProps) {
  return (
    <Column gap={18}>
      <TextArea value={draft} onChange={onChange} placeholder={placeholder} className="chat-page__textarea" />
      <Row className="chat-page__composer">
        <Button type="button" onClick={onOpenAgents}>
          <Row gap={8} align="center">
            <I>smart_toy</I>
            <span>{agent.name}</span>
          </Row>
        </Button>
        <Button type="button" onClick={onSend}>
          <Row gap={8} align="center">
            <I>send</I>
            <span>Send message</span>
          </Row>
        </Button>
      </Row>
    </Column>
  );
}
