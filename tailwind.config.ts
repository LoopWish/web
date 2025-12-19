import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#5DADE2',
        primaryPurple: '#AF7AC5',
        textDark: '#2C3E50',
        textLight: '#7F8C8D',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
} satisfies Config;
