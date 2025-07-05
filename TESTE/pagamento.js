function aplicarDesconto (valor, desconto){
    return (valor - (valor * (desconto / 100))).toFixed(2);
}
function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100))).toFixed(2);
}
const precoEtiqueta = 100;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10)); // 10% de desconto
}
else if (condicaoPagamento === 2) {
    console.log (aplicarDesconto  (precoEtiqueta,15));
}
else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta);
}   
else if (condicaoPagamento === 4) {
        console.log (aplicarJuros  (precoEtiqueta, 10));// 10% de juros
}
