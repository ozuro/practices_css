const arreglo = [10, 3, 15, 11];
let num = 0;
for (var i = 0; i < arreglo.length; i++) {
  if (num < arreglo[i]) num = arreglo[i];
}
console.log(Math.max(...arreglo));



// console.log("este es el mayor: " + num);

// arreglo.forEach((num) => {
//   if (num < arreglo.length) num = arreglo[num];
// });
// console.log("segundo metodo este el mayor:" + num);
