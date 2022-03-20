import { ThemeProvider, Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Detail from './Pages/Detail';
import { theme } from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category/search/:keyword' element={<Catalog />} />
          <Route path='/:category/:id' element={<Detail />} />
          <Route path='/:category' element={<Catalog />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
