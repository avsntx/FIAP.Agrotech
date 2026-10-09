import { Link, useParams, useSearchParams } from 'react-router'
import diretorio from '../data/participantes.js'
import Lote from '../models/Lote.js'
import Produtor from '../models/Produtor.js'
import { formatarData } from '../utils/datas.js'

const classesPorStatus = {
  'Dentro da validade': 'bg-success',
  'Vence em breve': 'bg-warning text-dark',
  Vencido: 'bg-danger',
}

function Rastreio() {
  const { codigo } = useParams()
  const [parametros] = useSearchParams()

  let lote = diretorio.buscarLote(codigo)

  if (!lote && parametros.get('produto')) {
    const produtor = new Produtor(0, parametros.get('produtor'), parametros.get('cidade'), parametros.get('uf'), '', '', [])
    lote = new Lote(codigo, parametros.get('produto'), parametros.get('quantidade'), parametros.get('unidade'), parametros.get('colheita'), parametros.get('validade'), produtor)
  }

  if (!lote) {
    return (
      <section id="rastreio" className="text-center">
        <h1>Lote não encontrado</h1>
        <p>
          Não encontramos nenhum lote com o código <strong>{codigo}</strong>.
        </p>
        <Link className="btn btn-success" to="/rastreabilidade">
          Ver lotes cadastrados
        </Link>
      </section>
    )
  }

  const produtor = lote.produtor
  const dias = lote.diasParaVencer()

  let mensagemValidade = `Faltam ${dias} dias para o lote vencer.`
  if (dias === 1) mensagemValidade = 'Falta 1 dia para o lote vencer.'
  if (dias === 0) mensagemValidade = 'O lote vence hoje.'
  if (dias < 0) mensagemValidade = `Este lote venceu há ${Math.abs(dias)} dia(s).`

  return (
    <section id="rastreio">
      <Link className="voltar" to="/rastreabilidade">
        ← Voltar para a rastreabilidade
      </Link>

      <div className="row g-4 mt-1">
        <div className="col-lg-8 d-flex flex-column gap-4">
          <div className="card">
            <div className="card-body p-4">
              <span className={`badge ${classesPorStatus[lote.getStatus()]} mb-3`}>{lote.getStatus()}</span>
              <h1>{lote.produto}</h1>
              <p className="codigo-lote">Lote {lote.codigo}</p>
              <div className="row g-3">
                <div className="col-sm-4">
                  <span className="rotulo">Quantidade</span>
                  <p className="mb-0">
                    {lote.quantidade} {lote.unidade}
                  </p>
                </div>
                <div className="col-sm-4">
                  <span className="rotulo">Colheita</span>
                  <p className="mb-0">{formatarData(lote.dataColheita)}</p>
                </div>
                <div className="col-sm-4">
                  <span className="rotulo">Validade</span>
                  <p className="mb-0">{formatarData(lote.validade)}</p>
                </div>
              </div>
              <p className="mt-3 mb-0">{mensagemValidade}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h2 className="mb-3">Quem produziu</h2>
              <h3>{produtor.nome}</h3>
              <p className="mb-2">{produtor.getLocalizacao()}</p>
              {produtor.descricao && <p className="mb-2">{produtor.descricao}</p>}
              {produtor.tipoProducao && <p className="destaque mb-0">{produtor.tipoProducao}</p>}
              {produtor.selos.length > 0 && (
                <div className="selos">
                  {produtor.selos.map((selo) => (
                    <span key={selo.id} className="selo" title={selo.getDescricaoCompleta()}>
                      {selo.nome}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card card-ods">
            <div className="card-body p-4">
              <h4 className="mb-3">Por que rastrear?</h4>
              <p className="mb-0">
                Saber de onde vem o alimento valoriza quem produz e ajuda a reduzir o desperdício. A Nativy contribui com o ODS 2 da ONU: Fome Zero e Agricultura Sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rastreio
