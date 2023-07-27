const prompt = require('prompt-sync')();


function exercio1(){
    console.log("Hello World!");
}
//exercio1();

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
exercio4();

