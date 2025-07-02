const precoEtiqueta =100;
const condicaoPagamento = 4;

if (condicaoPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1)); // 10% de desconto
}
else if (condicaoPagamento === 2) {
    console.log (precoEtiqueta - (precoEtiqueta * 0.15));
}
else if (condicaoPagamento === 3) {
    console.log(precoEtiqueta);
}   
else if (condicaoPagamento === 4) {
        console.log (precoEtiqueta + (precoEtiqueta * 0.1));// 10% de juros
}
