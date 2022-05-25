function multiplicaArray(arrayValores){
    let totalValores = 1;
    arrayValores.map(
        function(elemento){
            totalValores = totalValores*elemento;
        })
        return totalValores;
}

//Esta funcion devuelve true si y solo si no hay numeros negativos o cero en el array
function niNegativosNiCeros(arrayValores){
    let trueOrFalse = true;
    arrayValores.map(
        function(elemento){
            if (elemento <= 0){
                return trueOrFalse = false;
            }
        }
    )
    return trueOrFalse;
}

function mediaGeometrica(arrayValores){
    if (niNegativosNiCeros(arrayValores)){
        const multiplicacion = multiplicaArray(arrayValores);
        const mediaGeom = Math.pow(multiplicacion,1 / arrayValores.length);
        return mediaGeom;
    } else {
        console.log("No es posible realizar la media geométrica pues uno de los valores es negativo o cero");
    }
}