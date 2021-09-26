
let personaVenta = {
    // nombre:prompt("ingrese su nombre : "),
    // edad:parseInt(prompt("Ingrese Edad")),
    // peso:prompt("ingrese su Peso: "),
    // nacionalidad:prompt("ingrese su Nacionalidad : "),
    precio: 8,

};


var baseDatos = [];

function nuevaVenta(pprecio) {
    this.precio = pprecio;
};

let opcion = 0;
opcion = parseInt(prompt("Ingrese 0 si desea cargar precio : "));
while (opcion === 0) {
    let n = parseInt(prompt("ingrese precio :"));
    prod = new nuevaVenta(n);
    baseDatos.push(prod);
    opcion = parseInt(prompt("Ingrese 0 si desea cargar precio : "));

}


console.log(baseDatos)
console.log(prod)
let i = 0;


let x = 0;
let c = 0;
let aux = 0;
let men = baseDatos[0].precio;
let numeros = [];
// for (i = 0; i < baseDatos.length; i++) {
//     numeros.push(baseDatos[i].precio);
// }
for (i = 0; i < baseDatos.length; i++) {
    numeros.push(baseDatos[i].precio);
    aux=aux+baseDatos[i].precio;


}
aux=descuento(aux);

function descuento(aux){
if(aux>1000){
aux=aux-100;
}
return aux;
}
console.log(numeros);
console.log("Precio total de ceompre es : "+aux);




console.log();

numeros.sort((a, b) => b - a);
console.log(numeros);

console.log();

numeros.sort((a, b) => a - b);
console.log(numeros);









// var baseDatos=[];
// function agregar(){

//   baseDatos.push(nuevaVenta);
//   console.log(baseDatos);

// //   document.getElementById("precio-boca").innerHTML+= '<h7>'+" "+'</h7>';
// //   document.getElementById("precio-boca").innerHTML+= '<h7>'+preciof+'</h7>';
// //   document.getElementById("boca").innerHTML+= '<h7>Pelota de Boca</h7>';
// //   document.getElementById("cant-boca").innerHTML+= '<h7>'+baseDatos.length+'</h7>';
// };