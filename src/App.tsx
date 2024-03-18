// App.tsx or your entry file
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // path to your theme file
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import router from "./router"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;

