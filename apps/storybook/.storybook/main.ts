import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/nextjs-vite';

const currentDir = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../apps/web/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  viteFinal: async (config) => {
    const aliasMap = {
      '@repo/ui/globals.css': path.resolve(
        currentDir,
        '../../../packages/ui/src/styles/globals.css',
      ),
      '@repo/ui': path.resolve(currentDir, '../../../packages/ui/src'),
      '@repo/web': path.resolve(currentDir, '../../../apps/web/src'),
      '@ui': path.resolve(currentDir, '../../../packages/ui/src'),
    };

    if (!config.resolve) {
      config.resolve = {};
    }

    if (Array.isArray(config.resolve.alias)) {
      config.resolve.alias.push(
        ...Object.entries(aliasMap).map(([find, replacement]) => ({
          find,
          replacement,
        })),
      );
      return config;
    }

    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      ...aliasMap,
    };

    return config;
  },
};

export default config;
