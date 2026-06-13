import { Badge, Button, Card, CardBody, CardHeader, Column, EmptyState, Page, Text } from 'neevo-ui';

type SectionPageProps = {
  badge: string;
  title: string;
  summary: string;
  primaryAction: string;
  highlights: string[];
};

export function SectionPage({ badge, title, summary, primaryAction, highlights }: SectionPageProps) {
  return (
    <Page>
      <Column gap={20}>
        <Card>
          <CardHeader>
            <Badge>{badge}</Badge>
          </CardHeader>
          <CardBody>
            <Text as="h2" weight="semibold">
              {title}
            </Text>
            <Text tone="muted">{summary}</Text>
            <Button>{primaryAction}</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Current focus</CardHeader>
          <CardBody>
            {highlights.map((highlight) => (
              <Text key={highlight} as="p" tone="muted">
                {highlight}
              </Text>
            ))}
          </CardBody>
        </Card>

        <EmptyState
          icon="explore"
          title="Downstream tickets will deepen this surface"
          description="This page currently exists to reflect the agreed navigation model while the product-specific UX tickets are still in analysis."
        />
      </Column>
    </Page>
  );
}
