//Mostrar número mayor de un arreglo
const a = [32, 13, 94, 52];
let mayor= 0;

a.map((i) => {
    if (i>mayor) {
        mayor=i;
    }
});
console.log("El número mayor del arreglo es: " + mayor);

//Sumar solo números pares de un arreglo
const a = [2, 3, 4, 5];
let suma=0;
a.filter((item) => item %2===0).map((item) => {
    suma=suma+item; 
});
console.log("La suma de solo los números pares es " + suma);
        
//Filtrar un arreglo y sumar 15<= y <=20
const a = [10,8,9,15,21,18,19];
let suma=0
a.filter((item) => (item <=15 && item <=20)).map((item) => {
    suma=suma+item;
});
console.log("La suma de solo los números seleccionados es " + suma);