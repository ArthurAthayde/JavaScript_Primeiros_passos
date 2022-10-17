

let num1 = parseInt(prompt("Digite um número inteiro"));
let num2 = parseInt(prompt("Digite outro número inteiro"));

let subtracao = (num1 - num2);

if(num1 > num2){
    alert(`O maior número é o ${num1} e a diferença é de ${subtracao}.`);
}
if(num2 > num1){
    alert(`O maior número é o ${num2} e a diferença é de ${subtracao}.`);
}





let valor1 = parseInt(prompt("Digite um número inteiro"));
let valor2 = parseInt(prompt("Digite outro valor inteiro"));

if(valor1 == valor2){
    alert(`Números iguais`)
}
if(valor1 > valor2) {
    alert (`O número ${valor1} é maior que o número ${valor2}.`);
}
if(valor2 > valor1){
    alert (`O número ${valor2} é maior que o número ${valor1}.`);
}




let salario = parseInt(prompt("Qual o seu salário?"));
let parcela = parseInt(prompt("Qual o valor da prestação do empréstimo?"));

if(parcela < (salario*0.30)){
alert(`Empréstimo concedido.`);
} 
if(parcela > (salario*0.30)){
alert(`Empréstimo não condedido.`);
}   





let numero = parseInt(prompt("Escolha um número"));
if(numero%3 == 0 && numero%5 == 0){
    alert(`Valor inválido`);
}

if(numero%3 == 0 && numero%5 != 0){
    alert(`Valor divisível por 3`);
} 
    
if(numero%5 == 0 && numero%3 != 0){ 
    alert(`Valor divisível por 5`);
}

if(numero%5 != 0 && numero%3 != 0 && numero%2 == 0){
    alert(`É par`)

}
if(numero%5 != 0 && numero%3 != 0 && numero%2 != 0){
    alert(`É impar`)
}




let dia = parseInt(prompt("Escolha um número de 1 a 7"));
    
    if(dia == 1){
        alert(`Domingo`);
    }if(dia == 2){
        alert(`Segunda-Feira`);
    }
    if(dia == 3){
        alert(`Terça-Feira`);
    }
    if(dia == 4){
        alert(`Quarta-Feira`);
    }
    if(dia == 5){
        alert(`Quinta-Feira`);
    }
    if(dia == 6){
        alert(`Sexta-Feira`);
    }
    if(dia == 7){
        alert(`Sábado`);
    }
    if(dia <= 0 || dia > 7){
        alert(`Número inválido`);
    }





let salario2 = parseInt(prompt("Coloque o valor do seu salário"));
let reajuste = parseFloat(prompt("Escolha um reajuste de até 5%"));
let resultado = salario2 + (salario2 * reajuste/100);
if(resultado){
    alert (`O salário do funcionário corrigido é de: R$${resultado}`);
}





let dolar = parseFloat(prompt("Insira o valor em dólar que deseja converter"));
let cotacao = parseFloat(prompt("Insira a cotação atual do dólar para real"))
let resultado2 = (dolar * cotacao);
if(resultado2){
    alert(`$${dolar.toFixed(2)} é equivalente a R$${resultado2.toFixed(2)}, tendo ${cotacao.toFixed(2)} como cotação.`);
}




let area = parseFloat(prompt("Digite qual o valor da área a ser pulverizada"));
let tipo = parseInt(prompt("Digite qual o tipo de praga"))
let valorFinal = 0;

if(tipo == "1"){
    valorFinal = area * 50;
}
if( tipo == "2"){
    valorFinal = area * 100;
}
if(tipo == "3"){
    valorFinal = area * 150;
}
if(tipo == "4"){
    valorFinal = area * 250;
}

if(area > 1000){
    valorFinal = valorFinal * 0,95;
}

if(valorFinal > 750){
   let valorMaior = valorFinal - 750;
    valorMaior = valorMaior * 0.10;
    valorFinal = valorFinal - valorMaior
}
alert (`O valor ser pago é de: R$${valorFinal.toFixed(2)}`);




let tempo = parseFloat(prompt("Qual foi o tempo, em horas, gasto na viagem?"));
let velocidade = parseFloat(prompt("Informe, em km/h, qual a velocidade média do veículo da viagem"));

let distancia = tempo * velocidade;

let consumo = distancia/12;

alert(`Seu veículo percorreu ${distancia.toFixed(2)} km a ${velocidade.toFixed(2)} km/h em ${tempo.toFixed(2)}h de viagem e consumiu ${consumo.toFixed(2)}L de gasolina`);




let valor = parseFloat(prompt("Qual o valor da prestação?"));
let taxa = parseFloat(prompt("Qual a taxa de juros?"));
let tempo2 = parseInt(prompt("Qual o tempo, em dias, de atraso do pagamento?"));

let prestacao = valor + (valor*(taxa/100)*tempo2);

if(tempo2){
    alert(`O novo valor da prestação é de R$${prestacao.toFixed(2)}`);

}if( tempo2 == 0){
    alert(`Valor inválido: o tempo de atraso deve ser em dias.`);
}

