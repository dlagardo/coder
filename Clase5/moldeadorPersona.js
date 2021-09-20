var personaDatos = {
    nombre:prompt("ingrese su nombre : "),
    edad:parseInt(prompt("Ingrese Edad")),
    peso:prompt("ingrese su Peso: "),
    nacionalidad:prompt("ingrese su Nacionalidad : "),
    
    
    totalSuma:suma(),
    
   };
function suma(){
   
    valor1=parseInt(prompt("Ingrese Valor 1 para Sumar"));
    valor2=parseInt(prompt("Ingrese Valor 2 para Sumar"));
   
    totalSuma=valor1+valor2;
    return totalSuma;

}
   class moldeadorPersona {
       constructor(pnombre,pedad,ppeso,pnacionalidad,ptotalSuma) {
       
       this.nombre=pnombre;
       this.edad=pedad;
       this.peso=ppeso;
       this.nacionalidad=pnacionalidad;
       this.totalSuma=ptotalSuma;
   }
}

    let personaV3= new moldeadorPersona(personaDatos.nombre,personaDatos.edad,personaDatos.peso,personaDatos.nacionalidad,personaDatos.totalSuma);
    alert("Su nombre es : " +personaV3.nombre);
    alert("Su edad es : "   +personaV3.edad);
    alert("Su peso es : "   +personaV3.peso);
   
    alert("La suma es : "   +personaV3.totalSuma);