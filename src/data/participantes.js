import Diretorio from '../models/Diretorio.js'
import Estabelecimento from '../models/Estabelecimento.js'
import ONG from '../models/ONG.js'
import Produtor from '../models/Produtor.js'
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

export default diretorio
