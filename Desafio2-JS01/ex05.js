/* Crie 5 objetos nesse formato {nome: "" idade:"" sexo:"" profissão: "" nacionalidade: ""} 
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo, a pessoa deve ser 
maior de idade e brasileira para ser aprovada. Faça um programa onde os jurados vão dar a explicação 
para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente. */

const person1 = {
    name: 'Bruna',
    age: 10,
    genre: 'female',
    profission: 'Desenvolvedora',
    nationality: 'brasileira'
}

if (person1.nationality === 'brasileiro' || person1.nationality === 'brasileira' && person1.age >= 18) {
    console.log(`${person1['name']} você foi aprovado!`)
}
else{
    console.log(`${person1['name']} você NÃO foi aprovado`)
}

const person2 = {
    name: 'Deco',
    age: 63,
    genre: 'male',
    profission: 'Policial',
    nationality: 'brasileiro'
}

if (person2.age >= 18 && person2.nationality === 'brasileiro' || person2.nationality === 'brasileira') {
    console.log(`${person2['name']} você foi aprovado!`)
}
else{
    console.log(`${person2['name']} você NÃO foi aprovado!`)
}

const person3 = {
    name: 'Fernando',
    age: 51,
    genre: 'male',
    profission: 'supervisor',
    nationality: 'italiano'
}

if (person3.age >= 18 && person3.nationality === 'brasileiro' || person3.nationality === 'brasileira') {
    console.log(`${person3['name']} você foi aprovado!`)
}
else{
    console.log(`${person3['name']} você NÃO foi aprovado!`)
}

const person4 = {
    name: 'Raquel',
    age: 31,
    genre: 'female',
    profission: 'Policail',
    nationality: 'italiana'
}

if (person4.age >= 18 && person4.nationality === 'brasileiro' || person4.nationality === 'brasileira') {
    console.log(`${person4['name']} você foi aprovado!`)
}
else{
    console.log(`${person4['name']} você  NÃO foi aprovado!`)
}

const person5 = {
    name: 'Singlair',
    age: 64,
    genre: 'female',
    profission: 'secretaria',
    nationality: 'brasileira'
}

if (person5.age >= 18 && person5.nationality === 'brasileiro' || person5.nationality === 'brasileira') {
    console.log(`${person5['name']} você foi aprovado!`)
}
else{
    console.log(`${person5['name']} você NÃO foi aprovado!`)
}