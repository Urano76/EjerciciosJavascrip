const num = new Promise((resolve, reject) => {
    let inicio = [
    'Escribe la primera variable',
    'Escribe la segunda variable',
    'El resultado es'];
    let resultado = [];

function operacion(x){
    process.stdout.write(`${inicio[x]}\n`);
    console.log('\n');
    process.stdout.write("  ")
}
process.stdin.on('data',function(data){
    resultado.push(data.toString().trim());
    if(resultado.length < inicio.length){
        operacion(resultado.length);
    }else{
        process.exit();
    }
    });
    process.on('exit',function(){
      process.stdout.write('\n\n\n');
      process.stdout.write('Proceso concluido');
      process.stdout.write('\n\n\n');
    });
    operacion(0);
})
num.then(bueno => console.log(bueno)).catch(malo => console.log(malo))