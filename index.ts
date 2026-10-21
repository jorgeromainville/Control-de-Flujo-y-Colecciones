import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
let systemName: string = "planeador"
let version: number = 2.5
let userName:string = "Roman"

console.log(
    "nombre del sistema: " + systemName +
    " version " + version + 
    ", bienvenido! " + userName
);
//menu interactivo  Implementa un menú interactivo usando rl.question() para leer la entrada del usuario. El menú debe estar envuelto en un ciclo while o do while que lo mantenga visible y activo, mostrando las opciones disponibles en cada iteración. El ciclo solo termina cuando el usuario elige la opción de salir. ar última tarea: elimina el último elemento del arreglo con .pop() e imprime el título eliminado
//Listar tareas: usa un ciclo for para recorrer el arreglo e imprimir cada título con su número de posición
//Salir: termina el ciclo

let menu: string ="1. hamburguesa, 2. hotdog, 3. pizza, 4. refresco, 5. salir";
let answer;

let intentos: number = 1;
while (intentos > 0) {
console.log(`Intentos restantes: ${intentos}`);
console.log(menu);
  do {
    
     answer = await rl.question("¿que va querer hoy? ");
    
} while (answer !== "5");
intentos --;
if (answer == 1){
    console.log("hamburguesa");
}
if (answer == 2){
    console.log("hotdog");
}
if (answer == 3){
    console.log("pizza");
}
if (answer == 4){
    console.log("refresco");
}
if (intentos == 0){
    console.log("adios");
}



// Crear el proyecto e inicializar Git
//>> git init
// guarda los cambios:
//>> git add .
//>> git commit -m "feat: setup inicial y variables globales"

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
}

//ya no pude acabar pipipi, no me dio tiempo hoy disculpe maestro

//recordadtorio de hacer el ultimo GIT git add .
//git commit -m "feat: menú interactivo con ciclo y manejo de arreglo"
