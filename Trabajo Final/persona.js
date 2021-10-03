class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const personas = [];
const persona1 = new Persona(prompt("Ingrese su nombre"));
personas.push(persona1.nombre)

let text = document.createTextNode('Bienvenido : ' + persona1.nombre);
document.getElementById("bienvenido").appendChild(text);
