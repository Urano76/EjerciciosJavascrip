let preguntas = ['Cual es tu nombre', 'Donde estudias', 'Nivel de estudios'];
let respuestas = [];

function interrogacion(i) {
    process.stdout.write(`\n${preguntas[i]}`);
    console.log('\n');
    process.stdout.write("   ");
}
process.stdin.on('data', function(data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n');
    respuestas.push(data.toString().trim());
    if (respuestas.length < preguntas.length) {
        interrogacion(respuestas.length);
    } else {
        process.exit();
    }
});
process.on('exit', function() {
    process.stdout.write('\n\n\n');
    process.stdout.write(`Vete a descansar`);
    process.stdout.write('\n\n\n');
})
interrogacion(0);
// process.stdout.write("Hola putitos\n");
// console.log('\n');
// process.stdout.write('Me la pelas\n');