import { Column, Row, Skeleton } from 'neevo-ui';

import { ChatLayout } from './ChatLayout';

export function ChatLoadingState() {
  return (
    <ChatLayout
      cardClassName="chat-page__card--state chat-page__card--loading"
      bodyClassName="chat-page__state-body chat-page__state-body--fill"
      header={
        <Row gap={16}>
          <Skeleton style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <Column gap={16} style={{ flex: 1, height: '80px' }}>
            <Skeleton />
            <Column gap={8} style={{ flex: 1 }}>
              <Skeleton style={{ width: '100%', height: '100%' }} />
            </Column>
          </Column>
        </Row>
      }
      body={<Skeleton style={{ width: '100%', height: '100%' }} />}
      footer={<Skeleton style={{ width: '100%', height: '100%' }} />}
    />
  );
}
