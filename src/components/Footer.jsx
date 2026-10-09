import { Link } from 'react-router'

function Footer() {
  return (
    <footer>
      <div className="container fotter-main">
        <div className="brand">
          <div className="brand-logo">
            <span className="logo-icon">🌿</span>
            <span className="brand-name">Nativy</span>
          </div>
          <span className="brand-description">
            Uma rede que conecta pequenos produtores, estabelecimentos e ONGs para reduzir o desperdício alimentar e combater a fome.
          </span>
          <button
            type="button"
            className="btn footer-link"
            data-bs-toggle="modal"
            data-bs-target="#contatoModal"
          >
            Fale conosco
          </button>
        </div>

        <div className="navegation">
          <span>NAVEGAR</span>
          <Link className="btn" to="/">Início</Link>
          <Link className="btn" to="/diretorio">Diretório</Link>
          <Link className="btn" to="/sobre">Sobre o Projeto</Link>
          <a className="btn" data-bs-toggle="modal" data-bs-target="#criarContaModal">Cadastro</a>
        </div>

        <div className="compromisse">
          <span>COMPROMISSO</span>
          <Link className="btn" to="/sobre">ODS 2 - Fome Zero</Link>
          <Link className="btn" to="/sobre">Meta 2.3 da ONU</Link>
          <Link className="btn" to="/sobre">Valorização Cultural</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
