/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {
      colors: {
        'custom-bg': '#fffefa',
        secondary: '#fe6b5c',
        secondaryHover: '#C91c19'
      },
      fontFamily: {
        serif: ['UI Serif', 'Georgia', 'serif'],
        typewriter: ['UI Monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

