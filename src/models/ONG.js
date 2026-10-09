import Participante from './Participante.js'

class ONG extends Participante {
  constructor(id, nome, cidade, uf, descricao, familiasAtendidas) {
    super(id, nome, cidade, uf, descricao)
    this.familiasAtendidas = familiasAtendidas
  }

  getTipo() {
    return 'ONG'
  }

  getDestaque() {
    return `${this.familiasAtendidas} famílias atendidas por mês`
  }
}

export default ONG
