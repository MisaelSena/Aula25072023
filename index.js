const prompt = require('prompt-sync')();


function exercio1(){
    console.log("Hello World!");
}
// exercio1();

function exercio2(){
    let nome = prompt("Informe seu nome: ");
    console.log(`Olá ${nome}!`);
}

exercio2();