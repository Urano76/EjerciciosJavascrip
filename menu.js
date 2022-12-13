let preguntas = [
    '¿Cual es tu nombre?',
    'Cuantos años tienes?',
    '¿donde estudiaste?',
];

let respuestas = [];

function pregunta(a) {
    process.stdout.write(preguntas[a]);
}

process.stdin.on('data', function(data) {
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        pregunta(respuestas.length);
    } else {
        process.exit();
    }

});

pregunta(0);