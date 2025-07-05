class Pessoa{


    nome;
    idade;
    anoDeNascimento;
    constructor (nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
        
    }

     descrever ( ){
               console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
 
    }
}
const kaue = new Pessoa('Kaue', 25);


const Rennan = new Pessoa('Rennan', 30);
console.log(kaue);
console.log(Rennan);


