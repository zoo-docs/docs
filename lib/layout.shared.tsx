import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// Zoo Icon for nav
function ZooIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5" />
      <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5" />
      <path d="M12 22v-6" />
      <path d="M9 12h6" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <ZooIcon className="size-5" />
        <span className="font-semibold">Zoo Docs</span>
      </div>
    ),
  },
  links: [
    {
      text: 'Zoo Network',
      url: 'https://zoo.network',
    },
    {
      text: 'Gym',
      url: 'https://gym.zoo.ngo',
    },
    {
      text: 'ZIPs',
      url: 'https://github.com/zooai/ZIPs',
    },
  ],
  githubUrl: 'https://github.com/zooai',
};
