class Pessoa{
nome;
peso;
altura;

constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}
    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }
}
    const jose = new Pessoa("José", 70, 1.75);
    console.log(jose.calcularImc()); // Exemplo de uso
    const maria = new Pessoa("Maria", 60, 1.65);
    console.log(maria.calcularImc()); // Exemplo de uso
    const pedro = new Pessoa("Pedro", 80, 1.80);
    console.log(pedro.calcularImc()); // Exemplo de uso
