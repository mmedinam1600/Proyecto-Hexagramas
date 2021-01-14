let tabla;
let celda = [];
let lista = [];
const lhexa=[];
const lhexa2= [];
var uno;
var dos;

var yinM;
var yang;
var yin;
var yanM;

function iniciar(){
 tabla = document.getElementById("hexg"); //obtenemos el elemento tbody
 /* Creamos las 3 columnas de los hexagramas */
 lista[0] = document.createElement("td");
 lista[1] = document.createElement("td");
 lista[2] = document.createElement("td");

 /* Agregamos la clase Hexa-td */
 lista[0].classList.add("Hexa-td");
 lista[1].classList.add("Hexa-td");
 lista[2].classList.add("Hexa-td");
}

 function agregarLinea(){
  /* Obtenemos los valores ingresados en el input */
  var num1 = document.getElementById("valor1").value;
  var num2 = document.getElementById("valor2").value;
  var num3 = document.getElementById("valor3").value;
  /* Parseamos el string a int */
   num1 = parseInt(num1, 10);
   num2 = parseInt(num2, 10);
   num3 = parseInt(num3, 10);

  var sumaValores = num1 + num2 + num3; //variable que guarda el valor de la suma de los 3 numeros
 /* Funciones que se encargan de devolver la imagen correspondiente a la línea */
  var valor= GenerarLinea(sumaValores); //Generamos el hexagrama original
  var valor2= ConvertirLineaMutante(sumaValores); //Generamos la primer conversión
  var valor3= ConvertirLineaMutante2(sumaValores); //Generamos la segunda conversión
   /* Creamos las lineas lineas */
  crearLinea(valor, "linea", 0);
   crearLinea(valor2, "lineaC", 1);
   crearLinea(valor3, "lineaC", 2);
}

function crearLinea(valor, nombreClase, columna){
//Tabla 1
  celda[columna] = document.createElement("tr");
  celda[columna].appendChild(valor);
  celda[columna].classList.add(nombreClase);
  if (lista[columna].hasChildNodes()){
    lista[columna].insertBefore(celda[columna], lista[columna].childNodes[columna]);
  }
  else{
    lista[columna].appendChild(celda[columna]);
  }
  tabla.appendChild(lista[columna]);
}

function borrarHexagrama(){
  while(lista[0].hasChildNodes() && lista[1].hasChildNodes() && lista[2].hasChildNodes()){
    lista[0].removeChild(lista[0].lastChild);
    lista[1].removeChild(lista[1].lastChild);
    lista[2].removeChild(lista[2].lastChild);
    lhexa.pop();
    lhexa2.pop();
    console.log(lhexa);
  }
   document.getElementById("descr").innerHTML="Descripción hexagrama";
  var tagHexagrama1 = document.getElementById("nombreHexagrama1");
  tagHexagrama1.innerHTML = "";
  var tagHexagrama2 = document.getElementById("nombreHexagrama2");
  tagHexagrama2.innerHTML = "";
  if(uno && dos){
    uno.removeAttribute("style");
    dos.removeAttribute("style");
    uno.onmouseover = null;
    dos.onmouseover = null;
  }
}

function borrarLinea(){
  if(lista[0].hasChildNodes() && lista[1].hasChildNodes() && lista[2].hasChildNodes())
  	 lista[0].removeChild(lista[0].childNodes[0]);
     lista[1].removeChild(lista[1].childNodes[0]);
     lista[2].removeChild(lista[2].childNodes[0]);
     lhexa.pop();
     lhexa2.pop();
     console.log(lhexa);
     document.getElementById("descr").innerHTML="Descripción hexagrama";
    var tagHexagrama1 = document.getElementById("nombreHexagrama1");
    tagHexagrama1.innerHTML = "";
  var tagHexagrama2 = document.getElementById("nombreHexagrama2");
  tagHexagrama2.innerHTML = "";
  if(uno && dos){
    uno.removeAttribute("style");
    dos.removeAttribute("style");
    uno.onmouseover = null;
    dos.onmouseover = null;
  }
}

function verificaVal(){ //funcion que verifica los valores
// Hace la validacion antes de crear una nueva linea y tambien limita el numero de lineas que se pueden agregar (MAX de lineas es 6)
  var valor1 = document.getElementById("valor1").value;
  var valor2 = document.getElementById("valor2").value;
  var valor3 = document.getElementById("valor3").value;
  var lineas = document.getElementsByClassName("linea");
  var nlineas =lineas.length;
  if(!valor1 || !valor2 || !valor3){ //Si le falto ingresar un valor en el input
    return alert("Te falto llenar algunos valores");
  }
  if(valor1 === "2" || valor1 === "3"){
  } else{
    return alert("Solo se permiten valores 2 o 3");
  }
  if(valor2 === "2" || valor2 === "3"){
  } else{
    return alert("Solo se permiten valores 2 o 3");
  }
  if(valor3 === "2" || valor3 === "3"){
  } else{
    return alert("Solo se permiten valores 2 o 3");
  }
  if(nlineas > 5){
    return alert("Se ingreso el numero máximo de líneas, primero borra antes de agregar.");
  }
  agregarLinea();

  //Condicion para que se muestre el nombre y el numero del hexagrama
  if(nlineas == 5){
    obtenerDescripcion();
  }
}

function GenerarLinea(sumaValores){//funcion que retornara la linea correspondiente dependiendo el resultado de la suma
  switch(sumaValores){
    case 6:
      yinM = new Image();
      yinM.src="images/Yin mutante.png";
      return yinM;
    case 7:
      yang = new Image();
      yang.src="images/Yang.png";
      return yang;
    case 8:
      yin=new Image();
      yin.src="images/Yin.png";
      return yin;
    case 9:
      yanM=new Image();
      yanM.src="images/Yang mutante.png";
      return yanM;
    default: return alert("Error al devolver la imagen.");
  }
}

function ConvertirLineaMutante(sumaValores){ //Tabla 2
  yin = new Image();
  yang = new Image();
  switch (sumaValores){
    case 6:
      yin.src="images/Yin.png";
      lhexa2.push(2);
      return yin;
    case 7:
      yang.src="images/Yang.png";
      lhexa2.push(1);
      return yang;
    case 8:
      yin.src="images/Yin.png";
      lhexa2.push(2);
      return yin;
    case 9:
      yang.src="images/Yang.png";
      lhexa2.push(1);
      return yang;
    default: return alert("Error al devolver la imagen.");
  }
}

function ConvertirLineaMutante2(sumaValores){ // Tabla 3
  yang = new Image();
  yin=new Image();
  switch (sumaValores){
    case 6:
      yang.src="images/Yang.png";
      lhexa.push(1);
      return yang;
    case 7:
      yang.src="images/Yang.png";
      lhexa.push(1);
      return yang;
    case 8:
      yin.src="images/Yin.png";
      lhexa.push(2);
      return yin;
    case 9:
      yin.src="images/Yin.png";
      lhexa.push(2);
      return yin;
    default: return alert("Error al devolver la imagen.");
  }
}

let verificarNumero = (text) => {
    text.classList.remove("inputCard__content__button--valid");
    text.classList.remove("inputCard__content__button--invalid");
    if(text.value == 2 || text.value == 3){
        text.classList.add("inputCard__content__button--valid");
        console.log("Válido");
    } else{
        text.classList.add("inputCard__content__button--invalid");
        console.log("Inválido");
    }
}

//Aqui se van comparando el arreglo guardado con cada una de las posblies opciones de hexagrama
function obtenerDescripcion(){
  //1 es yang ____________
  //2 es yin  ____   _____
  const hexagramas = [
    [1,1,1,1,1,1],
    [2,2,2,2,2,2],
    [1,2,2,2,1,2],
    [2,1,2,2,2,1],
    [1,1,1,2,1,2],

    [1,1,1,2,1,2],
    [2,1,2,2,2,2],
    [2,2,2,2,1,2],
    [1,1,1,2,1,1],
    [1,1,2,1,1,1],

    [1,1,1,2,2,2],
    [2,2,2,1,1,1],
    [1,2,1,1,1,1],
    [1,1,1,1,2,1],
    [2,2,1,2,2,2],

    [2,2,2,1,2,2],
    [1,2,2,1,1,2],
    [2,1,1,2,2,1],
    [1,1,2,2,2,1],
    [2,2,2,2,1,1], //20

    [1,2,2,1,2,1],
    [1,2,1,2,2,1],
    [2,2,2,2,2,1],
    [1,2,2,2,2,2],
    [1,2,2,1,1,1],

    [1,1,1,2,2,1],
    [1,2,2,2,2,1],
    [2,1,1,1,1,2],
    [2,1,2,2,1,2],
    [1,2,1,1,2,1],

    [2,2,1,1,1,2],
    [2,1,1,1,2,2],
    [2,2,1,1,1,1],
    [1,1,1,1,2,2],
    [2,2,2,1,2,1],

    [1,2,1,2,2,2],
    [1,2,1,2,1,1],
    [1,1,2,1,2,1],
    [2,2,1,2,1,2],
    [2,1,2,1,2,2], //40

    [1,1,2,2,2,1],
    [1,2,2,2,1,1],
    [1,1,1,1,1,2],
    [2,1,1,1,1,1],
    [2,2,2,1,1,2],

    [2,1,1,2,2,2],
    [2,1,2,1,1,2],
    [2,1,1,2,1,2],
    [1,2,1,1,1,2],
    [2,1,1,1,2,1],

    [1,2,2,1,2,2],
    [2,2,1,2,2,1],
    [2,2,1,2,1,1],
    [1,1,2,1,2,2],
    [1,2,1,1,2,2],

    [2,2,1,1,2,1],
    [2,1,1,2,1,1],
    [1,1,2,1,1,2],
    [2,1,2,2,1,1],
    [1,1,2,2,1,2], //60

    [1,1,2,2,1,1],
    [2,2,1,1,2,2],
    [1,2,1,2,1,2],
    [2,1,2,1,2,1]
  ];
  let contador = 1;
  for(let i = 0;i<hexagramas.length;i++){
    if(lhexa.equals(hexagramas[i])){
      //alert(obtenerMensaje(i+1).nombreHexagrama);

      var tagHexagrama2 = document.getElementById("nombreHexagrama2");
      tagHexagrama2.innerText = obtenerMensaje(i+1).nombreHexagrama;

      uno = document.getElementById( (1+i).toString());
      uno.style.color="#f34";
      uno.style.fontSize="30px";
      uno.onmouseover=function(e){
        document.getElementById("descr").innerHTML=obtenerMensaje(i+1).mensaje;
        //uno.removeAttribute("style");
      };
    }
    if(lhexa2.equals(hexagramas[i])){
      dos = document.getElementById( (1+i).toString());
      dos.style.color="#f34";
      dos.style.fontSize="30px";
      dos.onmouseover=function(e){
        document.getElementById("descr").innerHTML=obtenerMensaje(i+1).mensaje;
        //dos.removeAttribute("style");
      };

      var tagHexagrama1 = document.getElementById("nombreHexagrama1");
      tagHexagrama1.innerText = obtenerMensaje(i+1).nombreHexagrama;
    }
    contador++;
  }
}

function obtenerMensaje(numero){
  switch (numero) {
    case 1: return { nombreHexagrama: "1. Ch'ien", mensaje: "1.  Cielo. Lo creativo. El principio generador."}
    case 2: return { nombreHexagrama: "2. K'un", mensaje: "2.  Tierra. Lo receptivo. El principio pasivo."}
    case 3: return { nombreHexagrama: "3. Chun", mensaje: "3.  Acumular. El obstáculo inicial. La dificultad del comienzo."}
    case 4: return { nombreHexagrama: "4. Meng", mensaje: "4. Juventud. El joven necio. La inmadurez."}
    case 5: return { nombreHexagrama: "5. Hsü", mensaje: "5.  Esperar. La espera. La maduración."}
    case 6: return { nombreHexagrama: "6. Sung", mensaje: "6.  Disputar. El conflicto. El pleito"}
    case 7: return { nombreHexagrama: "7. Shih", mensaje: "7.  Ejército. La legión."}
    case 8: return { nombreHexagrama: "8. Pi", mensaje: "8.  Solidaridad. La unión."}
    case 9: return { nombreHexagrama: "9. Hsiao Ch'u", mensaje: "9.  Animalito doméstico. La pequeña fuerza."}
    case 10: return { nombreHexagrama: "10. Lü", mensaje: "10.  Caminar. El porte. El paso cauteloso."}
    case 11: return { nombreHexagrama: "11. Tai", mensaje: "11.  Prosperidad. La paz. La armonía."}
    case 12: return { nombreHexagrama: "12. P'i", mensaje: "12.  Cierre. El estancamiento. Lo inerte."}
    case 13: return { nombreHexagrama: "13. Tung jen", mensaje: "13. Hombres Reunidos. La unión comunitaria."}
    case 14: return { nombreHexagrama: "14. Ta Yu", mensaje: "14. Gran dominio. La gran posesión. Lo que se tiene de más."}
    case 15: return { nombreHexagrama: "15. Ch'ien", mensaje: "15. Condescendencia. La modestia. La humildad."}
    case 16: return { nombreHexagrama: "16. Yü", mensaje: "16. Ocuparse. El entusiasmo. La algarabía."}
    case 17: return { nombreHexagrama: "17. Sui", mensaje: "17. Conformarse. La continuidad. El seguimiento."}
    case 18: return { nombreHexagrama: "18. Ku", mensaje: "18. Destrucción. La reconstrucción. La labor en lo corrompido."}
    case 19: return { nombreHexagrama: "19. Lin", mensaje: "19. Acercarse. Lo que va llegando."}
    case 20: return { nombreHexagrama: "20. Kuan", mensaje: "20. Observar. La contemplación."}
    case 21: return { nombreHexagrama: "21. Shin Ho", mensaje: "21. Quebrar mordiendo. La dentellada. La filosa mordedura."}
    case 22: return { nombreHexagrama: "22. Pi", mensaje: "22. Adornar. La elegancia. La gracia."}
    case 23: return { nombreHexagrama: "23. Po", mensaje: "23. Resquebrajar. La desintegración. El derrumbe."}
    case 24: return { nombreHexagrama: "24. Fu", mensaje: "24. Regresar. El retorno. Lo que vuelve."}
    case 25: return { nombreHexagrama: "25. Wu Wang", mensaje: "25. Sinceridad. La inocencia. La naturalidad."}
    case 26: return { nombreHexagrama: "26. Ta Ch'u", mensaje: "26. Fuerza educadora. El poder de lo fuerte. La gran acumulación."}
    case 27: return { nombreHexagrama: "27. I", mensaje: "27. Nutrirse. La alimentación. Las fauces."}
    case 28: return { nombreHexagrama: "28. Ta Kuo", mensaje: "28. Excesos. La preponderancia de lo grande."}
    case 29: return { nombreHexagrama: "29. Kan", mensaje: "29. Peligro. Lo abismal. La caida."}
    case 30: return { nombreHexagrama: "30. Li", mensaje: "30. Distinguir. El resplandor. Lo adherente."}
    case 31: return { nombreHexagrama: "31. Hsien", mensaje: "31. Unir. La influencia.La atracción."}
    case 32: return { nombreHexagrama: "32. Heng", mensaje: "32. Luna Creciente. La duración. La permanencia."}
    case 33: return { nombreHexagrama: "33. Tun", mensaje: "33. Retirarse. EL repliegue."}
    case 34: return { nombreHexagrama: "34. Ta Chuang", mensaje: "34. Gran fuerza. El gran vigor."}
    case 35: return { nombreHexagrama: "35. Chin", mensaje: "35. Progresar. El avance."}
    case 36: return { nombreHexagrama: "36. Ming I", mensaje: "36. Luz que se apaga. El oscurecimiento."}
    case 37: return { nombreHexagrama: "37. Chia Jen", mensaje: "37. Gente de familia. El clan."}
    case 38: return { nombreHexagrama: "38. K'uei", mensaje: "38. Contraste. La oposición. El antagonismo."}
    case 39: return { nombreHexagrama: "39. Chien", mensaje: "39. Dificultad. El obstáculo. El impedimento."}
    case 40: return { nombreHexagrama: "40. Hsieh", mensaje: "40. Explicar. La liberación. El alivio."}
    case 41: return { nombreHexagrama: "41. Sun", mensaje: "41. Perder. La disminución."}
    case 42: return { nombreHexagrama: "42. I", mensaje: "42. Evolución. El aumento. La ganancia."}
    case 43: return { nombreHexagrama: "43. Kuai", mensaje: "43. Decidir. El desbordamiento. La resolución."}
    case 44: return { nombreHexagrama: "44. Kou", mensaje: "44. Encontrarse. El acoplamiento."}
    case 45: return { nombreHexagrama: "45. Ts'ui", mensaje: "45. Cosechar. La reunión. La convergencia."}
    case 46: return { nombreHexagrama: "46. Sheng", mensaje: "46. Subir. El ascenso. La escalada."}
    case 47: return { nombreHexagrama: "47. K'un", mensaje: "47. Angustia. La pesadumbre. El agotamiento."}
    case 48: return { nombreHexagrama: "48. Ching", mensaje: "48. El pozo de agua. La fuente."}
    case 49: return { nombreHexagrama: "49. Ko", mensaje: "49. Renovar. La revolución. El cambio."}
    case 50: return { nombreHexagrama: "50. Ting", mensaje: "50. La caldera. Lo alquímico."}
    case 51: return { nombreHexagrama: "51. Chen", mensaje: "51. Trueno. La conmoción. Lo suscitativo."}
    case 52: return { nombreHexagrama: "52. Ken", mensaje: "52. Cimientos. La quietud. La detención."}
    case 53: return { nombreHexagrama: "53. Chien", mensaje: "53. Evolución. El progreso gradual."}
    case 54: return { nombreHexagrama: "54. Kuei Mei", mensaje: "54. Desposar a la hija menor. La doncella."}
    case 55: return { nombreHexagrama: "55. Feng", mensaje: "55. Abundancia. La plenitud."}
    case 56: return { nombreHexagrama: "56. Lü", mensaje: "56. Viajero. El andariego."}
    case 57: return { nombreHexagrama: "57. Sun", mensaje: "57. Viento. Lo penetrante. Lo suave."}
    case 58: return { nombreHexagrama: "58. Tui", mensaje: "58. Recogerse. La serenidad. La satisfacción."}
    case 59: return { nombreHexagrama: "59. Huan", mensaje: "59. Confusión. La dispersión. La disolución."}
    case 60: return { nombreHexagrama: "60. Chieh", mensaje: "60. Moderación. La restricción. La limitación."}
    case 61: return { nombreHexagrama: "61. Chung Fu", mensaje: "61. Fe Interior. La verdad interior. La sinceridad interna."}
    case 62: return { nombreHexagrama: "62. Hsiao Kuo", mensaje: "62. Pequeñas cosas importantes. La pequeña preponderancia."}
    case 63: return { nombreHexagrama: "63. Chi Chi", mensaje: "63. Conclusiones. Después de la realización."}
    case 64: return { nombreHexagrama: "64. Wei Chi", mensaje: "64. Inconcluso. Antes de la realización."}
  }
}

  Array.prototype.equals = function (getArray) {
  if (this.length != getArray.length) return false;

  for (var i = 0; i < getArray.length; i++) {
    if (this[i] instanceof Array && getArray[i] instanceof Array) {
      if (!this[i].equals(getArray[i])) return false;
    } else if (this[i] != getArray[i]) {
      return false;
    }
  }
  return true;
};
