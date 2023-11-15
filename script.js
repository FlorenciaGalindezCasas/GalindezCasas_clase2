/* Ejercicio 1 */

function suma(a,b,callback){
    let c = a + b
    callback(c)
}

function promedio(resSuma){
    const prom = resSuma/2
    document.getElementById("resultado").innerHTML = "El promedio entre los dos números es: " + prom
}

suma(12, 4, promedio) 

/* Ejercicio 2 */

const input1 = document.getElementById("primerValor")
const input2 = document.getElementById("segundoValor")
const btnSuma = document.getElementById("suma")
const btnResta = document.getElementById("resta")
const btnMult = document.getElementById("multiplicacion");
const btnDiv = document.getElementById("division");

function obtenerValores(){
    const valor1 = parseInt(input1.value)
    const valor2 = parseInt(input2.value)
    return{valor1, valor2}
}

btnSuma.addEventListener("click",function(){
    const {valor1, valor2} = obtenerValores()
    const suma = valor1 + valor2
    document.getElementById("operacion").innerHTML = "+";
    document.getElementById("res").innerHTML = suma
})

btnResta.addEventListener("click", function() {
  const { valor1, valor2 } = obtenerValores();
  const resta = valor1 - valor2;
  document.getElementById("operacion").innerHTML = "-";
  document.getElementById("res").innerHTML = resta
})

btnMult.addEventListener("click",function() {
    const { valor1, valor2 } = obtenerValores();
    const multiplicacion = valor1 * valor2;
    document.getElementById("operacion").innerHTML = "x";
    document.getElementById("res").innerHTML = multiplicacion
})

btnDiv.addEventListener("click", function() {
    const { valor1, valor2 } = obtenerValores();
    if(valor2 != 0){
       const division = valor1 / valor2;
       document.getElementById("operacion").innerHTML = "/";
       document.getElementById("res").innerHTML = division 
    } else{
        document.getElementById("operacion").innerHTML = "/";
        document.getElementById("res").innerHTML = "El segundo valor ingresado es cero"
    }  
})

