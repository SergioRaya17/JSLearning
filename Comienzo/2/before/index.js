import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let empleado = {};

empleado.nombre = prompt("Introduce tu nombre: ");
if (!empleado.nombre) {
    console.error("No has introducido un nombre valido");
    process.exit(1);
}

empleado.apellidos = prompt("Introduce tus apellidos: ");
if (!empleado.apellidos) {
    console.error("No has introducido un nombre valido");
    process.exit(1);
}

console.log(`${empleado.nombre} ${empleado.apellidos}`)