const dos = (a, b, c, d) => {
    console.log(Math.pow(a, 3));
    b();
    console.log(Math.sqrt(c * d));
}
dos(32, () => {
    let mercado = [{ fruta: 'manzana', precio: 45 }, { fruta: 'pera', precio: 65 }, { fruta: 'durazno', precio: 35 }, { fruta: 'mamey', precio: 25 }];
    console.table(mercado);
}, 56, 91);