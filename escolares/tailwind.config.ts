/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#67B346',
          dark: '#2D5A27',
          light: '#8CC474',
          foreground: '#FFFFFF',
        },
        'secondary': {
          DEFAULT: '#2D5A27',
          light: '#4A7744',
          dark: '#1A3617',
        },
      },
    },
  },
  plugins: [],
}