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
)



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();