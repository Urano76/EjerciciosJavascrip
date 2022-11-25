let nombre = 'armando';
let apellido = 'baquedano';
let contenido = 100;
const cadena = `${nombre} ${contenido} `;

console.log(`${nombre} ${contenido} ${10 + 20 }`); //back stiks
console.log(cadena != nombre);

const objeto = {
    color: 'amarillo',
    peso: 10,
    forma: 'cuadrada',
    vervalores() {
        return (`${this.peso}`)
    }

};

const objeto2 = {
    modelo: 'samsung',
    precio: 4500,
    verdescuento() {
        return (`${this.precio  * 20 / 100} `)
    }
};
console.log(objeto.vervalores());
console.log(objeto2.verdescuento());
let v1 = parseInt(objeto.vervalores());
let v2 = parseInt(objeto2.verdescuento());
console.log(`${v1+v2}`);