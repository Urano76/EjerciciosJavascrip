function palabra (a = ''){
    if (typeof a !='string')
    return`Ingresa palabra o frase`;
    if(a === '') 
    return`No has ingresado nada`;
    return a.length;
}
console.log(palabra('alto'));