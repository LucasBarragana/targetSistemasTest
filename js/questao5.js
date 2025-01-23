function questao5() {
    openPopupWithInput(
      'Questão 5: Escreva um programa que inverta os caracteres de um string.',
      'Digite uma string',
      (input) => {
        if (!input || input.trim() === '') return 'Por favor, insira uma string válida.';
  
        let invertida = '';
        for (let i = input.length - 1; i >= 0; i--) {
          invertida += input[i];
        }
  
        return `String invertida: ${invertida}`;
      }
    );
  }
  