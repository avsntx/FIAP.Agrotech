import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span className="logo-icon">🌿</span>
        <Link className="navbar-brand" to="/">Nativy</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Início
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/diretorio">
                Diretório
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobre">
                Sobre
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <a className="btn btn-btn" data-bs-toggle="modal" data-bs-target="#entrarModal">Entrar</a>
            <a className="btn btn-success" data-bs-toggle="modal" data-bs-target="#criarContaModal">
              Criar conta
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
