import { SectionPage } from '../../../app/placeholders/SectionPage';

export function ProjectsPage() {
  return (
    <SectionPage
      badge="Projects"
      title="Persistent work context"
      summary="Projects collect files, goals, instructions, knowledge, linked assets, and artifacts around a concrete objective."
      primaryAction="Open project workspace"
      highlights={[
        'Projects are the organizational anchor, not the default landing surface.',
        'This area will feed ticket #3 on workspace UX and object relationships.',
      ]}
    />
  );
}
