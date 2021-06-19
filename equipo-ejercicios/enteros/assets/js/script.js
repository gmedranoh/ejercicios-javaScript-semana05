function factorial() {
    let numeroEntero = document.getElementById("numeroEntero").value;
    let factorialAcomulativo = 0;

    for (i = 1; i <= numeroEntero; i++) {
        factorialAcomulativo+=i;
    }

    document.write(`El factorial del numero ${numeroEntero} es: ${factorialAcomulativo}`);

}
       
    

