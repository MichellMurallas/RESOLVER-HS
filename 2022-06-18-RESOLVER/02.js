const { LinkedList } = require('./DS');
// No modifiques nada arriba de esta linea //
  
/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá filtrar 
los elementos repetidos de nuestra lista enlazada y crear una nueva lista con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */
 
LinkedList.prototype.simplifyList = function () { 
  // Tu código aca:
  if(!this.head) return false;
  let newList = new LinkedList();
  let nodes = [];
  let current = this.head;

  while(current){
    nodes.push(current.value);
    current= current.next;
  }
  let newArray= [...new Set(nodes)];
  while(newArray.length >0){
    newList.add(newArray.shift());
  }
  this.head = newList.head;
}
// No modifiques nada debajo de esta linea //
module.exports = {
  LinkedList
};