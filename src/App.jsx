import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CriarContaModal from './components/CriarContaModal.jsx'
import EntrarModal from './components/EntrarModal.jsx'
import ContatoModal from './components/ContatoModal.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Diretorio from './pages/Diretorio.jsx'
import Rastreabilidade from './pages/Rastreabilidade.jsx'
import Rastreio from './pages/Rastreio.jsx'
import NaoEncontrada from './pages/NaoEncontrada.jsx'

function App() {
  const location = useLocation()
  const [modalAberto, setModalAberto] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  function fecharModal() {
    setModalAberto(null)
  }

  return (
    <>
      <Navbar onAbrirModal={setModalAberto} />
      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Home onAbrirModal={setModalAberto} />} />
          <Route path="/diretorio" element={<Diretorio />} />
          <Route path="/rastreabilidade" element={<Rastreabilidade />} />
          <Route path="/rastreio/:codigo" element={<Rastreio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
      <Footer onAbrirModal={setModalAberto} />
      <CriarContaModal aberto={modalAberto === 'criarConta'} onFechar={fecharModal} />
      <EntrarModal aberto={modalAberto === 'entrar'} onFechar={fecharModal} />
      <ContatoModal aberto={modalAberto === 'contato'} onFechar={fecharModal} />
    </>
  )
}

export default App
