function escrevaNome(nome) {
   console.log("Sua senha é: " + nome);
}
escrevaNome("Jck1010sdfgafasv");
escrevaNome("Jck1010sdfgafasv2");
 
function escrevaIdade(idade) {
   if (idade < 18) {
       console.log("Você é menor de idade.");
   } else if (idade >= 18 && idade < 60) {
       console.log("Você é maior de idade.");
   } else {
       console.log("Você é idoso.");
   }
}
escrevaIdade(17);
escrevaIdade(30);
escrevaIdade(65);