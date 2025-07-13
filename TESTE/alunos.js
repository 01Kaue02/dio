function verificarPromocoes() {
  // ✅ Constante com a taxa de desconto
  const taxaDesconto = 0.10;

  // Entrada do usuário
  const entrada = gets(); // Ex: "Carrinho: 10, 15.00 - Boneca: 3, 25.00"
  const produtos = entrada.split(' - '); // separa cada brinquedo
  const resultado = [];

  produtos.forEach(produto => {
    const [nome, quantidadePreco] = produto.split(': '); // separa nome do restante
    const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); // converte para número

    let precoFinal;

    // ✅ Verifica se a quantidade é maior ou igual a 5
    if (quantidade >= 5) {
      precoFinal = precoUnitario * (1 - taxaDesconto); // aplica 10% de desconto
    } else {
      precoFinal = precoUnitario; // mantém o preço original
    }

    // ✅ Adiciona resultado com 2 casas decimais
    resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
  });

  // ✅ Imprime tudo junto com separador " - "
  print(resultado.join(' - '));
}

// ✅ Chamada da função para execução
verificarPromocoes();
