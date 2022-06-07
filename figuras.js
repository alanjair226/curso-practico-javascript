const ladoCuadrado=5;
console.log("los lados del cuadrado miden: "+ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide. "+perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perimetro del cuadrado mide. "+areaCuadrado);

function calcularCuadrado(){
    const side= document.getElementById("inputSide");
    console.log(side.value * 4);
}
function calcularTriangulo(){
    const side= document.getElementById("inputSide");
    console.log(side.value * 4);
}
function calcularCirculo(){
    const side= document.getElementById("inputSide");
    console.log(side.value * 4);
}
