const alumnos = ['Pedro', 'Luis', 'Alvaro', 'Javier', 'Javier'];
const calificaciones = [8, 9, 10, 7, 8.5];
const final = [alumnos, calificaciones];
/* console.log(alumnos); */
/* console.table(resultado); */
console.table(final);

const resultados = alumnos.map((alumnos) /* , (calificaciones) */ => {
    return `${alumnos} su resultado es ${calificaciones} del curso`;

})
console.table(resultados);

/* Funcion while loop */
/* const alumnos = ['Pedro', 'Octavio', 'Luis', 'Julian', 'Anselmo']; */

for (nombre of alumnos) {
    console.log(`Nombre del alumno ${nombre}`);

}

const cal = [8];
const cal2 = [5.9];

if (cal <= 10) {
    {
        console.log("Aprobo el bimestre");
    } /* else  */
    if (cal2 < 6) {
        console.log("No aprobo el bimestre");
    }
}