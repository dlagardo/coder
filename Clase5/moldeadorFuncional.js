let personaDatos = {
    nombre:"Juan",
    edad:30,
    peso:"50 kg",
    nacionalidad:"nacionalidad",
   };

   function moldeadorFuncional(pnombre,pedad,ppeso,pnacionalidad){
    this.nombre=pnombre;
    this.edad=pedad;
    this.peso=ppeso;
    this.nacionalidad=pnacionalidad;

   };

   let personaV2= new moldeadorFuncional("juan",30,"50 kg","Arg");
   alert(personaV2.edad);