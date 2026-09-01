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
          <a className="btn">Início</a>
          <a className="btn">Diretório</a>
          <a className="btn">Sobre o Projeto</a>
          <a className="btn">Cadastro</a>
        </div>

        <div className="compromisse">
          <span>COMPROMISSO</span>
          <a href="#" className="btn">ODS 2 - Fome Zero</a>
          <a href="#" className="btn">Meta 2.3 da ONU</a>
          <a href="#" className="btn">Valorização Cultural</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
