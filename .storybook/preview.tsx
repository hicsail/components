import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme();

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
