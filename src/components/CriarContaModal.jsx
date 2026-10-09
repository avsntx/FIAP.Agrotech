import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { validarEmailFormato, validarNomeCompleto } from '../utils/validacoes.js'

const CAMPOS_INICIAIS = {
  nome: '',
  email: '',
  senha: '',
  tipo: '',
}

function CriarContaModal({ aberto, onFechar }) {
  const [campos, setCampos] = useState(CAMPOS_INICIAIS)
  const [erros, setErros] = useState({})

  function atualizarCampo(campo, valor) {
    setCampos((atual) => ({ ...atual, [campo]: valor }))
  }

  function fechar() {
    setCampos(CAMPOS_INICIAIS)
    setErros({})
    onFechar()
  }

  function handleSubmit(event) {
    event.preventDefault()

    const novosErros = {}

    const erroNome = validarNomeCompleto(campos.nome)
    if (erroNome) novosErros.nome = erroNome

    const erroEmail = validarEmailFormato(campos.email)
    if (erroEmail) novosErros.email = erroEmail

    if (campos.senha.trim() === '') {
      novosErros.senha = 'A senha não pode ficar em branco.'
    } else if (campos.senha.length < 6) {
      novosErros.senha = 'A senha deve ter ao menos 6 caracteres.'
    }

    if (campos.tipo === '') {
      novosErros.tipo = 'Selecione o tipo de perfil.'
    }

    setErros(novosErros)

    if (Object.keys(novosErros).length === 0) {
      fechar()
    }
  }

  return (
    <Modal show={aberto} onHide={fechar} contentClassName="contact-modal" aria-labelledby="criarContaModalLabel">
      <Modal.Header closeButton closeLabel="Fechar">
        <Modal.Title as="h2" id="criarContaModalLabel">Criar conta</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form id="formCriarConta" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nomeConta" className="form-label">Nome completo</label>
            <input
              type="text"
              className={`form-control${erros.nome ? ' campo-invalido' : ''}`}
              id="nomeConta"
              name="nomeConta"
              maxLength="80"
              placeholder="Digite seu nome completo"
              value={campos.nome}
              onChange={(event) => atualizarCampo('nome', event.target.value)}
            />
            <span className={`texto-erro${erros.nome ? ' visivel' : ''}`}>{erros.nome}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="emailConta" className="form-label">E-mail</label>
            <input
              type="email"
              className={`form-control${erros.email ? ' campo-invalido' : ''}`}
              id="emailConta"
              name="emailConta"
              placeholder="exemplo@email.com"
              value={campos.email}
              onChange={(event) => atualizarCampo('email', event.target.value)}
            />
            <span className={`texto-erro${erros.email ? ' visivel' : ''}`}>{erros.email}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="senhaConta" className="form-label">Senha</label>
            <input
              type="password"
              className={`form-control${erros.senha ? ' campo-invalido' : ''}`}
              id="senhaConta"
              name="senhaConta"
              placeholder="Crie uma senha"
              value={campos.senha}
              onChange={(event) => atualizarCampo('senha', event.target.value)}
            />
            <span className={`texto-erro${erros.senha ? ' visivel' : ''}`}>{erros.senha}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="tipoConta" className="form-label">Tipo de perfil</label>
            <select
              className={`form-select${erros.tipo ? ' campo-invalido' : ''}`}
              id="tipoConta"
              name="tipoConta"
              value={campos.tipo}
              onChange={(event) => atualizarCampo('tipo', event.target.value)}
            >
              <option value="">Escolha uma opção</option>
              <option value="produtor">Produtor rural</option>
              <option value="estabelecimento">Estabelecimento</option>
              <option value="ong">ONG</option>
            </select>
            <span className={`texto-erro${erros.tipo ? ' visivel' : ''}`}>{erros.tipo}</span>
          </div>

          <div className="modal-footer px-0 pb-0">
            <button type="button" className="btn btn-secondary" onClick={fechar}>Fechar</button>
            <button type="submit" className="btn btn-success">Criar conta</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default CriarContaModal
