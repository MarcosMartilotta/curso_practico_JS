function moda(listaValores){
    let contadorListaValores = {};
    listaValores.map( //Con este metodo puedo recorrer el array y en cada una de las iteraciones en elemento voy a recibir el valor que tiene el array en esa posicion.
        function(elemento){
            if (contadorListaValores[elemento]){
                contadorListaValores[elemento] += 1;
            }else{
                contadorListaValores[elemento] = 1;
            }
        }
        )
    
    //Convierto el contadorListaValores en un array y a ese array lo ordeno de menor a mayor
    const contadorArray = Object.entries(contadorListaValores).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    return contadorArray[contadorArray.length - 1][0];
}