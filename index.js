const prompt = require('prompt-sync')();


function exercio1(){
    console.log("Hello World!");
}
// exercio1();

function exercio2(){
    let nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`);
}
//exercio2();

function exercio3(){
    let numero1 = parseInt(prompt("Informe o 1º Número Inteiro: "));
    let numero2 = parseInt(prompt("Informe o 2º Número Inteiro: "));

    let soma = numero1 + numero2;

    console.log(`A soma dos números digitados foi: ${soma}`);

}
//exercio3();

