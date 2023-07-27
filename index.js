const prompt = require('prompt-sync')();

//Escreva um programa que imprima "Olá, mundo!" na tela.
function exercio1(){
    console.log("Hello World!");
}
//exercio1();

//Crie um programa que solicite o nome do usuário e, em seguida, imprima uma mensagem personalizada com o nome inserido.
function exercio2(){
    let nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`);
}
//exercio2();

//Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado.
function exercio3(){
    let numero1 = parseInt(prompt("Informe o 1º Número Inteiro: "));
    let numero2 = parseInt(prompt("Informe o 2º Número Inteiro: "));

    let soma = numero1 + numero2;

    console.log(`A soma dos números digitados foi: ${soma}`);

}
//exercio3();

//Crie um programa que receba a idade de uma pessoa e informe se ela é maior ou menor de idade.
function exercio4(){
    let idade = parseInt(prompt("Informe a Idade: "));

    if(idade <= 0 ){
        console.log("Informe um valor maior que zero!");
        return exercio4();
    }else if(idade < 18){
        console.log("A pessoa é menor de idade!");
    }else if(idade >= 18 && idade <= 122){
        console.log("A pessoa é maior de idade!");
    }else if(idade > 122){
        console.log("A pessoa é a mais velha de todos os tempos!");
    }else{
        console.log("Valor Inválido! Informe apenas números!");
        return exercio4();
    }
}
//exercio4();

//Faça um programa que verifique se um número é par ou ímpar
function exercio5(){
    let numero = parseInt(prompt("Informe um número inteiro: "));

    let modulo = numero % 2;

    if(modulo === 0){
        console.log(`Número ${numero} é Par!`);
    }else if(modulo < 0 || modulo >0){
        console.log(`Número ${numero} é Ímpar!`);
    }else{
        console.log("Valor Informado inválido!");
        return exercio5();
    }
}
//exercio5();

//Escreva um programa que calcule a média de três números informados pelo usuário
function exercio6(){
    let numeros = [];
    

    while(numeros.length < 3){
        let numero = parseFloat(prompt("Informe um número inteiro: "));       

        if(isNaN(numero)){
            console.log("Informe um número válido!");
        }else{
            numeros.push(numero);
            console.log(numeros);
        }

        let media = (numeros[0]+numeros[1]+numeros[2])/3;

        console.log(`A média dos números informados é: ${media}`);
    }
    
}
//exercio6();

//Crie um programa que imprima os números de 1 a 10 em ordem crescente.

function exercio7(){   

    for(i=1; i<=10; i++){
        console.log(i);
    }
}
//exercio7();

//Faça um programa que imprima os números pares de 1 a 20
function exercio8(){   

    for(i=1; i<=20; i++){
        let resto = i % 2;
        
        if(resto === 0){
            console.log(i);
        }        
    }
}
//exercio8();

//Crie um programa que determine se um número é primo ou não.
function exercio9(){
    let numero = parseInt(prompt("Informe um número inteiro Maior que 1: "));
    let numeroPrimo = true;

    if(isNaN(numero)){
        console.log("Informe um número válido!");
        return exercio9();
    }else{
        for(i = 2; i < numero; i++){
            if( numero % i === 0){
                numeroPrimo = false;
            }
        }
        if(numeroPrimo){
            console.log(`o número ${numero} é primo`);
        }else{
            console.log(`o número ${numero} não é primo`);
        }
        
    }
}
//exercio9();

//Faça um programa que converta graus Celsius para Fahrenheit. F = C x 1,8 + 32

function exercio10(){

    let grauCelsius = parseFloat(prompt("Informe a temperatura em Graus Celsius: "));
    let grauFahrenheit = grauCelsius*1.8 + 32;

    console.log(`${grauCelsius}°C correspondem a ${grauFahrenheit}°F`);
}
exercio10();
