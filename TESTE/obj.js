const kaue ={
    nome: "Kaue",
    idade: 20,
    profissao: "Programador",
    genero: "Masculino",
    hobbies: ["Jogos", "Música", "Esportes"],
    descrever: function() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}, Gênero: ${this.genero}`);
    }
};


console.log(kaue ["nome"])