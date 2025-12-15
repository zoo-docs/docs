import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

// Zoo Icon Component
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

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      nav={{
        ...baseOptions.nav,
        title: (
          <div className="flex items-center gap-2">
            <ZooIcon className="size-5" />
            <span className="font-semibold">Zoo Docs</span>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
