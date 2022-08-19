/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 8
// La función countDeep recibe por parámetro un arreglo que contiene numbers, strings, booleanos, undefined y/o arreglos
// (este ultimo contienen, a su vez, más numbers, strings, booleanos, undefined y/o arreglos).
// Deberas contar la cantidad de cada uno y realizar las siguientes operaciones para llegar al resultado final.
// la cantidad de arrays (contando el array padre) menos la cantidad de numbers, al resultado multiplicarlo por la cantidad de strings, al resultado dividirlo por la cantidad de booleanos y a ese resultado elevarlo a la cantidad de undefined.

// Ejemplo:
// countDeep( [ 1, 2, 3, ["hi"], [ undefined, "hola", [ true, "bye" ] ], undefined, [ false ], "9"] ) ----> Debería retornar 2
        // number = 3, string = 4, boolean = 2, undefined = 2, array = 5:
        // la ecuacion quedaria 5-3 = 2, 2*4 = 8, 8/2 = 4, 4^2 ------> resultado = 16


    
function countDeep(arr) {
  // Tu código aca:
  if (array.isArray(arr)){
    arrays++
    for(var i=0; i < arr.length; i++){
      if (typeof arr[i]== "number") number++
      if (typeof arr[i]== "string") string++
      if (typeof arr[i]=== undefined) undefined++
      if (typeof arr[i]=== true || arr[i] === false) boolean++
      if (Array.isArray(arr[i])){
        countDeep(arr[i])
      }
    }
  }
  var resul1 = arrays - number
  var resul2 = resul1 * string
  var resul3 = resul2 / boolean
  var resul4 = Math.pow(resul3, undefined)
  return resul4

} 
// No modifiques nada debajo de esta linea //

module.exports = countDeep