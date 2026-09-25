/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,js,html}'],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: 'rgba(6, 12, 20, 0.72)',
          border: 'rgba(56, 189, 248, 0.25)',
          cyan: '#38bdf8',
          amber: '#fbbf24',
          red: '#f87171',
          green: '#34d399',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        hud: '0 0 24px rgba(56,189,248,0.15), inset 0 0 24px rgba(56,189,248,0.05)',
      },
    },
  },
  plugins: [],
};
