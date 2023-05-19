import { createTheme } from '@mui/material';
import { baseTheme } from './base.theme';

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark'
  }
});
