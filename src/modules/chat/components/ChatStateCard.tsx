import type { ReactNode } from 'react';
import { Badge, Card, CardBody, Column, Row, Text } from 'neevo-ui';

import { ChatLayout } from './ChatLayout';

type ChatStateCardProps = {
  badge: string;
  title: string;
  description: ReactNode;
  details?: ReactNode;
  cardClassName?: string;
  icon?: ReactNode;
  footer?: ReactNode;
  bodyClassName?: string;
  headerContent?: ReactNode;
  bodyContent?: ReactNode;
};

export function ChatStateCard({
  badge,
  title,
  description,
  details,
  cardClassName,
  icon,
  footer,
  bodyClassName,
  headerContent,
  bodyContent,
}: ChatStateCardProps) {
  const header = headerContent ?? (
    <Column gap={16}>
      {icon ? (
        <Row gap={12} align="center">
          {icon}
          <Column gap={6}>
            <Badge>{badge}</Badge>
            <Text as="h2" weight="semibold">
              {title}
            </Text>
          </Column>
        </Row>
      ) : (
        <Column gap={16}>
          <Badge>{badge}</Badge>
          <Text as="h2" weight="semibold">
            {title}
          </Text>
        </Column>
      )}
    </Column>
  );

  const body = bodyContent ?? (
    <Card>
      <CardBody>
        <Text>{description}</Text>
        {details ? <Text tone="muted">{details}</Text> : null}  
      </CardBody>
    </Card>
  );

  return (
    <ChatLayout
      header={header}
      body={body}
      footer={footer}
      cardClassName={cardClassName}
      bodyClassName={bodyClassName ?? 'chat-page__state-body'}
    />
  );
}
