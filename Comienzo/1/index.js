let firstName = "Sergio";
let lastName = "Raya";

console.log(`Hola ${firstName} ${lastName}`);

let num = 4;
let dateCumple = new Date("May 17, 2004");

console.log(`${dateCumple.getFullYear()}`)
console.log(`${dateCumple.getMonth()}`)

num = 5;
console.log(`${num}`);

Number.isNaN(num); //Devuelve un booleano que indica si el valor es NaN (Not a Number) o no.
//true: Es NaN
//false: No es NaN

if(!Number.isNaN(num)){     
    console.log(`Es un número`);        
} else {                 
    console.log(`No es un número`);             
}