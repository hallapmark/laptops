
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import VaataArvuteid from './pages/VaataArvuteid'
import LisaArvuti from './pages/LisaArvuti'
import Ostukorv from './pages/Ostukorv'

function App() {

  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/all">
        <button>Vaata sülearvuteid</button>
      </Link>
      <Link to="/add">
        <button>Lisa sülearvuti</button>
      </Link>
      <Link to="/cart">
        <button>Ostukorv</button>
      </Link>
      <Routes>
        <Route path="/" element={ <Avaleht /> } />
        <Route path="/all" element={ <VaataArvuteid /> } />
        <Route path="/add" element={ <LisaArvuti /> } />
        <Route path="/cart" element={ <Ostukorv /> } />
      </Routes>
    </>
  )
}

export default App
