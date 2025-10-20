import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'var(--background)',
        'custom-light': 'var(--foreground)',
        'custom-blue': 'var(--accent)',
        'custom-green': '#00ff00',
        'custom-purple': 'var(--purple)',
      },
      fontFamily: {
        body: ['var(--font-lato)', 'sans-serif'],
        code: ['var(--font-fira-code)', 'monospace'],
        heading: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
