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

/* ==========================================================================
   📌 GUÍA RÁPIDA: CREAR EL PROYECTO E INICIALIZAR GIT
   ==========================================================================
   
   1. CREAR EL PROYECTO (Node.js & TypeScript):
      - Iniciar proyecto Node:
        npm init -y
      - Instalar TypeScript y herramientas de ejecución:
        npm install -D typescript ts-node @types/node

   2. INICIALIZAR CONTROL DE VERSIONES CON GIT:
      - Inicializar el repositorio local:
        git init
      - Verificar el estado de los archivos:
        git status

   3. GUARDAR CAMBIOS (STAGING & COMMIT):
      - Añadir todos los archivos modificados al área de preparación:
        git add .
      - Confirmar y guardar los cambios con un mensaje descriptivo:
        git commit -m "feat: setup inicial y variables globales"

   4. EJECUTAR EL CÓDIGO:
      - Con ts-node:
        ts-node -T index.ts
      - O con tsx:
        npx tsx index.ts
   ========================================================================== */



// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
