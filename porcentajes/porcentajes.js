var listaCupones = ["cuponOne", "cuponTwo", "cuponThree"];

//Funciones de descuento y cupones
function discountCupons(precio, cupon){
    var precioFinal;
    switch (cupon){
        case listaCupones[0]:
            precioFinal = calculaDescuento(precio, 20);
            return precioFinal;
        case listaCupones[1]:
            precioFinal = calculaDescuento(precio, 40);
            return precioFinal;
        case listaCupones[2]:
            precioFinal = calculaDescuento(precio, 60);
            return precioFinal;
        default:
            return false;
    }
    
}
    
function calculaDescuento (precio, descuento) {
    const precioConDescuento = precio*(1 - descuento/100);
    return precioConDescuento;
}

//Interaccion con el dom

function buttonDiscount(){
    const precio = document.getElementById("precioSinDescuento");
    const precioValue = parseFloat(precio.value);
    console.log(precioValue);
    const cupon = document.getElementById("cuponDescuento");
    const cuponValue = cupon.value;
    console.log(cuponValue);

    const precioConDescuento = discountCupons(precioValue, cuponValue);
    
    const finalPriceP = document.getElementById("finalPrice");
    if (precioConDescuento){
        finalPriceP.innerText = "El precio final con descuento es $" + precioConDescuento;
    }else{
        finalPriceP.innerText = "El cupon ingresado no es válido";
    }
}

