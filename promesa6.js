// const letras = new Promise((resolve, reject) => {

//     const a = 0;
//     if (a <= 1) {
//         resolve(`Si ${a} es de uno`);
//     } else if (a <= 2) {
//         resolve(`Si ${a} es de dos`);

//     } else if (a <= 3) {
//         resolve(`Si ${a} es de tres`);
//     } else {
//         reject(`No hay`)
//     }
// });
// letras.then(funciona => console.log(funciona)).catch(inoperante => console.log(inoperante))
function palabra(texto = '') {
    if (typeof texto !== 'string') return `Ha ingresado una palabra`;
    if (texto === '') return 'No ha ingresado ninguna palabra';
    return texto.length;
}
console.log(palabra('chinga tu madre'));

// const contar = new Promise ((resolve, reject) => {
//     const letras ='mexico';
//     if(typeof letras !== 'string'){
//         resolve(`Se ha puesto la palabra ${letras} para contar`);
//     }
//     else if(letras === ''){
//     reject(`No se ha puesto  ninguna palabra`);

//     }
// });
// contar.then(escrito => console.log(escrito)).catch(noescrito => console.log(noescrito));