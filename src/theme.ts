// theme.ts
import { createTheme } from '@mui/material/styles';

// Assuming Inter font is imported globally in your index.html or App.css
const interFontFamily = '"Inter", sans-serif';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fbc02d', // Yellow accent color
    },
    background: {
      default: '#ffffff', // Light theme background
      paper: '#f5f5f5', // Lighter shade for elements like cards and dialogs
    },
    text: {
      primary: '#333333', // Darker text for better readability
      secondary: '#575757',
    },
  },
  typography: {
    fontFamily: interFontFamily,
    fontSize: 12, // Smaller base font size
    button: {
      textTransform: 'none', // Buttons with normal casing
    },
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    // Define other typography variants as needed
  },
  components: {
    // Override MUI components styles here
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '6px 12px', // Example of custom padding for buttons
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '8px', // Example margin for text fields
        },
      },
    },
    // Add other component overrides as needed
  },
});

export default theme;
