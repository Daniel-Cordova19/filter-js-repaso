// 1. Transformar el string en un array

let words = "La casa es grande y blanca de Baracaobama".split(" ");
console.log(words)

// 2. Aplica un método de array que sea capaz de filtrar todas las palabras que contengan 6 o más carácteres
let filtrarWord = words.filter((x) => x.length >= 6);
console.log(filtrarWord);