import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
