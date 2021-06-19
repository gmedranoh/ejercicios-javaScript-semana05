const meses = ['Enero', 'Febrero' , 'Marzo' , 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


for (let i=0; i<12; i++){
    console.log(meses[i]);
}

/* Funcion Flecha para multiplicar */



const multiplicar = (numero) => {
    for(let i=1; i<=10 ; i++){
        /* document.write(`<h1>${numero} x ${i} = ${numero * 1}</h1>`); */
        /* Otra manera de mostrar el resultado */
        document.write('<h1>' + numero + 'x' + i + '=' + numero * i + '</h1>');
    }
}

multiplicar(4);