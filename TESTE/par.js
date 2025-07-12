const numeros = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let i = 0; i < numeros.length; i++) {
const par = numeros[i] % 2 === 0; 
if (par) {
    console.log(numeros[i] + " é par");
}
}