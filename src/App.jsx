import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { LocalStorageProvider } from './context/LocalStorageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IndexBody from './components/IndexBody/IndexBody';
import Product from './components/Product/Product'
import ScrollToTop from './utils/ScrollToTop';
import Door from './components/Door/Door';
import Window from './components/Window/Window';
import CartView from './components/CartView/CartView';
import Checkout from './components/Checkout/Checkout';

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
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
          </CartProvider>
        </LocalStorageProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
