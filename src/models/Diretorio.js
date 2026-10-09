class Diretorio {
  constructor() {
    this.participantes = []
  }

  adicionar(participante) {
    this.participantes.push(participante)
  }

  buscar(termo, tipo) {
    return this.participantes.filter((participante) => {
      const tipoCerto = tipo === 'Todos' || participante.getTipo() === tipo
      return tipoCerto && participante.correspondeABusca(termo)
    })
  }

  filtrarPorTipo(tipo) {
    return this.participantes.filter((participante) => participante.getTipo() === tipo)
  }

  buscarPorId(id) {
    return this.participantes.find((participante) => participante.id === id)
  }

  getLotes() {
    return this.filtrarPorTipo('Produtor').flatMap((produtor) => produtor.lotes)
  }

  buscarLote(codigo) {
    return this.getLotes().find((lote) => lote.codigo === codigo)
  }
}

export default Diretorio
