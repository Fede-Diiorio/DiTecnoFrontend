import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import IndexBody from './components/IndexBody/IndexBody';
import Product from './components/Product/Product'
import ScrollToTop from './utils/ScrollToTop';
import Door from './components/Door/Door';
import Window from './components/Window/Window';
import CartView from './components/CartView/CartView';
import { CartProvider } from './context/CartContext';
import { LocalStorageProvider } from './context/LocalStorageContext';

function App() {

  return (
    <main>
      <BrowserRouter>
        <LocalStorageProvider>
          <CartProvider>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path='/' element={<IndexBody />} />
              <Route path='/producto' element={<Product />} />
              <Route path='/puerta/*' element={<Door />} />
              <Route path='/ventana/*' element={<Window />} />
              <Route path='/cart' element={<CartView />} />
            </Routes>
            <Footer />
          </CartProvider>
        </LocalStorageProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
