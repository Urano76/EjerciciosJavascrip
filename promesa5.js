const list = new Promise((resolve, reject) => {
    let trabajador = ['Pedro', 'Luis', 'Juan', 'Arturo'];
    const empleado = 'Juan';
    if (empleado >= 'Pedro') {
        resolve(`Si el colaborador es ${empleado}, entoces le corresponde a 0`);
    } else if (empleado >= 'Luis') {
        resolve(`Si el lugar es ${empleado}, entoces le corresponde a 1`);
    } else if (empleado >= 'Juan') {
        resolve(`Si el lugar es ${empleado}, entoces le corresponde a 2`);
    } else if (empleado >= 'Arturo') {
        resolve(`Si el lugar es ${empleado}, entoces le corresponde a 3`)
    } else {
        reject(`Si no esta en lista`)
    }
});
list.then(seccion => console.log(seccion)).catch(fuera => console.log(fuera))