//Ejercio de for para pares omo impares//
console.log("\n")
console.log("Ejercicio de 'for' para pares como impares\n")
const sol = (b) => {
    for (b = 0; b < 10; b++) {
        if (b % 2 === 0) {
            console.log(b);
        }
    }
}
sol();

console.log("\n");

const primos = (g) => {

    for (g = 2; g < 9; g++) {
        if (g % 2 === 1)
            console.log(g);
    }
}
primos();
// const nube = () => {

// }