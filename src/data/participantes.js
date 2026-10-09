import Diretorio from '../models/Diretorio.js'
import Estabelecimento from '../models/Estabelecimento.js'
import ONG from '../models/ONG.js'
import Produtor from '../models/Produtor.js'
import { dataDaquiA } from '../utils/datas.js'
import selos from './selos.js'

const diretorio = new Diretorio()

const sitioRaizes = new Produtor(1, 'Sítio Raízes do Ribeira', 'Registro', 'SP', 'Família que cultiva banana, mandioca e palmito em sistema agroflorestal.', 'Agricultura familiar agroecológica', [selos.familiar, selos.mulheres])
const colonia = new Produtor(2, 'Colônia de Pescadores Mar Azul', 'Cananéia', 'SP', 'Pescadores caiçaras que mantêm a pesca artesanal de tainha e o cultivo de ostras.', 'Pesca artesanal', [selos.caicara, selos.pesca])
const quilombo = new Produtor(3, 'Associação Quilombola Serra Verde', 'Eldorado', 'SP', 'Roça tradicional de arroz, feijão e milho, além de mel de abelhas nativas.', 'Roça tradicional quilombola', [selos.quilombola, selos.familiar])
const coletivo = new Produtor(4, 'Coletivo Indígena Mata Viva', 'Bertioga', 'SP', 'Produz farinha de mandioca, palmito juçara manejado e artesanato tradicional.', 'Extrativismo sustentável', [selos.indigena])
const horta = new Produtor(5, 'Horta das Marias', 'Mogi das Cruzes', 'SP', 'Grupo de agricultoras que produz hortaliças orgânicas e entrega cestas semanais.', 'Hortaliças orgânicas', [selos.mulheres, selos.familiar])

diretorio.adicionar(sitioRaizes)
diretorio.adicionar(colonia)
diretorio.adicionar(quilombo)
diretorio.adicionar(coletivo)
diretorio.adicionar(horta)

diretorio.adicionar(new Estabelecimento(6, 'Padaria Pão da Vila', 'São Paulo', 'SP', 'Doa no fim do dia os pães e bolos que não foram vendidos.', 'Padaria'))
diretorio.adicionar(new Estabelecimento(7, 'Hortifrúti Bom Preço', 'Sorocaba', 'SP', 'Repassa frutas e verduras fora do padrão para ONGs parceiras.', 'Hortifrúti'))
diretorio.adicionar(new Estabelecimento(8, 'Restaurante Sabor da Terra', 'Campinas', 'SP', 'Compra de produtores locais e doa as refeições que não foram servidas.', 'Restaurante'))

diretorio.adicionar(new ONG(9, 'Instituto Prato Cheio', 'Campinas', 'SP', 'Distribui refeições e cestas básicas para famílias em situação de vulnerabilidade.', 320))
diretorio.adicionar(new ONG(10, 'Rede Solidária do Litoral', 'Santos', 'SP', 'Recolhe excedentes de comércios do litoral e entrega para cozinhas comunitárias.', 180))
diretorio.adicionar(new ONG(11, 'Banco de Alimentos Vale Unido', 'Registro', 'SP', 'Organiza a coleta de alimentos no Vale do Ribeira e distribui para 12 entidades.', 450))

sitioRaizes.cadastrarLote('Banana-prata', 120, 'kg', dataDaquiA(-3), dataDaquiA(12), 'NTV-BN8K2Q')
colonia.cadastrarLote('Ostras do estuário', 40, 'dúzias', dataDaquiA(-1), dataDaquiA(5), 'NTV-OS3M7P')
quilombo.cadastrarLote('Mel de abelhas nativas', 25, 'potes', dataDaquiA(-20), dataDaquiA(340), 'NTV-ML5J9T')
coletivo.cadastrarLote('Farinha de mandioca', 80, 'kg', dataDaquiA(-10), dataDaquiA(170), 'NTV-FR2H6W')
horta.cadastrarLote('Alface e rúcula', 60, 'maços', dataDaquiA(0), dataDaquiA(3), 'NTV-HT9C4Z')

const lotesSalvos = JSON.parse(localStorage.getItem('lotes')) || []

lotesSalvos.forEach((item) => {
  const produtor = diretorio.buscarPorId(item.produtorId)
  if (produtor) {
    produtor.cadastrarLote(item.produto, item.quantidade, item.unidade, item.dataColheita, item.validade, item.codigo)
  }
})

export default diretorio
