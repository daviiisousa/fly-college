//tipos primitivos
const nome = "Davi" //string
console.log(nome)

const idade = 19 //number
const dev = true // boolean

//------------------------------//

const altura = 1.76 // number / float
const animes  = ['HxH', 'atack on titan', 'dbz'] // array
const pc = {
    ram: '8',
    processador: 'i3',
    SSD: 222,
    placa_de_video: null,
    HD: null
} // object
const dinheiro = null // null - vazio
const namorado = undefined // undefined - nao existe

// ---------------------------------//
//Operadores matemáticos 
const soma = 5 + 5
const multiplicacao = 5 * 5
const subtracao = 5 - 5 
const divisao = 5 / 5
const resto = 5 % 5

// ------------------- //
const consumoMensal = 670
const distanciaMensal = 1000
const dias = 31
const gastoPorDia = consumoMensal / dias
console.log(gastoPorDia)

//-------------------------//
function calcularArea(largura, altura){
    return largura * altura
}

const areaDaParede = calcularArea(10, 2)
console.log(`A area a ser pintada é ${areaDaParede}`)

//----------------------------//
const litrosDeTinta = (areaDaParede / 3).toFixed(2)
console.log(`deve ser usado ${litrosDeTinta}L de tinta`)

// ----------------------- //
