class Participante {
  constructor(id, nome, cidade, uf, descricao) {
    this.id = id
    this.nome = nome
    this.cidade = cidade
    this.uf = uf
    this.descricao = descricao
  }

  getTipo() {
    return 'Participante'
  }

  getLocalizacao() {
    return `${this.cidade}, ${this.uf}`
  }

  getDestaque() {
    return ''
  }

  correspondeABusca(termo) {
    const texto = `${this.nome} ${this.getTipo()} ${this.getLocalizacao()}`.toLowerCase()
    return texto.includes(termo.trim().toLowerCase())
  }
}

export default Participante
