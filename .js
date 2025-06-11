let animales = ["perro", "gato", "conejo", "loro"];
for(let i = 0; i < amimales.lenght; i++) {
    console.log(animales[i]);
}
for (let i = 0; i < animales.length; i++) {
    if (i % 2 === 0) {
        console.log(animales[i]);
    }
}


let numeros = [4, 7, 2, 9, 5];
let sumaTotal = 0;

for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
}

console.log("La suma es " + sumaTotal);

let datos = [3, 6, 1, 8];
let nuevoArreglo = [];

for (let i = 0; i < datos.length; i++) {
    nuevoArreglo.push(datos[i] * 2);
}

console.log(nuevoArreglo);

let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombreBuscado = prompt("Ingresa el nombre que quieres buscar:");

if (alumnos.includes(nombreBuscado)) {
    console.log("El nombre se encontró en el arreglo.");
} else {
    console.log("El nombre no se encuentra en el arreglo.");
}

let valores = [5, 0, 8, 0, 2];

for (let i = 0; i < valores.length; i++) {
    if (valores[i] === 0) {
        valores[i] = 100;
    }
}

console.log(valores); 

let notas = [8, 7, 9, 10, 6];
let suma = 0;


for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}


let promedio = suma / notas.length;

console.log("El promedio es " + promedio); 