const valorDaTintaPorL = 15;
const precoPorMetro2 = 10;
let alturaDaParede = 8;
let larguraDaParede = 10;
const area = alturaDaParede * larguraDaParede;
let quantidadeDeTinta = area * valorDaTintaPorL;
const valorTotal = quantidadeDeTinta + precoPorMetro2 * area;

if (quantidadeDeTinta > 100 || alturaDaParede > 5) {
  const valorComTaxa = valorTotal + valorTotal * 0.5;
  console.log(valorComTaxa);
}

const perfil = {
  nome: "davi",
  idade: 19,
  email: "sousadavi248@gmail.com",
  senha: 123,
};

const inputEmail = "sousadavi248@gmail.com";
const inputSenha = 123;

if (inputEmail !== perfil.email || inputSenha !== perfil.senha) {
  return console.log("email ou senha invalida");
}

console.log("login reaslisado");
