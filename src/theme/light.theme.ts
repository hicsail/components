import { createTheme } from '@mui/material';
import { baseTheme } from './base.theme';

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    background: {
      default: '#f0f0f0'
    }
  }
});
