/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          DEFAULT: '#17181A',
          soft: '#212327',
          card: '#2A2C30',
        },
        steel: {
          DEFAULT: '#8A8F98',
          light: '#C4C8CD',
          dark: '#5B5F66',
        },
        machine: {
          yellow: '#F5B400',
          yellowDark: '#C98F00',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'diagonal-stripes':
          'repeating-linear-gradient(135deg, rgba(245,180,0,0.06) 0px, rgba(245,180,0,0.06) 2px, transparent 2px, transparent 14px)',
      },
      boxShadow: {
        yellow: '0 0 0 1px rgba(245,180,0,0.4), 0 8px 24px rgba(245,180,0,0.15)',
      },
    },
  },
  plugins: [],
}
