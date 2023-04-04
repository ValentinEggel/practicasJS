const a = [32, 13, 94, 51];
let mayor= 0;

a.map((i) => {
    if (i>mayor) {
        mayor=i;
    }
});
console.log("El número mayor del arreglo es: " + mayor);