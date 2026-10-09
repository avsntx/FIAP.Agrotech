class Selo {
  constructor(id, nome, descricao) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
  }

  getDescricaoCompleta() {
    return `${this.nome}: ${this.descricao}`
  }
}

export default Selo
