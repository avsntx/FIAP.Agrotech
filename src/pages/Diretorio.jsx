import { useState } from 'react'

const itens = [
  {
    id: 1,
    nome: 'Produtor A',
    tipo: 'Produtor',
    localizacao: 'Vale do Ribeira, SP',
    descricao: 'Agricultura familiar com cultivo agroecológico de banana, mandioca e palmito.',
  },
  {
    id: 2,
    nome: 'Empresa A',
    tipo: 'Estabelecimento',
    localizacao: 'São Paulo, SP',
    descricao: 'Doa diariamente o excedente de pães e bolos ao final do expediente.',
  },
  {
    id: 3,
    nome: 'ONG A',
    tipo: 'ONG',
    localizacao: 'Campinas, SP',
    descricao: 'Distribui refeições e cestas básicas para famílias em situação de vulnerabilidade.',
  },
  {
    id: 4,
    nome: 'Produtor B',
    tipo: 'Produtor',
    localizacao: 'Cananéia, SP',
    descricao: 'Pesca artesanal sustentável de comunidades caiçaras.',
  },
  {
    id: 5,
    nome: 'Empresa B',
    tipo: 'Estabelecimento',
    localizacao: 'Sorocaba, SP',
    descricao: 'Hortifruti que repassa produtos próximos do vencimento para ONGs parceiras.',
  },
  {
    id: 6,
    nome: 'ONG B',
    tipo: 'ONG',
    localizacao: 'Bertioga, SP',
    descricao: 'Produção de artesanato e alimentos tradicionais por povos indígenas.',
  },
]

const classesPorTipo = {
  Produtor: 'bg-success',
  Estabelecimento: 'bg-warning text-dark',
  ONG: 'bg-secondary',
}

function Diretorio({ ativa }) {
  const [busca, setBusca] = useState('')

  const termo = busca.trim().toLowerCase()
  const itensFiltrados = itens.filter((item) => {
    return (
      item.nome.toLowerCase().includes(termo) ||
      item.tipo.toLowerCase().includes(termo) ||
      item.localizacao.toLowerCase().includes(termo)
    )
  })

  return (
    <section id="diretorio" className={`pagina${ativa ? ' ativa' : ''}`}>
      <div className="row mb-4">
        <div className="col-12">
          <h1>Diretório</h1>
          <p>Produtores, estabelecimentos e ONGs que fazem parte da rede Nativy.</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nome, tipo ou localização..."
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          />
        </div>
      </div>

      <div className="row g-4">
        {itensFiltrados.map((item) => (
          <div className="col-sm-4" key={item.id}>
            <div className="card h-100">
              <div className="card-body p-4">
                <span className={`badge ${classesPorTipo[item.tipo]} mb-2`}>{item.tipo}</span>
                <h5 className="mb-2">{item.nome}</h5>
                <p className="mb-2">{item.localizacao}</p>
                <p className="mb-0">{item.descricao}</p>
              </div>
            </div>
          </div>
        ))}

        {itensFiltrados.length === 0 && (
          <div className="col-12">
            <p className="mb-0">Nenhum resultado encontrado para "{busca}".</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Diretorio
