import { useState } from 'react'
import diretorio from '../data/participantes.js'

const tipos = ['Todos', 'Produtor', 'Estabelecimento', 'ONG']

const classesPorTipo = {
  Produtor: 'bg-success',
  Estabelecimento: 'bg-warning text-dark',
  ONG: 'bg-secondary',
}

function Diretorio() {
  const [busca, setBusca] = useState('')
  const [tipo, setTipo] = useState('Todos')

  const resultados = diretorio.buscar(busca, tipo)

  return (
    <section id="diretorio">
      <div className="row mb-4">
        <div className="col-12">
          <h1>Diretório</h1>
          <p>Produtores, estabelecimentos e ONGs que fazem parte da rede Nativy.</p>
        </div>
      </div>

      <div className="row mb-4 g-3 align-items-center">
        <div className="col-lg-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome, tipo ou localização..."
            aria-label="Buscar no diretório"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <div className="filtros">
            {tipos.map((item) => (
              <button
                key={item}
                type="button"
                className={`btn btn-filtro${tipo === item ? ' ativo' : ''}`}
                aria-pressed={tipo === item}
                onClick={() => setTipo(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row g-4">
        {resultados.map((participante) => (
          <div className="col-md-6 col-lg-4" key={participante.id}>
            <div className="card h-100">
              <div className="card-body p-4">
                <span className={`badge ${classesPorTipo[participante.getTipo()]} mb-2`}>{participante.getTipo()}</span>
                <h2 className="h5 mb-2">{participante.nome}</h2>
                <p className="mb-2">{participante.getLocalizacao()}</p>
                <p className="mb-2">{participante.descricao}</p>
                <p className="destaque mb-0">{participante.getDestaque()}</p>
                {participante.selos && (
                  <div className="selos">
                    {participante.selos.map((selo) => (
                      <span key={selo.id} className="selo" title={selo.getDescricaoCompleta()}>
                        {selo.nome}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {resultados.length === 0 && (
          <div className="col-12">
            <p className="mb-0">Nenhum participante encontrado.</p>
          </div>
        )}
      </div>

      <p className="aviso-dados">Os participantes do diretório são fictícios e servem só para demonstração.</p>
    </section>
  )
}

export default Diretorio
