let uno = (saludo) => {
    console.log('Hola como estas ' + saludo);
}
uno('Jaime');

let e = 'Manuel';
let s = 9.6;

const tres = (e, s) => {
    return 'Este alumno ' + e + ' ' + 'tuvo el mejor promedio de ' + s;
}

console.log(tres(e, s));

let nuevo = (numero) => {
    for (let numero = 0; numero < 110; numero++)

        if (numero % 2 == 1) {
            console.log(numero);
        }

}

nuevo();
let a = 45;
let c = 76;

const b = (c, a) => {
    return c * a;
}
console.log('La operacion aritmetica su resultado es ' + b(c, a));

exports.nuevo = nuevo;