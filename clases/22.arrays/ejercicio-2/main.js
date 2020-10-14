/**

 Genera un array con al menos 10 datos de diferentes tipos.
 Tu script debe dar los siguientes outputs:

 1. La suma de todos los valores numéricos
 2. Un nuevo array con todos los datos no numéricos


 * @type {(string|number)[]}
 */

let buscador =  ()  => {
    let  datos = new Array("10" , 1 , 6 , "a" , true, "56",  false , "hola", "0" , 100 ,  56);
    let sum =  0;
    let noNumericos = [];
    console.log(datos.length)
    for (let i = 0 ; i < datos.length ; i++ ) {
        if(typeof  datos[i] === "number") {
            sum +=  datos[i];  //  sum =  sum  + datos [i]
        } else   {
            noNumericos.push(datos[i]) // agregamos  un elemento
        }
    }
    // out
    console.log(  "el total de los numeros es " +  sum );
    console.log(  " los elementos no numericos "    );
    console.log(noNumericos)
    // sum -->   el total de los numero es  163
    // noNumericos --> ["10", "a", true , "56", ... ]
}

buscador();
