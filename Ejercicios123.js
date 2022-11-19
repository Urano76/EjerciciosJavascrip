/*Ejercicio Bidimencional*/

let result = [{ alumno: 'Pedro', calificacion: 8 }, { alumno: 'Luis', calificacion: 9 }, { alumno: 'Pablo', calificacion: 7 }, { alumno: 'Sergio', calificacion: 10 }, { alumno: 'Antonio', calificacion: 8.5 }];
console.table(result);


/*Ejercicio con while*/

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
let a = 0;
let semana = " ";
while (a < dias.length) {

    semana = dias;
    a++;
}
console.table(semana);

/*Ejercicio de numero pares */

let numpar = (index) => {
    for (let index = 0; index < 20; index++) {
        if (index % 2 === 0) {
            console.log(index);
        }
    }
}
numpar();