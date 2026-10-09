import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CriarContaModal from './components/CriarContaModal.jsx'
import EntrarModal from './components/EntrarModal.jsx'
import ContatoModal from './components/ContatoModal.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Diretorio from './pages/Diretorio.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diretorio" element={<Diretorio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
      <Footer />
      <CriarContaModal />
      <EntrarModal />
      <ContatoModal />
    </>
  )
}

export default App
