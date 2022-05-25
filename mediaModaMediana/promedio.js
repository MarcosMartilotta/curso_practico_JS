//Manera basica de hacer un promedio

function promedio(listaValores){
    let sumaTotal = 0;
    for (let i = 0; i < listaValores.length; i++){
        sumaTotal += listaValores[i];
    }
    let promedio = sumaTotal/listaValores.length;
    return promedio;
}

//Manera pro de hacer un promedio

function mediaAritmetica(listaValores){
    //Al metodo reduce ay que pasarle una funcion y nos permitira ir sumando cada uno de los elementos. Podriamos multiplicarlos, sumarlos, o hacerles cualquier cosa que querramos

    const sumaLista = listaValores.reduce(
        function (valorAcumulado = 0, nuevoElemento){ //En valor acumulado vamos a guardar lo que guardemos en cada nueva iteracion.
            return valorAcumulado + nuevoElemento;
        }
    ); 
    return sumaLista / listaValores.length;
}

