import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Splash from './components/Splash';

export default function App() {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Splash 
        title="Zak Dowsett"
        subtitle="Full-Stack Developer"
        avatar="avatar.jpg"
        background="mountains.jpg"
        links={[]}
      />
    </ThemeProvider>
  );
}
