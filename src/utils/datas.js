export function dataDaquiA(dias) {
  const data = new Date()
  data.setDate(data.getDate() + dias)
  const ano = data.getFullYear()
  const mes = String(data.getMonth() + 1).padStart(2, '0')
  const dia = String(data.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

export function formatarData(texto) {
  return new Date(texto + 'T00:00:00').toLocaleDateString('pt-BR')
}
