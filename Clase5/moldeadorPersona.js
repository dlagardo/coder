var personaDatos = {
    nombre:prompt("ingrese su nombre : "),
    edad:parseInt(prompt("Ingrese Edad")),
    peso:prompt("ingrese su Peso: "),
    nacionalidad:prompt("ingrese su Nacionalidad : "),
   };

   class moldeadorPersona {
       constructor(pnombre,pedad,ppeso,pnacionalidad) {
       
       this.nombre=pnombre;
       this.edad=pedad;
       this.peso=ppeso;
       this.nacionalidad=pnacionalidad;
   }
}

  
    var personaV3= new moldeadorPersona(personaDatos.nombre,personaDatos.edad,personaDatos.peso,personaDatos.nacionalidad);
    alert(personaV3.nombre);
    alert(personaV3.edad);
    alert(personaV3.peso);

