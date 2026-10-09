import Participante from './Participante.js'

class Estabelecimento extends Participante {
  constructor(id, nome, cidade, uf, descricao, segmento) {
    super(id, nome, cidade, uf, descricao)
    this.segmento = segmento
  }

  getTipo() {
    return 'Estabelecimento'
  }

  getDestaque() {
    return `Segmento: ${this.segmento}`
  }
}

export default Estabelecimento
