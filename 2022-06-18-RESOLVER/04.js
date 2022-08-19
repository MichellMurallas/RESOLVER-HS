const { Stack } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// Implementar la función crearStack, la cual recibirá por parámetro un string.
// El string recibido tendrá un formato de sucesión de letras y astericos, de la siguiente manera:
// "UN*A*PAL*AB*RA"
// "OTR*A**PAL**ABR*A"
// crearStack debe retornar false en caso de recibir un string vacío.
// Caso contrario, deberá crear un Stack, al que se agregarán y retirarán valores EN ORDEN según la secuencia recibida
// en el string, siguiendo la siguiente lógica:
//  - Una letra (A , B , C) -> Agregar la letra al Stack
//  - Un asterisco (*) -> Retirar un elemento del Stack
// Finalmente, la función deberá retornar el Stack resultante.
// Asimismo, debo prevenir que la función intente retirar un elemento del Stack si el mismo está vacío, en cuyo caso
// la función deberá retornar el string "Stack vacío"
//
// EJEMPLOS:
//   ✔️crearStack("EJ*EMP*LO") => [E,E,M,L,O]
//   ✔️crearStack("OTR**OEJEM***PL*O") => [O,O,E,P,O]
//   ✔️crearStack("") => false
//   ✔️crearStack("RET****ORNA**R*FA*L**SO") => "Stack vacío"

function crearStack(palabra) {
  if(!palabra) return false;
  let newStack = new Stack();
  let stackArray = palabra.split("");
  for(let i=0; i< stackArray.length; i++){
    if(stackArray[i] !== "*") newStack.array.push(stackArray[i]);
    else{
      if(newStack.array.length >0){
        newStack.array.pop()
      }else{
        return "Stack vacío";
      }
    }
  }
  return newStack;
}



  // if(palabra.length === 0){
  //       return false
  //   }

  //  for(let i = 0; i < palabra.length; i++){{
  //    if(typeof palabra[i] === "string"){
  //      stack.push(palabra[i])
  //   } 
  //     if(palabra[i] === "RET****ORNA**R*FA*L**SO"){
  //       stack.pop()
  //     if(stack.length === 0) return "Stack vacío"
  //    }
  // }
   
  // }
  // return stack;

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { crearStack };
