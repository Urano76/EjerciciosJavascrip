// function palabra (a = ''){
//     if (typeof a !='string')
//     return`Ingresa palabra o frase`;
//     if(a === '') 
//     return`No has ingresado nada`;
//     return a.length;
// }
// console.log(palabra('alto'));
const lista = new Promise ((resolve,reject) =>{
    function palabra (a = ''){
            if (typeof a !='string'){
              resolve(`Ingresa una palabra o frase`);  
            }
            else if(a === '') {
            reject(`No ha ingresado nada`);    
            }
            return a.length;
        }
        console.log(palabra('Bienvenidos a Javascrip'));
    
})
lista.then(funciona => console.log(funciona)).catch(Sinfuncionar => console.log(Sinfuncionar))