function calucularIMC(peso, altura) {
  return peso / (altura * altura);
}
    function classificarIMC(imc) {
        if (imc < 18.5) {
        return("Abaixo do peso");
} else if (imc >= 18.5 && imc < 24.9) {
        return("Peso normal");
} else if (imc >= 25 && imc < 29.9) {
        return("Sobrepeso");
} else if (imc >= 30 && imc < 34.9) {
        return("Obesidade grau 1");
} else if (imc >= 35 && imc <39.9) {
    return("Obesidade grau 2");
} else {
    return("Obesidade grau 3");
}
    }
    function main() {
const peso= 75; // Peso em kg
const altura = 1.60; // Altura em metros
const imc = calucularIMC(peso, altura); // Cálculo do IMC
console.log(classificarIMC(imc)); // Exibe o IMC com duas casas decimais
    }

    main(); // Chama a função principal para executar o programa