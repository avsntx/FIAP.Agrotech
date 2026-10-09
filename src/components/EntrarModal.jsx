import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const CAMPOS_INICIAIS = {
  email: '',
  senha: '',
}

function validarEmailFormato(valor) {
  if (valor.trim() === '') return 'O e-mail não pode ficar em branco.'
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regex.test(valor)) return 'Informe um e-mail válido.'
  return null
}

function EntrarModal({ aberto, onFechar }) {
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

    const erroEmail = validarEmailFormato(campos.email)
    if (erroEmail) novosErros.email = erroEmail

    if (campos.senha.trim() === '') {
      novosErros.senha = 'A senha não pode ficar em branco.'
    }

    setErros(novosErros)

    if (Object.keys(novosErros).length === 0) {
      fechar()
    }
  }

  return (
    <Modal show={aberto} onHide={fechar} contentClassName="contact-modal" aria-labelledby="entrarModalLabel">
      <Modal.Header closeButton closeLabel="Fechar">
        <Modal.Title as="h2" id="entrarModalLabel">Entrar</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form id="formEntrar" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailEntrar" className="form-label">E-mail</label>
            <input
              type="email"
              className={`form-control${erros.email ? ' campo-invalido' : ''}`}
              id="emailEntrar"
              name="emailEntrar"
              placeholder="exemplo@email.com"
              value={campos.email}
              onChange={(event) => atualizarCampo('email', event.target.value)}
            />
            <span className={`texto-erro${erros.email ? ' visivel' : ''}`}>{erros.email}</span>
          </div>

          <div className="mb-3">
            <label htmlFor="senhaEntrar" className="form-label">Senha</label>
            <input
              type="password"
              className={`form-control${erros.senha ? ' campo-invalido' : ''}`}
              id="senhaEntrar"
              name="senhaEntrar"
              placeholder="Digite sua senha"
              value={campos.senha}
              onChange={(event) => atualizarCampo('senha', event.target.value)}
            />
            <span className={`texto-erro${erros.senha ? ' visivel' : ''}`}>{erros.senha}</span>
          </div>

          <div className="modal-footer px-0 pb-0">
            <button type="button" className="btn btn-secondary" onClick={fechar}>Fechar</button>
            <button type="submit" className="btn btn-success">Entrar</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default EntrarModal
