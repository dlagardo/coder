
let b=0;
let i =1;
let sumatotal=0;

function agregar(){
    var a = document.getElementById('1').innerHTML;
    var a=parseFloat(a);

    b=b+a;
    sumatotal=sumatotal+a;

  document.getElementById("precio-boca").innerHTML+= '<h7>'+" "+'</h7>';
  document.getElementById("precio-boca").innerHTML= '<h7>'+'$'+b+'</h7>';
  document.getElementById("boca").innerHTML= '<h7>Pelota de Boca</h7>';
  document.getElementById("cant-boca").innerHTML= '<h7>'+i+'</h7>';
  document.getElementById("total").innerHTML= '<h7>'+parseInt(sumatotal)+'</h7>';

 i++;


  
};
let c=0;
let d =1;
function agregar2(){
    var a = document.getElementById('2').innerHTML;
    var a=parseFloat(a);
   
   c=c+a; 
   sumatotal=sumatotal+a;
  
//   baseDatos.push(nuevaVenta);
//   console.log(baseDatos);

  document.getElementById("precio-river").innerHTML+= '<h7>'+" "+'</h7>';
  document.getElementById("precio-river").innerHTML= '<h7>'+'$'+c+'</h7>';
  document.getElementById("river").innerHTML= '<h7>Pelota de river</h7>';
  document.getElementById("cant-river").innerHTML= '<h7>'+d+'</h7>';
  document.getElementById("total").innerHTML= '<h7>'+parseInt(sumatotal)+'</h7>';

 d++;
 
}

let x=0;
let e =1;
function agregar3(){
    var a = document.getElementById('3').innerHTML;
    var a=parseFloat(a);
   
   x=x+a;
   sumatotal=sumatotal+a;
//   baseDatos.push(nuevaVenta);
//   console.log(baseDatos);

  document.getElementById("precio-sanlorenzo").innerHTML+= '<h7>'+" "+'</h7>';
  document.getElementById("precio-sanlorenzo").innerHTML= '<h7>'+'$'+x+'</h7>';
  document.getElementById("sanlorenzo").innerHTML= '<h7>Pelota de San Lorenzo</h7>';
  document.getElementById("cant-sanlorenzo").innerHTML= '<h7>'+e+'</h7>';
  document.getElementById("total").innerHTML= '<h7>'+parseInt(sumatotal)+'</h7>';


 e++;

//   document.getElementById("cant-boca").innerHTML+= '<h7>'+baseDatos.length+'</h7>';
};
let z=0;
let f =1;
function agregar4(){
    var a = document.getElementById('4').innerHTML;
    var a=parseFloat(a);
   
   z=z+a;
   sumatotal=sumatotal+a;
//   baseDatos.push(nuevaVenta);
//   console.log(baseDatos);

  document.getElementById("precio-indep").innerHTML+= '<h7>'+" "+'</h7>';
  document.getElementById("precio-indep").innerHTML= '<h7>'+'$'+z+'</h7>';
  document.getElementById("indep").innerHTML= '<h7>Pelota de Independiente</h7>';
  document.getElementById("cant-indep").innerHTML= '<h7>'+f+'</h7>';
  document.getElementById("total").innerHTML= '<h7>'+parseInt(sumatotal)+'</h7>';
 f++;
//   document.getElementById("cant-boca").innerHTML+= '<h7>'+baseDatos.length+'</h7>';
};
btn1.addEventListener('click',agregar);
btn2.addEventListener('click',agregar2);
btn3.addEventListener('click',agregar3);
btn4.addEventListener('click',agregar4);

