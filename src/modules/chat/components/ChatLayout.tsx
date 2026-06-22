import type { ReactNode } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Column } from 'neevo-ui';

type ChatLayoutProps = {
  header: ReactNode;
  body: ReactNode;
  footer?: ReactNode;
  cardClassName?: string;
  bodyClassName?: string;
};

export function ChatLayout({ header, body, footer, cardClassName, bodyClassName }: ChatLayoutProps) {
  return (
    <Column gap={24} className="chat-page">
      <Card className={cardClassName ? `chat-page__card ${cardClassName}` : 'chat-page__card'}>
        <CardHeader>{header}</CardHeader>
        <CardBody className={bodyClassName}>{body}</CardBody>
        {footer ? <CardFooter>{footer}</CardFooter> : null}
      </Card>
    </Column>
  );
}
