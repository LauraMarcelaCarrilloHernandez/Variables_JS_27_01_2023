// Ejecutando una suma
// let num1 = 50;
// let num2 = 50;
// console.log(num1+num2);

let cargo = "Diseñadora";
let anios = 23;
let junior = true;
let softwaresUtilizados = {
    "edicionFotos": "Photoshop",
    "crearVectores": "Illustrator",
    "crearPrototipos": "Adobe XD",
  };
let softwares = JSON.stringify(softwaresUtilizados);

  console.log( `Laura es ${cargo}, ella tiene ${anios} años. 
  ¿Su experiencia es Junior? ${junior}. De igual manera, ella maneja softwares como ${softwares}`)
  //console.log(softwaresUtilizados.clubs);  escribir .clubs a la variable si es string o objeto
  //alert(JSON.stringify(softwaresUtilizados, null, 4));
  
 //let softwares = JSON.parse(softwaresUtilizados);
