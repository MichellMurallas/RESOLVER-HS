const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  let cambiante= this.head;

  if (cambiante === null) {
    return false;
  }
  while (cambiante) {
    let nextNode = cambiante.next;

    while (nextNode) {
      let curr = cambiante.value;
      let next = nextNode.value;

      if (next > curr) {
        cambiante.value = next;
        nextNode.value = curr;
      }

      nextNode = nextNode.next;
    }
    cambiante = cambiante.next;
  }
};
// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};