let obj1 = {
    nombre: "Sergio",
    apellidos: "Raya Robles",
    fechNaci: new Date(2004, 4, 17, 2, 30, 0)
};

let jsonValue = JSON.stringify(obj1, null, 2);
console.log(jsonValue);

let newObj = JSON.parse(jsonValue);
console.log(newObj);