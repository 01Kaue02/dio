class Pessoa{


    nome;
    idade;

     descrever ( ){
               console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
 
    }
}
const kaue = new Pessoa();
kaue.nome = "Kaue";
kaue.idade = 25;


const Rennan = new Pessoa();
Rennan.nome = "Rennan kdkd";
Rennan.idade = 25;
kaue.descrever();
Rennan.descrever();


