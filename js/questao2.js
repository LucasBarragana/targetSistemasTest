function questao2() {
    openPopupWithInput(
      'Questão 2: Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.',
      'Digite um número',
      (input) => {
        const numero = parseInt(input, 10);
        if (isNaN(numero)) return 'Por favor, insira um número válido.';
  
        let a = 0, b = 1, pertence = false;
        while (a <= numero) {
          if (a === numero) pertence = true;
          [a, b] = [b, a + b];
        }
  
        return pertence
          ? `O número ${numero} pertence à sequência de Fibonacci.`
          : `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
      }
    );
  }
  