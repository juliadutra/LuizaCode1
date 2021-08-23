class Pessoa {
    constructor (nome, idade, CNH){
    this.nome = nome;
    this.idade = idade;
    this.CNH = CNH;
    }
dirigir() {
    return console.log(`Você pode dirigir`)
}
dormir() {
    return console.log(`Você pode dormir`)
}
comer() {
    return console.log(`Você pode comer`)
}

}
const pessoa = new Pessoa('Julia', 28, 1234);
console.log(pessoa);

pessoa.comer()
pessoa.dirigir()
pessoa.dormir()


// //caracteristicas / atributos
// // açoes // métodos

class BombaCombustivel {
    //atributos
    constructor(valorGasolina, capacidade){
        this.valorGasolina = valorGasolina
        this.capacidade = capacidade
        this.qtdGasolina = capacidade
    }

    //metodos
    encheBombar(){
        if(this.qtdGasolina == this.capacidade){
            console.log('A bomba ta full')
        } else {
            this.qtdGasolina = this.capacidade
            console.log('Enchendo a bomba...3..2..1!')
        }
    }
 
    abastecerCarro(litros){
        if (this.qtdGasolina >= litros) {
            this.qtdGasolina -= litros
            console.log(`Abastecido com sucesso e vc vai pagar ${litros*this.valorGasolina}`)
        } else {
            console.log(`nao temos essa quantidade de gasolina. Só temos ${this.qtdGasolina}`)
        }
    }

    ajustarValor(novoValor){
        if(novoValor > 0 && typeof(novoValor) == 'number'){
            this.valorGasolina = novoValor;
        } else {
            console.log("Vai liberar de graça!! huhulll")
        }
    }
}

const bomba1 = new BombaCombustivel(10,50)

bomba1.abastecerCarro(20)
bomba1.ajustarValor(5)
bomba1.abastecerCarro(20)
bomba1.abastecerCarro(20)
bomba1.encheBombar()
bomba1.abastecerCarro(20)



let salario = 278
let novoSalario


if (salario <= 280) {
    novoSalario = salario * 1.20
    console.log(`Seu salário antes do reajuste era R$ ${salario}, o percentual de reajuste aplicado foi de 20% e seu novo salário é R$ ${novoSalario}`)
} else if (salario <= 700) {
    novoSalario = salario * 1.15
    console.log(`Seu salário antes do reajuste era R$ ${salario}, o percentual de reajuste aplicado foi de 15% e seu novo salário é R$ ${novoSalario}`)
} else if (salario <= 1500) {
    novoSalario = salario * 1.10
    console.log(`Seu salário antes do reajuste era R$ ${salario}, o percentual de reajuste aplicado foi de 10% e seu novo salário é R$ ${novoSalario}`)
} else {
    novoSalario = salario * 0.5
    console.log(`Seu salário antes do reajuste era R$ ${salario}, o percentual de reajuste aplicado foi de 5% e seu novo salário é R$ ${novoSalario}`)

}
   


function converteData (data) {
    dia = data.substring(0,2)
    mes = parseInt(data.substring(3,5))
    meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    ano = data.substring (6)
    console.log(`${dia} de ${meses[mes - 1]} de ${ano}`)   
}
converteData('16/02/1993')

let nome = 'Julia'


        
    
      
    
