const list = new Promise ((resolve,reject) => {
    let trabajador = ['Pedro','Luis','Juan','Arturo'];
     const posicion = 2;
     if(posicion <= 0){
         resolve(`Si el lugar es ${posicion}, entoces le corresponde a Pedro`);
     } else if(posicion <= 1){
         resolve(`Si el lugar es ${posicion}, entoces le corresponde a Luis`);
     } else if (posicion <= 2){
         resolve(`Si el lugar es ${posicion}, entoces le corresponde a Juan`);
     }
     else if (posicion <= 3){
         resolve(`Si el lugar es ${posicion}, entoces le corresponde a Arturo`)
     }
      else{
          reject(`Si no hay ninguna posición se acabo`)
      }
  });
  list.then(seccion => console.log(seccion)).catch(fuera => console.log(fuera))