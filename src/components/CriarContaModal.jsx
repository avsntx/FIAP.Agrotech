import { useRef, useState } from 'react'
import { Modal } from 'bootstrap'

const CAMPOS_INICIAIS = {
  nome: '',
  email: '',
  senha: '',
  tipo: '',
}

function validarNomeCompleto(valor) {
  if (valor.trim() === '') return 'O nome não pode ficar em branco.'
  const partes = valor.trim().split(/\s+/)
  if (partes.length < 2) return 'Informe o nome e o sobrenome.'
  if (partes[0].length < 2) return 'O nome deve ter ao menos 2 letras.'
  if (partes[1].length < 2) return 'O sobrenome deve ter ao menos 2 letras.'
  return null
}

function validarEmailFormato(valor) {
  if (valor.trim() === '') return 'O e-mail não pode ficar em branco.'
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regex.test(valor)) return 'Informe um e-mail válido.'
  return null
}

function CriarContaModal() {
  const modalRef = useRef(null)
  const [campos, setCampos] = useState(CAMPOS_INICIAIS)
  const [erros, setErros] = useState({})

  function atualizarCampo(campo, valor) {
    setCampos((atual) => ({ ...atual, [campo]: valor }))
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
      setCampos(CAMPOS_INICIAIS)
      Modal.getInstance(modalRef.current)?.hide()
    }
  }

  return (
    <div
      className="modal fade"
      id="criarContaModal"
      tabIndex="-1"
      aria-labelledby="criarContaModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content contact-modal">
          <div className="modal-header">
            <h2 className="modal-title" id="criarContaModalLabel">Criar conta</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>

          <div className="modal-body">
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
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" className="btn btn-success">Criar conta</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CriarContaModal
