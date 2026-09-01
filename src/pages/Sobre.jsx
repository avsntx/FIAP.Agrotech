function Sobre({ ativa }) {
  return (
    <section id="sobre" className={`pagina${ativa ? ' ativa' : ''}`}>
      <div className="row mb-5">
        <div className="col-12">
          <h1>Sobre a Nativy</h1>
          <p>Uma rede para fortalecer raízes, reduzir desperdício e combater a fome.</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-sm-8 d-flex flex-column gap-4">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="mb-3">O que é a Nativy</h3>
              <p>A Nativy é uma plataforma digital que conecta três atores essenciais para um sistema alimentar mais justo: pequenos produtores rurais (mulheres, povos indígenas, agricultores familiares, pastores e pescadores), estabelecimentos comerciais com excedente alimentar e ONGs que distribuem alimentos para quem precisa.</p>
              <p className="mb-0">Nosso objetivo é reduzir o desperdício alimentar, dar visibilidade a quem produz com respeito à terra e às tradições, e facilitar conexões que transformam excedente em refeição, cultura em valor e rede em impacto.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h3 className="mb-3">Valorização cultural</h3>
              <p>Cada produtor tem espaço para contar sua história, suas práticas e o saber da sua comunidade. Povos indígenas, quilombolas, caiçaras, pescadores artesanais, agricultores familiares e mulheres do campo são parte essencial da biodiversidade cultural que alimenta o Brasil.</p>
              <p className="mb-0">Os selos de identificação dão visibilidade imediata a esses grupos e ajudam consumidores, estabelecimentos e ONGs a reconhecer e apoiar seu trabalho.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h3 className="mb-3">Rastreabilidade com QR Code</h3>
              <p className="mb-0">Cada lote cadastrado gera um QR Code único que pode ser impresso em embalagens, etiquetas ou recibos. Ao escanear, qualquer pessoa acessa informações do produto e conhece quem produziu.</p>
            </div>
          </div>
        </div>

        <div className="col-sm-4 d-flex flex-column gap-4">
          <div className="card card-ods">
            <div className="card-body p-4">
              <h1>02</h1>
              <h4 className="mb-3">Fome Zero e Agricultura Sustentável</h4>
              <p className="mb-0">A Nativy é uma contribuição ao Objetivo de Desenvolvimento Sustentável 2 da ONU, em especial à Meta 2.3.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h5 className="mb-3">Meta 2.3 da ONU</h5>
              <p className="mb-0">Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente mulheres, povos indígenas, agricultores familiares, pastores e pescadores.</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body p-4">
              <h5 className="mb-3">Como contribuímos</h5>
              <ul className="mb-0">
                <li>Acesso a mercados e compradores</li>
                <li>Visibilidade com selos de identificação</li>
                <li>Valor agregado por rastreabilidade</li>
                <li>Redução do desperdício alimentar</li>
                <li>Valorização cultural e de saberes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
