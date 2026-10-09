import { Link, NavLink } from 'react-router'

function Navbar({ onAbrirModal }) {
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
            <button type="button" className="btn btn-btn" onClick={() => onAbrirModal('entrar')}>
              Entrar
            </button>
            <button type="button" className="btn btn-success" onClick={() => onAbrirModal('criarConta')}>
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
