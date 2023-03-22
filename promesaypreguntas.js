const pregunta = new Promise((resolve, reject) => {
    let interrogacion = [
        'Como te llamas',
        'Donde estudias',
        'Cuantos años tienes',
        'Que nivel de estudios tienes'];
        
        let contestar = [];
        
        function preguntar(b){
        
        process.stdout.write(`${interrogacion[b]}\n`);
        console.log('\n');
        process.stdout.write("  "); 
        
        }
        
        
        process.stdin.on('data', function(data) {
        
        contestar.push(data.toString().trim());
        if(contestar.length < interrogacion.length) {
        preguntar(contestar.length);
        }
        else {
        process.exit();
        }
        
        });
        
        process.on('exit',function() {
        process.stdout.write('\n\n\n');
        process.stdout.write('Ha concluido el ejercicio');
        process.stdout.write('\n\n\n');
        });
        
        preguntar(0);

});
pregunta.then(responde => console.log(responde)).catch(sinrespuesta => console.log(sinrespuesta))