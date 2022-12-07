/* Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor. */

const firstNumber = 40
const seccondNumber = 20
const thirdNumber = 30

if (firstNumber > seccondNumber && firstNumber > thirdNumber) {
    console.log('O primeiro é o maior')
}
else if (seccondNumber > thirdNumber) {
    console.log('O segundo é o maior')
}
else{
    console.log('O terceiro é o maior')
}

if (firstNumber < seccondNumber && firstNumber < thirdNumber) {
    console.log('O primeiro é o menor')
}
else if (seccondNumber < thirdNumber) {
    console.log('O segundo é o menor')
}
else{
    console.log('O terceiro é o menor')
}