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
        'content': '#64748B',
        
      },
      boxShadow:{
        'search': '0px 0px 8px 0px #38464D40',
        'search-hover': '0px 0px 40px 0px #195BDF66'
      }
    },
  },
  plugins: [],
}

