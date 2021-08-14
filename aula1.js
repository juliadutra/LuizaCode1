var idade = 20;
var verificar = (idade >= 16 && idade <= 18) || (idade > 60) ?
    'meia entrada'

    :

    'entrada inteira';

console.log(`Você vai pagar ${verificar}.`);