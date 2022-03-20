import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f33535',
    },

    background: {
      default: '#0f0f0f',
    },
    text: {
      primary: '#fff',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});
