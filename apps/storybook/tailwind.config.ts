import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};

export default config;
