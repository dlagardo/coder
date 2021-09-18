var personaDatos = {
    nombre:"Juan",
    edad:30,
    peso:"50 kg",
    nacionalidad:"nacionalidad",
   };

   class moldeadorPersona {
       constructor(pnombre,pedad,ppeso,pnacionalidad) {
       
       this.nombre=pnombre;
       this.edad=pedad;
       this.peso=ppeso;
       this.nacionalidad=pnacionalidad;
   }
}

   
   var personaV3= new moldeadorPersona("DARIO",29,"100 kg","Arg");
    alert(personaV3.nombre);
