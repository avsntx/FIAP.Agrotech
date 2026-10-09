import { useState } from 'react'
import { Link } from 'react-router'
import { QRCodeSVG } from 'qrcode.react'
import diretorio from '../data/participantes.js'

const ID_VIDEO = 'FfcAUoAydCg'

const passos = [
  {
    icone: '🌱',
    titulo: 'Produtores',
    texto: 'Cadastram seus lotes, ganham selos de identificação e um QR Code para cada produto.',
  },
  {
    icone: '🏪',
    titulo: 'Estabelecimentos',
    texto: 'Doam o excedente de alimentos em vez de jogar fora no fim do dia.',
  },
  {
    icone: '🤝',
    titulo: 'ONGs',
    texto: 'Recebem os alimentos e levam até as famílias que mais precisam.',
  },
]

function Home({ onAbrirModal }) {
  const loteExemplo = diretorio.buscarLote('NTV-BN8K2Q')
  const [mostrarVideo, setMostrarVideo] = useState(false)

  return (
    <>
      <section id="inicio">
        <div className="container main text-center">
          <div className="container">
            <Link className="novidade" to="/rastreabilidade">
              Novo: rastreabilidade com QR Code →
            </Link>
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
              href={`https://www.youtube.com/watch?v=${ID_VIDEO}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver vídeo
            </a>
          </div>
        </div>
      </section>

      <section className="secao container">
        <h2 className="titulo-secao">Como a Nativy funciona</h2>
        <div className="row g-4">
          {passos.map((passo) => (
            <div className="col-md-4" key={passo.titulo}>
              <div className="card card-passo h-100">
                <div className="card-body p-4">
                  <span className="passo-icone" aria-hidden="true">
                    {passo.icone}
                  </span>
                  <h3>{passo.titulo}</h3>
                  <p className="mb-0">{passo.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="secao container">
        <div className="card card-destaque">
          <div className="card-body p-4 p-lg-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <span className="badge bg-success mb-3">Novidade</span>
                <h2>Rastreabilidade com QR Code</h2>
                <p>
                  Cada lote cadastrado ganha um código único e um QR Code. Quem escaneia descobre o que é o produto, quando foi colhido e quem produziu.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link className="btn btn-success" to="/rastreabilidade">
                    Cadastrar um lote
                  </Link>
                  <Link className="btn btn-contorno" to={loteExemplo.getLinkRastreio()}>
                    Ver um exemplo
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 text-center">
                <div className="qr-code">
                  <QRCodeSVG
                    value={window.location.origin + loteExemplo.getLinkRastreio()}
                    size={170}
                    marginSize={2}
                    fgColor="#4b3528"
                    title="QR Code de um lote de exemplo"
                  />
                </div>
                <p className="legenda-qr">Aponte a câmera do celular</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secao container">
        <h2 className="titulo-secao">Assista ao nosso pitch</h2>
        <div className="video-pitch ratio ratio-16x9">
          {mostrarVideo ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${ID_VIDEO}?autoplay=1`}
              title="Pitch do projeto Nativy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <button type="button" className="video-capa" onClick={() => setMostrarVideo(true)} aria-label="Assistir ao pitch do projeto Nativy">
              <img src={`https://i.ytimg.com/vi/${ID_VIDEO}/hqdefault.jpg`} alt="" loading="lazy" />
              <span className="video-play" aria-hidden="true">▶</span>
            </button>
          )}
        </div>
      </section>
    </>
  )
}

export default Home
