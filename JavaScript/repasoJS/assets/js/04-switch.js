const edad = 40;
let imprimir = '';
const texto = 'Hola';

switch(texto) {
    case 18:
        imprimir = 'Caso 18';
        break;
    case 20:
        imprimir = 'Caso 20';
        break;
    case 'Hola':
        imprimir = 'Hola Mundo';
        break;
    default:
        imprimir = 'Datos por defecto';
        break;
}



document.write(`<h1>${imprimir}</h1>`); 

/* document.write('<h1>' + imprimir + '</h1>'); */
