let year = 2021;


while (year != 1990){
    document.write(`<h1>Ciclo while${year}</h1>`);
    year--;

    if(year == 2010){
        break;
    }

}

do {
    document.write(`<h1>Ciclo Do while${year}</h1>`);
}while(year == 2020);