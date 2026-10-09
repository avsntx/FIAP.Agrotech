import Selo from '../models/Selo.js'

const selos = {
  familiar: new Selo('familiar', 'Agricultura familiar', 'Produção feita pela própria família no campo.'),
  mulheres: new Selo('mulheres', 'Mulheres do campo', 'Produção liderada por mulheres agricultoras.'),
  indigena: new Selo('indigena', 'Povos indígenas', 'Produção de comunidades indígenas.'),
  quilombola: new Selo('quilombola', 'Quilombola', 'Produção de comunidades quilombolas.'),
  caicara: new Selo('caicara', 'Caiçara', 'Produção de comunidades caiçaras do litoral.'),
  pesca: new Selo('pesca', 'Pesca artesanal', 'Pesca feita de forma artesanal e sustentável.'),
}

export default selos
