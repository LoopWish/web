import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Back-compat names (existing code uses these)
        primaryBlue: 'rgb(var(--lw-color-action-primary-bg) / <alpha-value>)',
        primaryPurple: 'rgb(var(--lw-color-action-secondary-fg) / <alpha-value>)',
        textDark: 'rgb(var(--lw-color-text-primary) / <alpha-value>)',
        textLight: 'rgb(var(--lw-color-text-secondary) / <alpha-value>)',
        background: 'rgb(var(--lw-color-surface-canvas) / <alpha-value>)',

        // Semantic names (preferred)
        lwTextPrimary: 'rgb(var(--lw-color-text-primary) / <alpha-value>)',
        lwTextSecondary: 'rgb(var(--lw-color-text-secondary) / <alpha-value>)',
        lwSurfaceCanvas: 'rgb(var(--lw-color-surface-canvas) / <alpha-value>)',
        lwSurfaceElevated: 'rgb(var(--lw-color-surface-elevated) / <alpha-value>)',
        lwActionPrimaryBg: 'rgb(var(--lw-color-action-primary-bg) / <alpha-value>)',
        lwActionPrimaryFg: 'rgb(var(--lw-color-action-primary-fg) / <alpha-value>)',
      },
    },
  },
  plugins: [],
} satisfies Config;
