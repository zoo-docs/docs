import type { BaseLayoutProps } from '@hanzo/docs/ui/layouts/shared';
import { BookOpenIcon, BrainIcon, FlaskConicalIcon, GithubIcon, NetworkIcon, LayoutGridIcon } from 'lucide-react';

// Zoo Labs Icon
function ZooIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
}

export const logo = (
  <div className="flex items-center gap-2">
    <ZooIcon className="size-5" />
  </div>
);

export const baseOptions = (): BaseLayoutProps => ({
  nav: {
    title: (
      <>
        {logo}
        <span className="font-semibold">Zoo</span>
      </>
    ),
  },
  links: [
    {
      text: 'Docs',
      url: '/docs',
      icon: <BookOpenIcon />,
    },
    {
      text: 'Components',
      url: '/docs/components',
      icon: <LayoutGridIcon />,
    },
    {
      text: 'Blocks',
      url: '/docs/blocks',
      icon: <NetworkIcon />,
    },
    {
      text: 'Charts',
      url: '/docs/charts',
      icon: <FlaskConicalIcon />,
    },
  ],
  githubUrl: 'https://github.com/zooai',
});

// Project categories for the docs portal
export const projectCategories = [
  {
    title: 'AI & Training',
    description: 'Decentralized AI training and models',
    icon: BrainIcon,
    projects: [
      { name: 'Gym', href: '/docs/gym', description: 'Decentralized training platform' },
      { name: 'Zen Models', href: '/docs/zen', description: 'The Zen model family' },
      { name: 'DSO', href: '/docs/dso', description: 'Distributed Stochastic Optimizer' },
    ],
  },
  {
    title: 'Research & Governance',
    description: 'ZIPs, papers, and community governance',
    icon: BookOpenIcon,
    projects: [
      { name: 'ZIPs', href: '/docs/zips', description: 'Zoo Improvement Proposals' },
      { name: 'Papers', href: '/docs/papers', description: 'Research publications' },
      { name: 'Governance', href: '/docs/governance', description: 'DAO and voting' },
    ],
  },
  {
    title: 'Developer Tools',
    description: 'SDKs and development resources',
    icon: FlaskConicalIcon,
    projects: [
      { name: 'ZDK', href: '/docs/zdk', description: 'Zoo Developer Kit' },
      { name: 'Solidity', href: '/docs/solidity', description: 'Smart contracts' },
      { name: 'Node', href: '/docs/node', description: 'Run a Zoo node' },
    ],
  },
  {
    title: 'Ecosystem',
    description: 'Applications and services',
    icon: NetworkIcon,
    projects: [
      { name: 'Exchange', href: '/docs/exchange', description: 'Zoo Exchange' },
      { name: 'Explorer', href: '/docs/explorer', description: 'Block explorer' },
      { name: 'Vote', href: '/docs/vote', description: 'Governance voting' },
    ],
  },
];
