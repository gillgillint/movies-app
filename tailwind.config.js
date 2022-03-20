module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    extend: {
      spacing: {
        7.5: '30px',
        11.5: '46px',
        12.5: '50px',
        15: '60px',
      },
    },
  },
  plugins: [],
  important: true,
};
