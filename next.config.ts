import { createMDX } from '@hanzo/docs/mdx/next';
import type { NextConfig } from 'next';

const config: NextConfig = {
  // GitHub Pages serves the exported `out/` directory; there is no server.
  output: 'export',
  reactStrictMode: true,
  // @hanzo/gui and its primitives ship untranspiled ESM against react-native
  // module resolution. Next compiles them and resolves `react-native` to the web
  // implementation — that is the whole browser story for the gui substrate.
  transpilePackages: ['@hanzo/gui', '@hanzo/ui', 'react-native-web'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
    };
    // `.web.*` first is what makes the react-native ecosystem resolve its web
    // variants; without it a package resolves its native entry and webpack
    // chokes on React Native's Flow source.
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      ...(config.resolve.extensions || []),
    ];
    // react-native-svg, reached through the icons, imports the native asset
    // registry to resolve an image asset's URI. A web build never takes that
    // path, and webpack resolves imports statically — so an unused import is
    // still a failed build. `fallback` is webpack's name for exactly this:
    // absent module, empty module.
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native/assets-registry/registry': false,
    };
    return config;
  },
  serverExternalPackages: ['shiki'],
  images: {
    unoptimized: true,
  },
};

// No outDir: `docs-mdx` (the CLI, run before the build) and this plugin both
// write the framework's default `docs/`. Naming one of them moves only that one
// and leaves the other's copy behind.
const withMDX = createMDX();

export default withMDX(config);
