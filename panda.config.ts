import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  globalCss: defineGlobalStyles({
    'html, body': {
      backgroundColor: 'gray.900',
      color: 'gray.200',
      scrollBehavior: 'smooth',
      scrollPaddingTop: '5rem',
    },
  }),

  // hash classnames for devtools readability
  hash: { cssVar: false, className: true },

  // enable codegen components
  jsxFramework: 'react',

  // The output directory for your css system
  outdir: "styled-system",
});
