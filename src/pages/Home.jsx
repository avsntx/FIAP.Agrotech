function Home({ ativa }) {
  return (
    <section id="inicio" className={`pagina${ativa ? ' ativa' : ''}`}>
      <div className="container main text-center">
        <div className="container">
          <h1>Raízes que <span>alimentam</span>, laços que transformam.</h1>
          <p>
            Conectamos pequenos produtores rurais, estabelecimentos com excedente alimentar e ONGs de distribuição para reduzir o desperdício e fortalecer quem planta, pesca, cria e cuida.
          </p>
        </div>

        <div className="d-flex">
          <a className="btn btn-success" data-bs-toggle="modal" data-bs-target="#criarContaModal">
            Criar minha conta
          </a>
          <a className="btn btn-btn">Explorar a rede</a>
          <a
            className="btn btn-video"
            href="https://vimeo.com/manage/videos/1194996775"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver vídeo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
