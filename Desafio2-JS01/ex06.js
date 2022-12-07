/* Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente. */

const score = 9

switch (score) {
    case 1:
        console.log('Você foi realmente péssimo')
        break;
    case 2:
        console.log('Você foi péssimo')
        break;
    case 3:
        console.log('Você foi horrivel')
        break;
    case 4:
        console.log('Você foi muito horrivel')
        break;
    case 5:
        console.log('Você foi muito mal')
        break;
    case 6:
        console.log('Você foi mal')
        break;

    case 7:
        console.log('Você foi mediano')
        break;

    case 8:
        console.log('Você foi bem')
        break;

    case 9:
        console.log('Você foi muito bem')
        break;

    case 10:
        console.log('Você foi excelnte')
        break;

    default:
        break;
}