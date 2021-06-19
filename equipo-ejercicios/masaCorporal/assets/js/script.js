function masaCorporal() {
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;

    let IMC = (peso / (estatura*estatura));

    document.write(`<h1> tu indice de masa corporal es ${IMC.toFixed(2)}</h1>`);
}