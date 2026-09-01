import { useRef, useState } from 'react'
import { Modal } from 'bootstrap'

const CAMPOS_INICIAIS = {
  nome: '',
  email: '',
  assunto: '',
  mensagem: '',
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

function ContatoModal() {
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

    if (campos.assunto === '') {
      novosErros.assunto = 'Selecione um assunto.'
    }

    if (campos.mensagem.trim() === '') {
      novosErros.mensagem = 'A mensagem não pode ficar em branco.'
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
      id="contatoModal"
      tabIndex="-1"
      aria-labelledby="contatoModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content contact-modal">
          <div className="modal-header">
            <h2 className="modal-title" id="contatoModalLabel">Fale conosco</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
          </div>

          <div className="modal-body">
            <form id="formContato" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome completo</label>
                <input
                  type="text"
                  className={`form-control${erros.nome ? ' campo-invalido' : ''}`}
                  id="nome"
                  name="nome"
                  maxLength="80"
                  placeholder="Digite seu nome completo"
                  value={campos.nome}
                  onChange={(event) => atualizarCampo('nome', event.target.value)}
                />
                <span className={`texto-erro${erros.nome ? ' visivel' : ''}`}>{erros.nome}</span>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className={`form-control${erros.email ? ' campo-invalido' : ''}`}
                  id="email"
                  name="email"
                  placeholder="exemplo@email.com"
                  value={campos.email}
                  onChange={(event) => atualizarCampo('email', event.target.value)}
                />
                <span className={`texto-erro${erros.email ? ' visivel' : ''}`}>{erros.email}</span>
              </div>

              <div className="mb-3">
                <label htmlFor="assunto" className="form-label">Assunto</label>
                <select
                  className={`form-select${erros.assunto ? ' campo-invalido' : ''}`}
                  id="assunto"
                  name="assunto"
                  value={campos.assunto}
                  onChange={(event) => atualizarCampo('assunto', event.target.value)}
                >
                  <option value="">Escolha uma opção</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="participar">Quero participar</option>
                  <option value="outro">Outro</option>
                </select>
                <span className={`texto-erro${erros.assunto ? ' visivel' : ''}`}>{erros.assunto}</span>
              </div>

              <div className="mb-3">
                <label htmlFor="mensagem" className="form-label">Mensagem</label>
                <textarea
                  className={`form-control${erros.mensagem ? ' campo-invalido' : ''}`}
                  id="mensagem"
                  name="mensagem"
                  rows="4"
                  maxLength="500"
                  placeholder="Digite sua mensagem"
                  value={campos.mensagem}
                  onChange={(event) => atualizarCampo('mensagem', event.target.value)}
                ></textarea>
                <div className="contador-chars">{campos.mensagem.length}/500</div>
                <span className={`texto-erro${erros.mensagem ? ' visivel' : ''}`}>{erros.mensagem}</span>
              </div>

              <div className="modal-footer px-0 pb-0">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                <button type="submit" className="btn btn-success">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContatoModal
