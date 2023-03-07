const clip = new Promise ((resolve,reject) => {
    let bachiller = 'Pedro';
    const result = 7.6;
    if (result >= 10) {
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} es excelente`);
    }else if(result >=9){
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} es muy bueno`);
    } else if (result >=8){
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} es bueno`);
    }else if (result >=7){
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} es regular`);
    } else if(result>=6){
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} es mediocre`);
    }
    else if (result>=5){
        resolve(`Si el estudiante ${bachiller} tiene de promedio ${result} esta fuera del curso`);
    } else{
        reject(`Se termina el ejecicio presente`);
    }
    
});
clip.then(encurso => console.log(encurso)).catch(salida => console.log(salida))