module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ruddy-pink': '#DF8D9F',
        rhythm: '#706C88',
        'red-primary': '#DC2F2F',
        'orange-primary': '#FF894C',
        'gray-primary': '#F8F8F8',
        'black-primary': '#363636',
      },
      display: ['group-hover'],
    },
  },
  plugins: [],
};
