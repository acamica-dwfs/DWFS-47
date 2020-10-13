class persona {
    constructor(nombre , apellido, edad) {
        this.nombre =  nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    full_name () {
        return this.nombre +  this.apellido;
    }
    es_mayor() {
       return  this.edad >= 18 ? alert("es mayor") : alert("es menor")
    }
}

let yulian =  new persona( "yulian",  "zapata" , 32);






