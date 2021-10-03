class Persona{
constructor(nombre){
 this.nombre=nombre;
}
}
const personas=[];
const persona1=new Persona('dario');
// personas.push(persona1);
// const nombre=document.createElement('h6');
// nombre.innerText=personas.nombre;


var text = document.createTextNode('Bienvenido : '+prompt("Ingrese su nombre"));   
document.getElementById("bienvenido").appendChild(text); 
//document.getElementById("bienvenido").innerHTML = `Gracias por su visita ${personas[0].nombre} `;

// const nombre=document.createElement('h6');
// nombre.innerText=personas.nombre;
// contenedor.appendChild(nombre);
// const estilo=document.createElement('p');
// estilo.innerText=`Gracias por su visita ${personas[0].nombre} `;
// contenedor.appendChild(estilo);
// document.body.appendChild(contenedor);
