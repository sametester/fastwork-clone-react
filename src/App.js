import './App.css';
import theme from './theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layouts/Header/Header';
import RouteConfig from './routes/routeConfig';
import LoadingScreen from './components/Utils/LoadingScreen';
import { Backdrop } from '@mui/material';
import { useContext } from 'react';
import { LoadingContext } from './contexts/LoadingContext';
import NavBarCategory from './components/NavOrder/NavBarCategory';
import NavOrderWrapper from './components/NavOrder/NavOrderWrapper';

function App() {
  const { isLoading } = useContext(LoadingContext);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        {/* <NavOrderWrapper /> */}
        <RouteConfig />
      </div>
      <LoadingScreen open={isLoading} />
    </ThemeProvider>
  );
}

export default App;
