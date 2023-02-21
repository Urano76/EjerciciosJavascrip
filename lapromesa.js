console.log('***EJERCICIO DE PROMESA***\n');
const numeros = new Promise((resolve, reject) => {
    let cuatro = 67;
    if (cuatro) {
        resolve(Math.pow(cuatro, 4));
    } else {
        reject('No funciono');
    }
});
numeros.then(inicio => { console.log(inicio) }).catch(final => { console.log(final) })

const trabajo = new Promise((resolve, reject) => {
    let b = 78;
    if (b) {
        resolve(b * 233);
    }
    reject('No sirvio intentalo otra vez');
});
trabajo.then(Operativo => { console.log(Operativo) }).catch(Inactivo => { console.log(Inactivo) })