
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  let arr = array.concat(Object.values(obj));
  let i = 0;

  while (i < arr.length) {
    let j = i + 1;
    while (j < arr.length) {
      let curr = arr[i];
      let next = arr[j];

      if (next < curr) {
        arr[i] = next;
        arr[j] = curr;
      }

      j++;
    }
    i++;
  }

  return arr;
};

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
