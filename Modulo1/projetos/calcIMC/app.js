const imcCalc = document.getElementById("imc");
const formIMC = document.getElementById("formIMC");

formIMC.addEventListener("submit", (e) => {
  e.preventDefault();

  const peso = Number(formIMC.peso.value);
  const altura = Number(formIMC.altura.value);

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    alert("Peso e altura devem ser valores positivos.");
    return;
  }

  const alturaAo2 = altura * altura;
  const imc = peso / alturaAo2;

  let mensagem = "";
  let cor = "";

  switch (true) {
    case imc < 18.5:
      mensagem = "Você está abaixo do peso";
      cor = "yellow";
      break;
    case imc >= 18.5 && imc < 24.9:
      mensagem = "Seu peso está normal";
      cor = "green";
      break;
    case imc >= 25 && imc < 29.9:
      mensagem = "Você está sobrepeso";
      cor = "yellow";
      break;
    case imc >= 30 && imc < 34.9:
      mensagem = "Você está com obesidade grau 1";
      cor = "red";
      break;
    case imc >= 35 && imc < 39.9:
      mensagem = "Você está com obesidade grau 2";
      cor = "red";
      break;
    case imc >= 40:
      mensagem = "Você está com obesidade grau 3";
      cor = "red";
      break;
    default:
      mensagem = "Valor inválido";
  }

  imcCalc.style.display = "block";

  imcCalc.innerHTML = `
        <div class="flex gap-10 items-center">
            <div class="flex flex-col items-center">
                <h3 class="text-4xl text-green-500">${imc.toFixed(2)}</h3>
                <p>Seu IMC</p>
            </div>
            <p class="text-md font-bold">${mensagem}</p>
        </div>
    `;
});
