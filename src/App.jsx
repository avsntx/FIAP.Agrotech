import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CriarContaModal from './components/CriarContaModal.jsx'
import ContatoModal from './components/ContatoModal.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('inicio')

  return (
    <>
      <Navbar paginaAtiva={paginaAtiva} onNavigate={setPaginaAtiva} />
      <Home ativa={paginaAtiva === 'inicio'} />
      <Sobre ativa={paginaAtiva === 'sobre'} />
      <Footer />
      <CriarContaModal />
      <ContatoModal />
    </>
  )
}

export default App
