class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.gastoMedioPorKm * precoCombustivel).toFixed(2);
}
}
    const uno = new Carro("Fiat", "Preto", 1/12);
     console.log( "Valor gasto foi: " + uno.calcularGastoDePercurso(70, 5)); // Exemplo de uso
   const palio = new Carro("Fiat", "Vermelho", 1/10);
   console.log("Valor gasto foi: " + palio.calcularGastoDePercurso(70, 5));