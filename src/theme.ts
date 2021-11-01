import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#202028',
      light: '#474750',
      dark: '#000000',
    },
    secondary: {
      main: '#555555',
      light: '#818181',
      dark: '#2c2c2c',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily:
      'Bebas Neue, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
});

export default theme;
