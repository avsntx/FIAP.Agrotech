import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import BootstrapNavbar from 'react-bootstrap/Navbar'

function Navbar({ onAbrirModal }) {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  function abrirModal(nome) {
    setMenuAberto(false)
    onAbrirModal(nome)
  }

  return (
    <BootstrapNavbar expand="lg" expanded={menuAberto} onToggle={setMenuAberto}>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" onClick={fecharMenu}>
          <span className="logo-icon" aria-hidden="true">🌿</span>
          Nativy
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="menu" aria-expanded={menuAberto} label="Abrir menu" />

        <BootstrapNavbar.Collapse id="menu">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end onClick={fecharMenu}>
              Início
            </Nav.Link>
            <Nav.Link as={NavLink} to="/diretorio" onClick={fecharMenu}>
              Diretório
            </Nav.Link>
            <Nav.Link as={NavLink} to="/rastreabilidade" onClick={fecharMenu}>
              Rastreabilidade
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sobre" onClick={fecharMenu}>
              Sobre
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <button type="button" className="btn btn-btn" onClick={() => abrirModal('entrar')}>
              Entrar
            </button>
            <button type="button" className="btn btn-success" onClick={() => abrirModal('criarConta')}>
              Criar conta
            </button>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
