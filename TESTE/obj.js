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
 function compararPessoas(p1, p2) {
    if( p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
 }

 const vitor = new Pessoa("Vitor", 25 );
    const maria = new Pessoa("Maria", 25);

    compararPessoas(vitor, maria);


