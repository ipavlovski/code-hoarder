import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}', './mdx-components.tsx'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      tokens: {},
    },
  },

  globalCss: defineGlobalStyles({
    'html, body': {
      backgroundColor: 'gray.900',
      color: 'gray.200'
    },
  }),

  // hash classnames for devtools readability
  hash: { cssVar: false, className: true },

  // enable codegen components
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
})
