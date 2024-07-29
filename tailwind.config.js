/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: '#0a010e',
        background: '#fbf5fe',
        primary: '#bb2bec',
        secondary: '#c1f488',
        accent: '#51f088',
      },
      backgroundImage: {
        'linear-primary-secondary': 'linear-gradient(#bb2bec, #c1f488)',
        'linear-primary-accent': 'linear-gradient(#bb2bec, #51f088)',
        'linear-secondary-accent': 'linear-gradient(#c1f488, #51f088)',
        'radial-primary-secondary': 'radial-gradient(#bb2bec, #c1f488)',
        'radial-primary-accent': 'radial-gradient(#bb2bec, #51f088)',
        'radial-secondary-accent': 'radial-gradient(#c1f488, #51f088)',
      },
    },
  },
  plugins: [],
}
