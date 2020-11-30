// Clases en ES6+

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

const p1 = new Persona('Pepe', 23)
const p2 = new Persona('Rosa', 21)
p1.saludar()
p1.altura = 179
console.log(p1)
console.log(p2)

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad)
        this.curso = curso
    }

    saludar() {
        super.saludar()
        console.log(`Estudio ${this.curso}`)
    }
}

const a1 = new Alumno('Juan', 25, 'Angular')
a1.saludar()
console.log(a1)