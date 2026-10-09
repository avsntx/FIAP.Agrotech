import { Link } from 'react-router'

function NaoEncontrada() {
  return (
    <section id="nao-encontrada" className="text-center">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>O endereço que você tentou acessar não existe na Nativy.</p>
      <Link className="btn btn-success" to="/">
        Voltar para o início
      </Link>
    </section>
  )
}

export default NaoEncontrada
