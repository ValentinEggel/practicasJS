//Obtener la suma de los elementos de un array.
const a=[2,3,5];
acum=0;

a.map ((i) => {
  acum=acum+ i;
});
console.log("La suma de los valores del arreglo es: " + acum);
