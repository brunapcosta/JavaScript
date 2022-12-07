/* Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: 
    - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES; 
    - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES; 
    - Em caso negativo dos casos a cima => Há números pares e ímpares. */

const firstNumber = 3
const seccondNumber = 2
const thirdNumber = 7
const fourNumber = 4

if (firstNumber % 2 === 0 && seccondNumber % 2 === 0 && thirdNumber % 2 === 0 && fourNumber % 2 === 0) {
        console.log('Os números são pares!')
    }
    else if (firstNumber % 2 !== 0 && seccondNumber % 2 !== 0 && thirdNumber % 2 !== 0 && fourNumber % 2 !== 0){
        console.log('Os números são ímpares!')
    }
    else {
        console.log('Há números pares e ímpares!')
    }
    