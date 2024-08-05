import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import IndexBody from './components/IndexBody/IndexBody';

function App() {

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<IndexBody />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
