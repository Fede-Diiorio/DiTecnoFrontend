import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Routes } from 'react-router-dom'

function App() {

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
