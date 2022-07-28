//Parte 1 criação de arrays

//const pets = ["gato", "cão", "ave"];

//const numeros = [88, 90, 21];

//const valoresAlternativos = [12, "olá", true];

//const umIten = [1];

//const semValor = []; //valor [0]

//Parte 2 --

//console.log(pets.length);
//console.log(pets[2]);
//console.log(valoresAlternativos.includes("olá"));
//console.log(valoresAlternativos.includes(12));

// 3 manipular arrays

//const copiaPets = pets;
//console.log(copiaPets, pets);

//copiaPets.push("rato");
//console.log(copiaPets, pets);

//const copiaPets = pets.slice();
//console.log(copiaPets, pets);

//copiaPets.push("rato");
//console.log(copiaPets, pets);

//copiaPets.splice(2, 2);
//(indice, quantidade)
//console.log(copiaPets, pets);

//console.log(pets.sort()); //sort ordena em ordem alfabetica
//console.log(numeros.sort());
//console.log(valoresAlternativos);
//console.log(valoresAlternativos.sort());

//Fixação

let numerosAleatorios = [24, 11, 88, 2, 3, 90, 21];
console.log(numerosAleatorios);
//console.log(numerosAleatorios.sort());
//console.log(numerosAleatorios.reverse())

//numerosAleatorios.splice(21);
//console.log(numerosAleatorios);
//numerosAleatorios.push(6);
//console.log(numerosAleatorios);

//numerosAleatorios.splice(21, 88);
//console.log(numerosAleatorios);

numerosAleatorios.sort();
console.log(numerosAleatorios);

numerosAleatorios.reverse();
console.log(numerosAleatorios);

numerosAleatorios.pop();
console.log(numerosAleatorios);
numerosAleatorios.push(6);
console.log(numerosAleatorios);
numerosAleatorios.splice(2, 1);
console.log(numerosAleatorios);





