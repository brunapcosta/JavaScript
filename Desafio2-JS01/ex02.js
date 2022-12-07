/* Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO */

const person = {
    nome: "Bruna",
    age: 27,
    genre: "female",
    nacionalidade: "brasileiro"
}
if (person.nacionalidade == "brasileiro") {
    console.log(`nacionalidade: ${person["nacionalidade"]}`)
}
else{
    console.log('nacionalidade: não brasileiro')
}
