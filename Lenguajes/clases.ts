// Clases en ES6+

class Persona {
    
    /* public nombre: string;
    private edad: number;
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    } */
    
    constructor(public nombre: string, public edad: number) {}

    saludar () {
        console.log(`Hola soy ${this.nombre}`);
    }
}

const p1 = new Persona('Pepe', 23)
const p2 = new Persona('Rosa', 21)
p1.saludar()
// p1.altura = 179 daría error en TS
console.log(p1)
console.log(p2)

interface Deportista {
    altura: number
}

class Alumno extends Persona implements Deportista {
    // curso: string;
    altura: number;
    constructor(nombre: string, edad: number, public curso: string = 'Angular') {
        super(nombre, edad)
        // this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Juan', 25)
a1.saludar()
console.log(a1)

let d1: Deportista;
let p3: Persona;

d1 = {altura: 181}
p3 = {nombre: '', edad: 0, saludar: ()=>{} }