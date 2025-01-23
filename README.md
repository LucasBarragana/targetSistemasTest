Projeto Completo - Questões Técnicas
Este projeto é um conjunto de soluções para várias questões técnicas, apresentadas em forma de desafios de programação. Ele inclui uma interface em HTML com Tailwind CSS para exibição das questões e a interação do usuário. Cada questão é implementada com JavaScript, que executa o cálculo ou ação correspondente e exibe o resultado em um popup.

Estrutura do Projeto
HTML (index.html)

Contém a estrutura básica da página, incluindo o título e botões para cada questão.
Usa o framework Tailwind CSS para estilização rápida e responsiva.
A interação com o usuário é realizada através de popups que mostram os resultados das questões.
JavaScript

Cada questão é representada por uma função, que é chamada quando o usuário clica no botão correspondente.
As respostas são apresentadas em popups modais para melhorar a experiência do usuário.


Questões Técnicas

Questão 1: Soma e Índice

Objetivo: Calcular a soma dos números de 1 a 13 (inclusive) usando um loop while.
Implementação: Um loop while é utilizado para somar os números de 1 até o valor de INDICE (13). O valor final da soma é exibido em um popup.
javascript
Copiar
Editar
function questao1() {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    openPopup('Questão 1: Observe o trecho de código abaixo...', `O resultado da soma é: ${soma}`);
}


Questão 2: Sequência de Fibonacci

Objetivo: Verificar se um número informado pelo usuário pertence à sequência de Fibonacci.
Implementação: A sequência de Fibonacci é gerada até que o valor informado pelo usuário seja encontrado. Um popup é mostrado informando se o número pertence ou não à sequência.
javascript
Copiar
Editar
function questao2() {
    openPopupWithInput('Questão 2: Dado a sequência de Fibonacci...', 'Digite um número', (input) => {
        const numero = parseInt(input, 10);
        let a = 0, b = 1, pertence = false;
        while (a <= numero) {
            if (a === numero) pertence = true;
            [a, b] = [b, a + b];
        }
        return pertence
            ? `O número ${numero} pertence à sequência de Fibonacci.`
            : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    });
}


Questão 3: Faturamento Diário

Objetivo: Calcular o menor valor, maior valor, e o número de dias em que o faturamento foi superior à média mensal a partir de um arquivo JSON.
Implementação: A função usa fetch para obter dados de um arquivo JSON e realiza os cálculos de menor valor, maior valor, e dias acima da média. Os resultados são exibidos em um popup.
javascript
Copiar
Editar
async function questao3() {
    try {
        const response = await fetch('./data/faturamento.json');
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
        openPopup('Questão 3: Dado um vetor que guarda o valor de faturamento diário...', resposta);
    } catch (error) {
        openPopup('Erro', 'Não foi possível carregar os dados de faturamento.');
        console.error(error);
    }
}


Questão 4: Percentual por Estado

Objetivo: Calcular o percentual de faturamento de cada estado em relação ao total mensal da distribuidora.
Implementação: O faturamento de cada estado é dividido pelo total de faturamento e multiplicado por 100 para calcular o percentual. O resultado é exibido em um popup.
javascript
Copiar
Editar
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

    openPopup('Questão 4: Dado o valor de faturamento mensal...', percentual);
}


Questão 5: Inversão de String

Objetivo: Inverter a ordem dos caracteres de uma string fornecida pelo usuário.
Implementação: A string é invertida utilizando um loop for e o resultado é exibido em um popup.
javascript
Copiar
Editar
function questao5() {
    openPopupWithInput('Questão 5: Escreva um programa que inverta...', 'Digite uma string', (input) => {
        let invertida = '';
        for (let i = input.length - 1; i >= 0; i--) {
            invertida += input[i];
        }
        return `String invertida: ${invertida}`;
    });
}


Recursos Externos
Tailwind CSS: Framework CSS usado para estilização da página.
Popups modais: São usados para interagir com o usuário e exibir os resultados.


Como Rodar
Certifique-se de que o arquivo index.html e os scripts JavaScript (questao1.js, questao2.js, questao3.js, questao4.js, questao5.js) estejam na mesma pasta.
Abra o arquivo index.html em um navegador para visualizar e interagir com as questões.

Este README descreve a implementação do código para cada questão, bem como o funcionamento geral da página. As questões abordam temas básicos de programação, como loops, funções e manipulação de strings, e são implementadas utilizando JavaScript de maneira simples e funcional.