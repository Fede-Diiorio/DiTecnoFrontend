import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import IndexBody from './components/IndexBody/IndexBody';
import Product from './components/Product/Product'
import ScrollToTop from './utils/ScrollToTop';
import OpeningType from './components/OpeningType/OpeningType';

function App() {

  return (
    <main>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<IndexBody />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:pid/' element={<OpeningType />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
