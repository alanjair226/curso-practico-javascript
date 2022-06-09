const ladoCuadrado=5;
console.log("los lados del cuadrado miden: "+ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide. "+perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perimetro del cuadrado mide. "+areaCuadrado);

function calcularCuadrado(){
    const side= document.getElementById("inputSide");
    document.getElementById('resSquarep').innerHTML = "El perimetro del cuadrado es: "+ side.value*4;
    document.getElementById('resSquarea').innerHTML = "El perimetro del area es: "+ side.value*side.value;
}
function calcularTriangulo(){
    const base= document.getElementById("inputBase");
    const height= document.getElementById("inputHeight");
    const side1=document.getElementById("ts1");
    const side2=document.getElementById("ts2");
    const side3=document.getElementById("ts3");
    document.getElementById('resTrianglep').innerHTML = "El perimetro del cuadrado es: "+ (Number(side1.value)+Number(side2.value)+Number(side3.value));
    document.getElementById('resTrianglea').innerHTML = "El area del Teiangulo es: "+ (base.value * height.value)/2;
}
function calcularCirculo(){
    const radio= document.getElementById("inputRadio");
    document.getElementById('resCirclep').innerHTML = "El perimetro del circulo es: "+ ((radio.value*2)*(3.1415));
    document.getElementById('resCirclea').innerHTML = "El area del circulo es: "+ ((radio.value*radio.value)*3.1415);
}
