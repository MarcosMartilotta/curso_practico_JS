/* Funciones que calculan los perimetros y las áreas */

/* Codigo del cuadrado */
console.group("Cuadrado"); //Esto sirve para agrupar mensajes en la consola, va  a agrupar todo hasta el goroupEnd

function perimetroCuadrado(lado){
    return lado * 4; 
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();


/* Codigo del triangulo */
console.group("Triangulo")

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    return perimetro;
}

function areaTriangulo(base, altura){
    return base * altura / 2;
}

function alturaTriangulo(lado1, lado2, lado3){

        if (lado1 == lado2){
            const altura = Math.sqrt(lado1*lado1 - (lado3*lado3)/4);
            return altura;
        }else if(lado1 == lado3){
            const altura = Math.sqrt(lado1*lado1 - (lado2*lado2)/4);
            return altura;
        }else if(lado2 == lado3){
            const altura = Math.sqrt(lado2*lado2 - (lado1*lado1)/4);
            return altura;
        }else{
            alert("No es isoceles")
        }
}
console.groupEnd();


/* Codigo del circulo */
console.group("Circulos")

//PI
const PI = Math.PI;

function diametroCirculo(radio){
    return radio*2; 
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return PI * (radio * radio);
}

console.groupEnd();

/* Funciones que interactuan con html y utilizan las de mas arriba para hacer los calculos. */

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado"); //Asi obtengo el contenido de lo que escriben los usuarios
    const value = input.value; //Asi obtengo el valor de lo que escriben

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado"); //Asi obtengo el contenido de lo que escriben los usuarios
    const value = input.value; //Asi obtengo el valor de lo que escriben

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    console.log( typeof inputLado1.value);
    const inputLado2 = document.getElementById("inputLado2");
    console.log( typeof inputLado2.value);
    const inputLado3 = document.getElementById("inputLado3");
    console.log( typeof inputLado3.value);

    const perimetro = perimetroTriangulo(parseInt(inputLado1.value),parseInt(inputLado2.value), parseInt(inputLado3.value));

    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    const inputLado3 = document.getElementById("inputLado3");
    const valueLado3 = inputLado3.value;

    const area= areaTriangulo(valueLado1, valueLado2, valueLado3);
    alert(area);
}

function calcularAlturaIsoceles(){
    const inputLado1 = document.getElementById("inputLado1");
    const valueLado1 = inputLado1.value;
    const inputLado2 = document.getElementById("inputLado2");
    const valueLado2 = inputLado2.value;
    const inputLado3 = document.getElementById("inputLado3");
    const valueLado3 = inputLado3.value;

    const altura = alturaTriangulo(valueLado1, valueLado2, valueLado3);
    alert(altura)
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadio");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}


