console.log('Olá, mundo!');

const valorCombustivel = 5.79;
const kmPorLitro = 12.5; // Km por litro do carro
const distanciaKm = 100;

const listrosConsumidos = distanciaKm/ kmPorLitro; // Litros necessários
const valorGasto = listrosConsumidos * valorCombustivel; // Valor gasto
console.log(`Valor gasto na viagem: R$ ${valorGasto.toFixed(2)}`);