/*Crear un objeto*/
let current_year = 2020;

let car = {
    type:"Fiat",
    model:"Freemont",
    year: 2011,
    color:"gray",
    driving_years: function() {
        return current_year - this.year;
    }
};
console.log(car);
console.log("Resultado del método driving_years: " + car.driving_years());

/*Agregar una nueva propiedad*/
car.fuel = 'Diesel';
console.log(car);
/*Llamar una propiedad*/
console.log("Propiedad fuel: " + car.fuel);

/*Agregar un nuevo método*/
car.sale_title = function() {
    return `${this.type} ${this.model} - ${this.year}`;
};
console.log(car);

/*Llamar a un método*/
console.log("Resultado del método sale_title: " + car.sale_title());


/*Para crear múltiples objetos similares*/
/*función constructora*/
function User(username, name, lastname, email, password) {
    /*uso de this*/
    this.username = username;
    this.name = name;
    this.email = email;
    this.lastname = lastname;
    this.password = password;
    this.is_admin = false;
}
/*operador new*/
let usuario1 = new User ('OwenGib','Owen', 'Giblett', 'ogiblett8@nhs.uk', 'NotSafepass123' );
console.log(usuario1);

/*clases*/
class Clothes {
    /*función constructora*/
    constructor(productName, type, size, color, price, quantity) {
        this.productName = productName;
        this.type = type;
        this.size = size;
        this.color = color;
        this.price = price;
        this.quantity = quantity;
    }
    getSaleInfo(){
        return `${this.productName.toUpperCase()} - ${this.type} ${this.color} ${this.size} \nPrecio: $${this.price}`;
    }
}

let clothes1 = new Clothes('remera ivy park', 'Remera', 'L', 'Blanca', 1299, 23);
console.log(clothes1);
console.log(clothes1.getSaleInfo());
