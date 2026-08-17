import { docs } from '@/docs/server';
import { loader } from '@hanzo/docs/core/source';
import { Icon } from '@/components/icons';
import { createElement } from 'react';

export const source = loader({
  baseUrl: '/docs',
  source: docs.toSource(),
  // Frontmatter and meta.json name icons by their lucide name. Without a
  // resolver the name is rendered as text, so a page called Gym would read
  // "DumbbellGym" in the sidebar.
  icon: (name) => (name ? createElement(Icon, { name }) : undefined),
});
