function esPar(cantElementos){
    if (cantElementos % 2 === 0){
        return true;
    } else {
        return false;
    }
}


function mediaAritmetica(listaValores){
    const sumaLista = listaValores.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    ); 
    return sumaLista / listaValores.length;
}

function ordenaLista(numbers){
    numbers.sort(function(a, b) {
    return a - b;
    });
    return numbers;
}

function mediana(listaValores){
    listaValores = ordenaLista(listaValores);
    console.log(`La lista ordenada es ${listaValores}`)
    let mediana; 
    let mitad;
    if (esPar(listaValores.length)){
        const posicion1 = listaValores.length / 2;
        const posicion2 = posicion1 - 1;
        mediana = mediaAritmetica([
            listaValores[posicion1], 
            listaValores[posicion2]    
        ])
    } else {
        mitad = parseInt(listaValores.length / 2);
        mediana = listaValores[mitad];
    }
    return mediana;
}

