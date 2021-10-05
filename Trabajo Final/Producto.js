
let suma_Prod = 0;
let cant_prod = 1;
let sumatotal = 0;

function agregar() {
  let a = document.getElementById('1').innerHTML;
  a = parseFloat(a);

  suma_Prod = suma_Prod + a;//suma las veces que se selecciona el producto
  sumatotal = sumatotal + a;//variable Global para sumar los distintos

  document.getElementById("precio-boca").innerHTML += '<h7>' + " " + '</h7>';
  document.getElementById("precio-boca").innerHTML = '<h7>' + '$' + suma_Prod + '</h7>';
  document.getElementById("boca").innerHTML = '<h7>Pelota de Boca</h7>';
  document.getElementById("cant-boca").innerHTML = '<h7>' + cant_prod+ '</h7>';
  document.getElementById("total").innerHTML = '<h7>' + parseInt(sumatotal) + '</h7>';

  cant_prod++;//variable para sumar cantidad de productos agregados al carro
};
let suma_Prod2 = 0;
let cant_prod2= 1;
function agregar2() {
  let a = document.getElementById('2').innerHTML;
  a = parseFloat(a);

  suma_Prod2 = suma_Prod2 + a;//suma las veces que se selecciona el producto
  sumatotal = sumatotal + a;//variable Global para sumar los distintos

  document.getElementById("precio-river").innerHTML += '<h7>' + " " + '</h7>';
  document.getElementById("precio-river").innerHTML = '<h7>' + '$' + suma_Prod2 + '</h7>';
  document.getElementById("river").innerHTML = '<h7>Pelota de river</h7>';
  document.getElementById("cant-river").innerHTML = '<h7>' + cant_prod2 + '</h7>';
  document.getElementById("total").innerHTML = '<h7>' + parseInt(sumatotal) + '</h7>';

  cant_prod2++;//variable para sumar cantidad de productos agregados al carro

}
let suma_Prod3 = 0;
let cant_prod3= 1;
function agregar3() {
  let a = document.getElementById('3').innerHTML;
  a = parseFloat(a);

  suma_Prod3 = suma_Prod3 + a;//suma las veces que se selecciona el producto
  sumatotal = sumatotal + a;//variable Global para sumar los distintos
 
  document.getElementById("precio-sanlorenzo").innerHTML += '<h7>' + " " + '</h7>';
  document.getElementById("precio-sanlorenzo").innerHTML = '<h7>' + '$' + suma_Prod3 + '</h7>';
  document.getElementById("sanlorenzo").innerHTML = '<h7>Pelota de San Lorenzo</h7>';
  document.getElementById("cant-sanlorenzo").innerHTML = '<h7>' + cant_prod3+ '</h7>';
  document.getElementById("total").innerHTML = '<h7>' + parseInt(sumatotal) + '</h7>';

  cant_prod3++;//variable para sumar cantidad de productos agregados al carro
};
let suma_Prod4 = 0;
let cant_prod4= 1;


function agregar4() {
  let a = document.getElementById('4').innerHTML;
  a = parseFloat(a);

  suma_Prod4 = suma_Prod4+ a;//suma las veces que se selecciona el producto
  sumatotal = sumatotal + a;//variable Global para sumar los distintos

  document.getElementById("precio-indep").innerHTML += '<h7>' + " " + '</h7>';
  document.getElementById("precio-indep").innerHTML = '<h7>' + '$' + suma_Prod4 + '</h7>';
  document.getElementById("indep").innerHTML = '<h7>Pelota de Independiente</h7>';
  document.getElementById("cant-indep").innerHTML = '<h7>' + cant_prod4 + '</h7>';
  document.getElementById("total").innerHTML = '<h7>' + parseInt(sumatotal) + '</h7>';
  cant_prod4++;//variable para sumar cantidad de productos agregados al carro

};

btn1.addEventListener('click', agregar);
btn2.addEventListener('click', agregar2);
btn3.addEventListener('click', agregar3);
btn4.addEventListener('click', agregar4);

const arrayProductos = [
  {nombre: "Remera", precio: 1000},
  {nombre: "Remera", precio: 2000},
  { nombre: "Pantalon", precio: 1500},
  { nombre: "Pantalon", precio: 1700},
  

  
]

const contenedorProductos = document.getElementById('productos')

arrayProductos.forEach((producto) => {
  const div = document.createElement('div')

  div.style = "width: 18rem "

  
  div.innerHTML = `
                  
                  <div class="card-body">
                      <h5 class="card-title grande">${producto.nombre}</h5>
                      <p class="card-text rojo">Precio: $${producto.precio}</p>
                     
                  </div>
              `
  
  contenedorProductos.appendChild(div)
})
