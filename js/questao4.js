function questao4() {
    const faturamento = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53,
    };
  
    const total = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);
    const percentual = Object.entries(faturamento)
      .map(([estado, valor]) => `<p>${estado}: ${(valor / total * 100).toFixed(2)}%</p>`)
      .join('');
  
    openPopup('Questão 4: Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:• SP – R$67.836,43; • RJ – R$36.678,66; • MG – R$29.229,88; • ES – R$27.165,48; • Outros – R$19.849,53. Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  ', percentual);
  }
  