const ladoCuadrado=5;
console.log("los lados del cuadrado miden: "+ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide. "+perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perimetro del cuadrado mide. "+areaCuadrado);

function calcularAreaCuadrado(){
    const side= document.getElementById("inputSide");
    console.log(side.value * 4);
}
