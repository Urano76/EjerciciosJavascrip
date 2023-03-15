let preguntar = ['nombre:', 'mi edad es:', 'sueldo:']

console.log(preguntar[0]);
process.stdout.write("cual es tu edad: ");
process.stdin.on('data',(data)=>{
    let edad = data;
    process.stdout.write(`tu edad es : ${edad}`);
    process.exit();

});