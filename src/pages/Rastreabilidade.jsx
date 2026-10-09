import { useEffect, useState } from 'react'
import diretorio from '../data/participantes.js'
import { dataDaquiA, formatarData } from '../utils/datas.js'

const CAMPOS_INICIAIS = {
  produtorId: '',
  produto: '',
  quantidade: '',
  unidade: 'kg',
  dataColheita: '',
  validade: '',
}

const unidades = ['kg', 'unidades', 'dúzias', 'maços', 'caixas', 'litros', 'potes']

const classesPorStatus = {
  'Dentro da validade': 'bg-success',
  'Vence em breve': 'bg-warning text-dark',
  Vencido: 'bg-danger',
}

function validarLote(campos) {
  const erros = {}

  if (campos.produtorId === '') {
    erros.produtorId = 'Escolha o produtor.'
  }

  if (campos.produto.trim().length < 3) {
    erros.produto = 'Informe o nome do produto.'
  }

  if (campos.quantidade === '' || Number(campos.quantidade) <= 0) {
    erros.quantidade = 'Informe uma quantidade maior que zero.'
  }

  if (campos.dataColheita === '') {
    erros.dataColheita = 'Informe a data da colheita.'
  } else if (campos.dataColheita > dataDaquiA(0)) {
    erros.dataColheita = 'A colheita não pode ser no futuro.'
  }

  if (campos.validade === '') {
    erros.validade = 'Informe a data de validade.'
  } else if (campos.validade < campos.dataColheita) {
    erros.validade = 'A validade não pode ser antes da colheita.'
  }

  return erros
}

function Rastreabilidade() {
  const produtores = diretorio.filtrarPorTipo('Produtor')
  const [campos, setCampos] = useState(CAMPOS_INICIAIS)
  const [erros, setErros] = useState({})
  const [lotesSalvos, setLotesSalvos] = useState(() => JSON.parse(localStorage.getItem('lotes')) || [])
  const [ultimoLote, setUltimoLote] = useState(null)

  useEffect(() => {
    localStorage.setItem('lotes', JSON.stringify(lotesSalvos))
  }, [lotesSalvos])

  function atualizarCampo(campo, valor) {
    setCampos((atual) => ({ ...atual, [campo]: valor }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const novosErros = validarLote(campos)
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) return

    const produtor = diretorio.buscarPorId(Number(campos.produtorId))
    const lote = produtor.cadastrarLote(campos.produto.trim(), Number(campos.quantidade), campos.unidade, campos.dataColheita, campos.validade)

    setLotesSalvos([
      ...lotesSalvos,
      {
        codigo: lote.codigo,
        produtorId: produtor.id,
        produto: lote.produto,
        quantidade: lote.quantidade,
        unidade: lote.unidade,
        dataColheita: lote.dataColheita,
        validade: lote.validade,
      },
    ])
    setUltimoLote(lote)
    setCampos(CAMPOS_INICIAIS)
  }

  const lotes = diretorio.getLotes().reverse().sort((a, b) => b.dataColheita.localeCompare(a.dataColheita))

  return (
    <section id="rastreabilidade">
      <div className="row mb-4">
        <div className="col-12">
          <span className="badge bg-success mb-3">Novidade</span>
          <h1>Rastreabilidade com QR Code</h1>
          <p>Cada lote cadastrado ganha um código único. Com ele, qualquer pessoa descobre o que é o produto, quando foi colhido e quem produziu.</p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body p-4">
              <h2 className="mb-3">Cadastrar lote</h2>
              <form noValidate onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="produtorLote" className="form-label">Produtor</label>
                  <select
                    className={`form-select${erros.produtorId ? ' campo-invalido' : ''}`}
                    id="produtorLote"
                    value={campos.produtorId}
                    onChange={(event) => atualizarCampo('produtorId', event.target.value)}
                  >
                    <option value="">Escolha o produtor</option>
                    {produtores.map((produtor) => (
                      <option key={produtor.id} value={produtor.id}>
                        {produtor.nome}
                      </option>
                    ))}
                  </select>
                  <span className={`texto-erro${erros.produtorId ? ' visivel' : ''}`}>{erros.produtorId}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="produtoLote" className="form-label">Produto</label>
                  <input
                    type="text"
                    className={`form-control${erros.produto ? ' campo-invalido' : ''}`}
                    id="produtoLote"
                    maxLength="60"
                    placeholder="Ex: Banana-prata"
                    value={campos.produto}
                    onChange={(event) => atualizarCampo('produto', event.target.value)}
                  />
                  <span className={`texto-erro${erros.produto ? ' visivel' : ''}`}>{erros.produto}</span>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-sm-7">
                    <label htmlFor="quantidadeLote" className="form-label">Quantidade</label>
                    <input
                      type="number"
                      className={`form-control${erros.quantidade ? ' campo-invalido' : ''}`}
                      id="quantidadeLote"
                      min="0"
                      step="any"
                      placeholder="Ex: 50"
                      value={campos.quantidade}
                      onChange={(event) => atualizarCampo('quantidade', event.target.value)}
                    />
                    <span className={`texto-erro${erros.quantidade ? ' visivel' : ''}`}>{erros.quantidade}</span>
                  </div>
                  <div className="col-sm-5">
                    <label htmlFor="unidadeLote" className="form-label">Unidade</label>
                    <select
                      className="form-select"
                      id="unidadeLote"
                      value={campos.unidade}
                      onChange={(event) => atualizarCampo('unidade', event.target.value)}
                    >
                      {unidades.map((unidade) => (
                        <option key={unidade} value={unidade}>
                          {unidade}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-sm-6">
                    <label htmlFor="colheitaLote" className="form-label">Data da colheita</label>
                    <input
                      type="date"
                      className={`form-control${erros.dataColheita ? ' campo-invalido' : ''}`}
                      id="colheitaLote"
                      max={dataDaquiA(0)}
                      value={campos.dataColheita}
                      onChange={(event) => atualizarCampo('dataColheita', event.target.value)}
                    />
                    <span className={`texto-erro${erros.dataColheita ? ' visivel' : ''}`}>{erros.dataColheita}</span>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="validadeLote" className="form-label">Validade</label>
                    <input
                      type="date"
                      className={`form-control${erros.validade ? ' campo-invalido' : ''}`}
                      id="validadeLote"
                      min={campos.dataColheita}
                      value={campos.validade}
                      onChange={(event) => atualizarCampo('validade', event.target.value)}
                    />
                    <span className={`texto-erro${erros.validade ? ' visivel' : ''}`}>{erros.validade}</span>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">Cadastrar lote</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          {ultimoLote ? (
            <div className="card card-lote-novo">
              <div className="card-body p-4">
                <h2 className="mb-3">Lote cadastrado!</h2>
                <p className="codigo-lote mb-2">{ultimoLote.codigo}</p>
                <p className="mb-1">
                  <strong>{ultimoLote.produto}</strong> · {ultimoLote.quantidade} {ultimoLote.unidade}
                </p>
                <p className="mb-0">{ultimoLote.produtor.nome}</p>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-body p-4">
                <h2 className="mb-3">Como funciona</h2>
                <ol className="mb-0">
                  <li>O produtor cadastra o lote com a data da colheita e a validade.</li>
                  <li>A Nativy gera um código único e um QR Code para o lote.</li>
                  <li>O QR Code vai na embalagem e quem escaneia vê a origem do alimento.</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>

      <h2 className="mb-3">Lotes cadastrados</h2>
      <div className="row g-4">
        {lotes.map((lote) => (
          <div className="col-md-6 col-lg-4" key={lote.codigo}>
            <div className="card h-100">
              <div className="card-body p-4">
                <span className={`badge ${classesPorStatus[lote.getStatus()]} mb-2`}>{lote.getStatus()}</span>
                <h3 className="h5 mb-1">{lote.produto}</h3>
                <p className="codigo-lote mb-2">{lote.codigo}</p>
                <p className="mb-1">
                  {lote.quantidade} {lote.unidade} · {lote.produtor.nome}
                </p>
                <p className="mb-0">
                  Colheita: {formatarData(lote.dataColheita)} · Validade: {formatarData(lote.validade)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rastreabilidade
