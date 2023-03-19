let preguntas = ['Nombre del alumno', 'Grado de estudios', 'Promedio escolar'];

let respuesta = [];
let res = '';

function pregunta(i) {
    process.stdout.write(`\n\n${preguntas[i]}`);
    process.stdin.res;
    
}
process.stdin.on('data', function(data) {
    respuesta.push(data.toString().trim());

    if (respuesta.length < preguntas.length) {
        pregunta(respuesta.length);
    } else {
        process.exit();
    }
});

pregunta(0);
console.log(`\n${res}`);