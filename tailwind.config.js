/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"EB Garamond"', 'serif'],
        body: ['Raleway', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'h1': ['36px', { lineHeight: '1.1' }],
        'h2': ['33px', { lineHeight: '1.15' }],
        'h3': ['30px', { lineHeight: '1.2' }],
        'h4': ['26px', { lineHeight: '1.25' }],
        'h5': ['22px', { lineHeight: '1.3' }],
        'h6': ['17px', { lineHeight: '1.4' }],
        'p1': ['14px', { lineHeight: '1.6' }],
        'p2': ['13px', { lineHeight: '1.6' }],
        'p3': ['11px', { lineHeight: '1.6' }]
      },
      maxWidth: {
        page: '1200px'
      }
    }
  },
  plugins: []
}
