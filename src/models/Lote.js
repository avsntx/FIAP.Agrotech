class Lote {
  constructor(codigo, produto, quantidade, unidade, dataColheita, validade, produtor) {
    this.codigo = codigo || Lote.gerarCodigo()
    this.produto = produto
    this.quantidade = quantidade
    this.unidade = unidade
    this.dataColheita = dataColheita
    this.validade = validade
    this.produtor = produtor
  }

  static gerarCodigo() {
    return 'NTV-' + Math.random().toString(36).substring(2, 8).toUpperCase()
  }

  diasParaVencer() {
    const hoje = new Date()
    hoje.setHours(0, 0, 0, 0)
    const validade = new Date(this.validade + 'T00:00:00')
    return Math.round((validade - hoje) / (1000 * 60 * 60 * 24))
  }

  estaVencido() {
    return this.diasParaVencer() < 0
  }

  getStatus() {
    if (this.estaVencido()) return 'Vencido'
    if (this.diasParaVencer() <= 3) return 'Vence em breve'
    return 'Dentro da validade'
  }

  getLinkRastreio() {
    const parametros = new URLSearchParams({
      produto: this.produto,
      quantidade: this.quantidade,
      unidade: this.unidade,
      colheita: this.dataColheita,
      validade: this.validade,
      produtor: this.produtor.nome,
      cidade: this.produtor.cidade,
      uf: this.produtor.uf,
    })
    return `/rastreio/${this.codigo}?${parametros.toString()}`
  }
}

export default Lote
