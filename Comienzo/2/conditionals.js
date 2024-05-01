let empleado = {
    nombre: "Sergio",
    apellido: {
        primero: "Raya",
        segundo: "Robles"
    },
    fechaComienzo: new Date(2013, 4, 3),
    departamento: "Informática"
};

switch (empleado.departamento) {
    case 'Informática':
        console.log(`Empleado: ${empleado.nombre} ${empleado.apellido.primero} ${empleado.apellido.segundo} trabaja en el departamento de ${empleado.departamento}`)
        break;
    case 'Limpiador':
        console.log(`Empleado: ${empleado.nombre} ${empleado.apellido.primero} ${empleado.apellido.segundo} trabaja en el departamento de ${empleado.departamento}`)
        break;

    default:
        break;
}
