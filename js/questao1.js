function questao1() {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
      k++;
      soma += k;
    }
    openPopup('Questão 1: Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0. Enquanto K<INDICE faça {K=K+1;SOMA+K}. Imprima(SOMA). Ao final do processamento, qual será o valor da variável SOMA? ', `O resultado da soma é: ${soma}`);
  }
  