var peso = 52;
var altura = 1.56;

var imc = peso / (altura * altura);
console.log(imc);

if (imc <= 19.1) {
    console.log(`Seu imc é ${imc} e você está abaixo do peso`)
} else if (imc > 19.1  < 25.8) {
console.log(`Seu imc é ${imc} e você está no peso normal`)

} else if (imc > 25.8  < 27.3) {
    console.log(`Seu imc é ${imc} e você está marginalmente acima do peso`)

} else if (imc > 27.3  < 32.3) {
    console.log(`Seu imc é ${imc} e você está acima do peso ideal`)

} else if (imc > 32.3) {
    console.log(`Seu imc é ${imc} e você está obeso`)
} 

   var codigo = 101;
    var qtd = 2;

    var total;

    switch(codigo){
        case 100:
            total = 1.20 * qtd;
            console.log (`Cachorro Quente. Total ${total}`);
            break;
        case 101:
            total = 1.30 * qtd;
            console.log (`Bauru Simples Total ${total}`);
            break;
        case 102:
            total = 1.50 * qtd;
            console.log (`Bauru com Ovo Total ${total}`);
            break;
        case 103:
            total = 1.20 * qtd;
            console.log (`Hamburguer ${total}`);
            break;
        case 104:
            total = 1.30 * qtd;
            console.log (`Cheeseburguer ${total}`);
            break;
        case 105:
            total = 1.00 * qtd;
            console.log (`Refrigerante ${total}`);
            break;
        default:
            console.log(`Código não existe`)
    }



let mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
let dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (i = 0; i < mes.length; i ++) {

    console.log(`O mês de ${mes[i]} tem ${dias[i]} dias`)

}

let listaNomes = ['Tainá', 'Stellinha', 'Tequilina', 'Pituzinho', 'Julia'];

function listagem(lista) {
    for(let i = 1; i <= lista.length; i++) {
        console.log(`${i}. ${lista[i-1]}`);
    }
}

console.log(`Escolha um número para ser excluido da lista:`);
listagem(listaNomes);

let escolha = 2;
console.log(`Opção: ${escolha}`);

listaNomes.splice(escolha-1,1);

console.log('Lista após a exclusão:');
listagem(listaNomes);


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(lista);

let tamanho = lista.length - 1;

let aux;

for (i = 0; i < lista.length /2; i++) {
    aux = lista[i]
    lista[i] = lista[tamanho]
    lista[tamanho] = aux
    tamanho--
}
lista.reverse();
console.log(lista);


console.log(`Pedra, papel ou tesoura? `);
let jogador1 = tesoura;
console.log(`Pedra, papel ou tesoura? `);
let jogador2 = pedra;

function jogo (jogador1, jogador2) {

    if (jogador1 == 'pedra' && jogador2 == 'papel')
        console.log(`${jogador2} ganhou`)
    else if (jogador1 == 'papel' && jogador2 == 'pedra')
        console.log(`${jogador1} ganhou`)
    else if (jogador1 == 'tesoura' && jogador2 == 'pedra')
        console.log(`${jogador2} ganhou`)
    else if (jogador1 == 'tesoura' && jogador2 == 'pedra')
        console.log(`${jogador2} ganhou`)

    
    else(jogador1 == jogador2) 
    console.log(`Empate`)



function primo(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num % i == 0)
            return false;
    }
    return true;
}

let primosEncontrados = 0
let dividendo
let ehPrimo

for (let dividendo = 2; primosEncontrados < 1001; dividendo++) {
    ehPrimo = true
    for (let divisor = 2; dividendo > divisor; divisor++) {
        if (dividendo % divisor == 0) {
            ehPrimo = false;
            break
        }
    }

    if (ehPrimo == true) {
        primosEncontrados++
    }
}
console.log(`o 1001 número primo é ${--dividendo}`)

class Bomba {
    constructor
}


