//String o Cadenas de Texto

const producto = "Monitor de 20 Pulgadas\"";//La que mas se utiliza
// const producto2 = String('Monitor de 30 pulgadas');
// const producto3 = new String('Monitor 50 Pulgadas');
const producto2 = "Monitor HD";
const email = 'correo@correo.com';

console.log(producto.length);//La que mas se utiliza
// console.log(producto2);
// console.log(producto3);
console.log(producto2);

//IndexOf: retorna la posicion del texto que estoy buscando
console.log(producto.indexOf('Pul'));
console.log(producto2.indexOf('TV'));
console.log(email.indexOf('@'));

//Includes: retorna true o false
console.log(producto.includes('Pulgadas'));
console.log(producto2.includes('TV'));