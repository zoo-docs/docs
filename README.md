# Zoo Docs

Official documentation for Zoo Labs Foundation - Democratizing AI through decentralized training.

## Overview

This is a [Fumadocs](https://fumadocs.vercel.app) documentation site for the Zoo ecosystem.

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the docs.

## Structure

```
zoo-docs/
├── app/                    # Next.js App Router
│   ├── docs/              # Documentation pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── content/               # MDX content
│   └── docs/             # Documentation content
├── lib/                   # Utilities
│   ├── source.ts         # Fumadocs source config
│   └── layout.shared.tsx # Shared layout options
└── public/               # Static assets
```

## Brand Colors

Zoo uses an emerald green color scheme:

- **Primary**: `#2ECC71` (Emerald Green)
- **Secondary**: `#27AE60` (Forest Green)
- **Accent**: `#F39C12` (Amber)
- **Background**: `#0F1419` (Dark)

## Ecosystem Links

- **Zoo Labs**: https://zoo.ngo
- **Zoo Network**: https://zoo.network
- **Gym**: https://gym.zoo.ngo
- **AI Chat**: https://ai.zoo.ngo
- **Zen Models**: https://zenlm.ai
- **GitHub**: https://github.com/zooai

## Building

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Part of Multi-Brand Docs System

This documentation site shares core functionality with:
- [Hanzo Docs](https://github.com/hanzoai/docs)
- [Lux Docs](https://github.com/luxfi/docs)

All three use the same Fumadocs foundation with brand-specific theming.
