import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CriarContaModal from './components/CriarContaModal.jsx'
import EntrarModal from './components/EntrarModal.jsx'
import ContatoModal from './components/ContatoModal.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Diretorio from './pages/Diretorio.jsx'

function App() {
  const [paginaAtiva, setPaginaAtiva] = useState('inicio')

  return (
    <>
      <Navbar paginaAtiva={paginaAtiva} onNavigate={setPaginaAtiva} />
      <Home ativa={paginaAtiva === 'inicio'} />
      <Sobre ativa={paginaAtiva === 'sobre'} />
      <Diretorio ativa={paginaAtiva === 'diretorio'} />
      <Footer onNavigate={setPaginaAtiva} />
      <CriarContaModal />
      <EntrarModal />
      <ContatoModal />
    </>
  )
}

export default App
