import Lote from './Lote.js'
import Participante from './Participante.js'

class Produtor extends Participante {
  constructor(id, nome, cidade, uf, descricao, tipoProducao, selos) {
    super(id, nome, cidade, uf, descricao)
    this.tipoProducao = tipoProducao
    this.selos = selos
    this.lotes = []
  }

  getTipo() {
    return 'Produtor'
  }

  getDestaque() {
    return this.tipoProducao
  }

  cadastrarLote(produto, quantidade, unidade, dataColheita, validade, codigo) {
    const lote = new Lote(codigo, produto, quantidade, unidade, dataColheita, validade, this)
    this.lotes.push(lote)
    return lote
  }
}

export default Produtor
