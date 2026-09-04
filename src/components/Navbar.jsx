function Navbar({ paginaAtiva, onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <span className="logo-icon">🌿</span>
        <a className="navbar-brand" href="#inicio">Nativy</a>
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
              <a
                className={`nav-link${paginaAtiva === 'inicio' ? ' active' : ''}`}
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate('inicio')
                }}
              >
                Início
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link${paginaAtiva === 'diretorio' ? ' active' : ''}`}
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate('diretorio')
                }}
              >
                Diretório
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link${paginaAtiva === 'sobre' ? ' active' : ''}`}
                href="#"
                onClick={(event) => {
                  event.preventDefault()
                  onNavigate('sobre')
                }}
              >
                Sobre
              </a>
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
