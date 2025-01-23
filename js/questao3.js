async function questao3() {
    try {
      const response = await fetch('./data/faturamento.json'); // Certifique-se do caminho correto
      const data = await response.json();
  
      const diasValidos = data.filter(d => d.valor > 0);
      const menor = Math.min(...diasValidos.map(d => d.valor));
      const maior = Math.max(...diasValidos.map(d => d.valor));
      const media = diasValidos.reduce((acc, cur) => acc + cur.valor, 0) / diasValidos.length;
      const diasAcima = diasValidos.filter(d => d.valor > media).length;
  
      const resposta = `
        <p>Menor valor: ${menor.toFixed(2)}</p>
        <p>Maior valor: ${maior.toFixed(2)}</p>
        <p>Dias acima da média: ${diasAcima}</p>
      `;
      openPopup('Questão 3: Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:• O menor valor de faturamento ocorrido em um dia do mês;• O maior valor de faturamento ocorrido em um dia do mês;• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.', resposta);
    } catch (error) {
      openPopup('Erro', 'Não foi possível carregar os dados de faturamento.');
      console.error(error);
    }
  }
  