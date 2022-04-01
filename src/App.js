import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@material-ui/core';
import {Layout} from './components/Layout/layout';
import { Stories } from './components/stories/Stories';

export const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Stories />
      </Layout>
    </ThemeProvider>
  );
};
