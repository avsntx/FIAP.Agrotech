import { Link } from 'react-router'

function Home({ onAbrirModal }) {
  return (
    <section id="inicio">
      <div className="container main text-center">
        <div className="container">
          <h1>Raízes que <span>alimentam</span>, laços que transformam.</h1>
          <p>
            Conectamos pequenos produtores rurais, estabelecimentos com excedente alimentar e ONGs de distribuição para reduzir o desperdício e fortalecer quem planta, pesca, cria e cuida.
          </p>
        </div>

        <div className="d-flex">
          <button type="button" className="btn btn-success" onClick={() => onAbrirModal('criarConta')}>
            Criar minha conta
          </button>
          <Link className="btn btn-btn" to="/diretorio">
            Explorar a rede
          </Link>
          <a
            className="btn btn-video"
            href="https://www.youtube.com/watch?v=FfcAUoAydCg"
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
