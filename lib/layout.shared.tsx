import type { BaseLayoutProps } from '@hanzo/docs/ui/layouts/shared';
import { Brain, Network, Vote } from '@/components/icons';

// One element, not a fragment: the header renders the title inside a link and
// inside the mobile trigger, and a pair of siblings there is a list React wants
// keyed. It is also what keeps the mark on the wordmark's centre line.
export const title = (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
    {/* eslint-disable-next-line @next/next/no-img-element -- the export is static and the mark is an SVG; next/image would only add a loader. */}
    <img src="/zoo-logo.svg" alt="" width={20} height={20} />
    Zoo Docs
  </span>
);

export const baseOptions = (): BaseLayoutProps => ({
  nav: { title },
  links: [
    {
      text: 'Network',
      url: 'https://zoo.network',
      icon: <Network />,
    },
    {
      text: 'Gym',
      url: 'https://gym.zoo.ngo',
      icon: <Brain />,
    },
    {
      text: 'Vote',
      url: 'https://zoo.vote',
      icon: <Vote />,
    },
  ],
  githubUrl: 'https://github.com/zooai',
});
