class Person{
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
    is_legal_age(){
        return (this.age >= 18) ? true : false;
    }
    fullname(){
        return this.name + " " + this.lastname;
    }
}

let new_name = prompt("Ingrese un nombre");
let new_lastname = prompt("Ingrese un apellido");
let new_age = prompt("Ingrese una edad");

const person1 = new Person(new_name, new_lastname, new_age);

console.log(person1);
console.log(person1.is_legal_age() === true ? "Mayor de edad" : "Menor de edad");
console.log(person1.fullname());
