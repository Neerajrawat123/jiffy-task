/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors:{
        "links": '#5A5A62',
        'search-b': '#DADCE0',
        'profile-img':'#F9F5FF',
        'content': '#64748B'
      }
    },
  },
  plugins: [],
}

