export function validarNomeCompleto(valor) {
  if (valor.trim() === '') return 'O nome não pode ficar em branco.'
  const partes = valor.trim().split(/\s+/)
  if (partes.length < 2) return 'Informe o nome e o sobrenome.'
  if (partes[0].length < 2) return 'O nome deve ter ao menos 2 letras.'
  if (partes[1].length < 2) return 'O sobrenome deve ter ao menos 2 letras.'
  return null
}

export function validarEmailFormato(valor) {
  if (valor.trim() === '') return 'O e-mail não pode ficar em branco.'
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regex.test(valor)) return 'Informe um e-mail válido.'
  return null
}
