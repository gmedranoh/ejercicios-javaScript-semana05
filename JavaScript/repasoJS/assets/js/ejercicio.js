/* 17 de junio*/

/* ------------------------ primer ejercicio ------------------------ */

/* let num1 = parseInt(prompt('Ingresa el primer numero'));
let num2 = parseInt(prompt('Ingresa el segundo numero'));

if((num1 || num2) == 0){
    document.write(`<h1>ingresa otro numero diferente de cero</h1>`);
}else if (num1<num2){
    document.write(`<h1>el segundo numero ${num2} ingresado es mayor que el primer numero ${num1}</h1>`)
}else if(num1>num2){
    document.write(`<h1>el primer numero ${num1} ingresado es mayor que el segundo ${num2}</h1>`)
}else if(num1==num2){
    document.write(`<h1>los numeros son iguales</h1>`);
} */
 
/* ------------------------ segungo ejercicio ------------------------ */

/* let dato1 = prompt('Ingresa el primer dato');
let dato2 = prompt('Ingresa el segundo dato');  */

let dato1 = parseInt(prompt('Ingresa el primer dato'));
let dato2 = parseInt(prompt('Ingresa el segundo dato')); 
console.log('dato1', typeof(dato1));
console.log('dato2', typeof(dato2));

if((typeof(dato1) != 'number' || typeof(dato2) )!= 'number'){
    
    document.write(`<h1>ingresa solo numeros</h1>`);
} 

