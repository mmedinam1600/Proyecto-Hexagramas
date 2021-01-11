var tabla,lista,celda;
const lhexa=[];


function iniciar(){
 tabla=document.getElementById("hexg");
 lista=document.createElement("td");//se crea
 lista2=document.createElement("td");
 lista3=document.createElement("td");
 lista.classList.add("Hexa-td");
 lista2.classList.add("Hexa-td");
 lista3.classList.add("Hexa-td");
}

 function agregarLinea(){   
  var num1=document.getElementById("valor1").value;
  var num2=document.getElementById("valor2").value;
  var num3=document.getElementById("valor3").value;
  var n1=parseInt(num1,10);//conviersion de string a int 
  var n2=parseInt(num2,10);
  var n3=parseInt(num3,10);
  var valLin=n1+n2+n3; //variable que guarda el valor de la suma de los 3 numeros
  var valor= ConvLineas(valLin);
  var valor2= ConvLineas2(valLin);
  var valor3= ConvLineas3(valLin);

  //Tabla 1
  celda=document.createElement("tr");
  celda.appendChild(valor);
  celda.classList.add("linea");
  if (lista.hasChildNodes()){
     lista.insertBefore(celda,lista.childNodes[0]); 
  } 
  else{
     lista.appendChild(celda);      
  }
  tabla.appendChild(lista);

  //Tabla 2
  celda2=document.createElement("tr");
  celda2.appendChild(valor2);
  celda2.classList.add("lineaC");
  if (lista2.hasChildNodes()){
     lista2.insertBefore(celda2,lista2.childNodes[0]); 
  } 
  else{
     lista2.appendChild(celda2);     
  }
  tabla.appendChild(lista2);

  //Tabla 3
  celda3=document.createElement("tr");
  celda3.appendChild(valor3);
  celda3.classList.add("lineaC");
  if (lista3.hasChildNodes()){
     lista3.insertBefore(celda3,lista3.childNodes[0]); 
  } 
  else{
     lista3.appendChild(celda3);     
  }
  tabla.appendChild(lista3);

}

function borrarHexagrama(){
  while(lista.hasChildNodes() && lista2.hasChildNodes() && lista3.hasChildNodes()){
    lista.removeChild(lista.lastChild);
    lista2.removeChild(lista2.lastChild);
    lista3.removeChild(lista3.lastChild);
    lhexa.pop();
    console.log(lhexa);
  }
}

		
function borrarLinea(){
  if(lista.hasChildNodes() && lista2.hasChildNodes() && lista3.hasChildNodes())
  	 lista.removeChild(lista.childNodes[0]);
     lista2.removeChild(lista2.childNodes[0]);
     lista3.removeChild(lista3.childNodes[0]);
     lhexa.pop();
     console.log(lhexa);
}


function verificaVal(){//funcion que verifica los valores
// Hace la validacion antes de crear una nueva linea y tambien limita el numero de lineas que se pueden agregar (MAX de lineas es 6)
  var x=document.getElementById("valor1").value;
  var y=document.getElementById("valor2").value;
  var z=document.getElementById("valor3").value;
  var ok1=false;//Bandera
  var ok2=false;//Bandera
  var ok3=false;//Bandera
  var oklineas=true;//Bandera
  var hexaCompleto=false;//Bandera
  var lineas = document.getElementsByClassName("linea");
  var nlineas =lineas.length;
  if(nlineas > 5){
    oklineas=false;
  }
  if(nlineas==5){
    hexaCompleto=true;
  }
  if(x==2 || x==3 ){
  	ok1=true;
  }

  if(y==2 || y==3 ){
  	ok2=true && ok1; //Utilizo operadores booleanos
  }

  if(z==2 || z==3 ){
  	ok3=true && ok2; //Utilizo operadores booleanos
  }
  //Condiciones para mostrar los mensajes segun el caso que no cumpla
  if(ok3){
    if(oklineas){
        agregarLinea();
    }else{
        alert("Solo se permiten 6 lineas en total");
    }
  }else{
      alert("Solo se permiten valores 2 o 3");
  }

  //Condicion para que se muestre el nombre y el numero del hexagrama
  if(hexaCompleto){
    mostrarNomyNumHexa();
  }
}

function ConvLineas(x){//funcion que retornara la linea correspondiente dependiendo el resultado de la suma
    var yinM=new Image();
    yinM.src="images/Yin mutante.png";

    var yang=new Image();
    yang.src="images/Yang.png";

    var yin=new Image();
    yin.src="images/Yin.png";

    var yanM=new Image();
    yanM.src="images/Yang mutante.png";

    if(x==6){
        return yinM;
    }

    if(x==7){
        return yang;
    }

    if(x==8){
        return yin;
    }

    if(x==9){
        return yanM;
    }
}

function ConvLineas2(x){ //Tabla 2
    var yang=new Image();
    yang.src="images/Yang.png";

    var yin=new Image();
    yin.src="images/Yin.png";

    if(x == 6){
        return yin;
    }
    if(x == 9){
        return yang;
    }
    if(x == 7){
        return yang;
    }
    if(x == 8){
        return yin;
    }
}

function ConvLineas3(x){ // Tabla 3
    var yang=new Image();
    yang.src="images/Yang.png";

    var yin=new Image();
    yin.src="images/Yin.png";

    if(x == 6){
        lhexa.push(1);
        return yang;
    }
    if(x == 9){
        lhexa.push(2);
        return yin;
    }
    if(x == 7){
        lhexa.push(1);
        return yang;
    }
    if(x == 8){
        lhexa.push(2);
        return yin;
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
function mostrarNomyNumHexa(){

  //1 es yang ____________
  //2 es yin  ____   _____

    const hexa1 = [1,1,1,1,1,1];  const hexa16 = [2,2,2,1,2,2];  const hexa31 = [2,2,1,1,1,2];  const hexa46 = [2,1,1,2,2,2];  const hexa61 = [1,1,2,2,1,1];
    const hexa2 = [2,2,2,2,2,2];  const hexa17 = [1,2,2,1,1,2];  const hexa32 = [2,1,1,1,2,2];  const hexa47 = [2,1,2,1,1,2];  const hexa62 = [2,2,1,1,2,2];
    const hexa3 = [1,2,2,2,1,2];  const hexa18 = [2,1,1,2,2,1];  const hexa33 = [2,2,1,1,1,1];  const hexa48 = [2,1,1,2,1,2];  const hexa63 = [1,2,1,2,1,2];
    const hexa4 = [2,1,2,2,2,1];  const hexa19 = [1,1,2,2,2,1];  const hexa34 = [1,1,1,1,2,2];  const hexa49 = [1,2,1,1,1,2];  const hexa64 = [2,1,2,1,2,1];
    const hexa5 = [1,1,1,2,1,2];  const hexa20 = [2,2,2,2,1,1];  const hexa35 = [2,2,2,1,2,1];  const hexa50 = [2,1,1,1,2,1];
    const hexa6 = [2,1,2,1,1,1];  const hexa21 = [1,2,2,1,2,1];  const hexa36 = [1,2,1,2,2,2];  const hexa51 = [1,2,2,1,2,2];
    const hexa7 = [2,1,2,2,2,2];  const hexa22 = [1,2,1,2,2,1];  const hexa37 = [1,2,1,2,1,1];  const hexa52 = [2,2,1,2,2,1];
    const hexa8 = [2,2,2,2,1,2];  const hexa23 = [2,2,2,2,2,1];  const hexa38 = [1,1,2,1,2,1];  const hexa53 = [2,2,1,2,1,1];
    const hexa9 = [1,1,1,2,1,1];  const hexa24 = [1,2,2,2,2,2];  const hexa39 = [2,2,1,2,1,2];  const hexa54 = [1,1,2,1,2,2];
    const hexa10= [1,1,2,1,1,1];  const hexa25 = [1,2,2,1,1,1];  const hexa40 = [2,1,2,1,2,2];  const hexa55 = [1,2,1,1,2,2];
    const hexa11= [1,1,1,2,2,2];  const hexa26 = [1,1,1,2,2,1];  const hexa41 = [1,1,2,2,2,1];  const hexa56 = [2,2,1,1,2,1];
    const hexa12= [2,2,2,1,1,1];  const hexa27 = [1,2,2,2,2,1];  const hexa42 = [1,2,2,2,1,1];  const hexa57 = [2,1,1,2,1,1];
    const hexa13= [1,2,1,1,1,1];  const hexa28 = [2,1,1,1,1,2];  const hexa43 = [1,1,1,1,1,2];  const hexa58 = [1,1,2,1,1,2];
    const hexa14= [1,1,1,1,2,1];  const hexa29 = [2,1,2,2,1,2];  const hexa44 = [2,1,1,1,1,1];  const hexa59 = [2,1,2,2,1,1];
    const hexa15= [2,2,1,2,2,2];  const hexa30 = [1,2,1,1,2,1];  const hexa45 = [2,2,2,1,1,2];  const hexa60 = [1,1,2,2,1,2];
    
    //celdaN.appendChild();
    if(lhexa.equals(hexa1)){alert("1. Ch'ien");}      if(lhexa.equals(hexa16)){alert("16. Yü");}       if(lhexa.equals(hexa31)){alert("31. Hsien");}      if(lhexa.equals(hexa46)){alert("46. Sheng");}  if(lhexa.equals(hexa61)){alert("61. Chung Fu");}
    if(lhexa.equals(hexa2)){alert("2. K'un");}        if(lhexa.equals(hexa17)){alert("17. Sui");}      if(lhexa.equals(hexa32)){alert("32. Heng");}       if(lhexa.equals(hexa47)){alert("47. K'un");}   if(lhexa.equals(hexa62)){alert("62. Hsiao Kuo");}
    if(lhexa.equals(hexa3)){alert("3. Chun");}        if(lhexa.equals(hexa18)){alert("18. Ku");}       if(lhexa.equals(hexa33)){alert("33. Tun");}        if(lhexa.equals(hexa48)){alert("48. Ching");}  if(lhexa.equals(hexa63)){alert("63. Chi Chi");}
    if(lhexa.equals(hexa4)){alert("4. Meng");}        if(lhexa.equals(hexa19)){alert("19. Lin");}      if(lhexa.equals(hexa34)){alert("34. Ta Chuang");}  if(lhexa.equals(hexa49)){alert("49. Ko");}     if(lhexa.equals(hexa64)){alert("64. Wei Chi");}
    if(lhexa.equals(hexa5)){alert("5. Hsü");}         if(lhexa.equals(hexa20)){alert("20. Kuan");}     if(lhexa.equals(hexa35)){alert("35. Chin");}       if(lhexa.equals(hexa50)){alert("50. Ting");}
    if(lhexa.equals(hexa6)){alert("6. Sung");}        if(lhexa.equals(hexa21)){alert("21. Shin Ho");}  if(lhexa.equals(hexa36)){alert("36. Ming I");}     if(lhexa.equals(hexa51)){alert("51. Chen");}
    if(lhexa.equals(hexa7)){alert("7. Shih");}        if(lhexa.equals(hexa22)){alert("22. Pi");}       if(lhexa.equals(hexa37)){alert("37. Chia Jen");}   if(lhexa.equals(hexa52)){alert("52. Ken");}
    if(lhexa.equals(hexa8)){alert("8. Pi");}          if(lhexa.equals(hexa23)){alert("23. Po");}       if(lhexa.equals(hexa38)){alert("38. K'uei");}      if(lhexa.equals(hexa53)){alert("53. Chien");}
    if(lhexa.equals(hexa9)){alert("9. Hsiao Ch'u");}  if(lhexa.equals(hexa24)){alert("24. Fu");}       if(lhexa.equals(hexa39)){alert("39. Chien");}      if(lhexa.equals(hexa54)){alert("54. Kuei Mei");}
    if(lhexa.equals(hexa10)){alert("10. Lü");}        if(lhexa.equals(hexa25)){alert("25. Wu Wang");}  if(lhexa.equals(hexa40)){alert("40. Hsieh");}      if(lhexa.equals(hexa55)){alert("55. Feng");}
    if(lhexa.equals(hexa11)){alert("11. Tai");}       if(lhexa.equals(hexa26)){alert("26. Ta Ch'u");}  if(lhexa.equals(hexa41)){alert("41. Sun");}        if(lhexa.equals(hexa56)){alert("56. Lü");}
    if(lhexa.equals(hexa12)){alert("12. P'i");}       if(lhexa.equals(hexa27)){alert("27. I");}        if(lhexa.equals(hexa42)){alert("42. I");}          if(lhexa.equals(hexa57)){alert("57. Sun");}
    if(lhexa.equals(hexa13)){alert("13. Tung jen");}  if(lhexa.equals(hexa28)){alert("28. Ta Kuo");}   if(lhexa.equals(hexa43)){alert("43. Kuai");}       if(lhexa.equals(hexa58)){alert("58. Tui");}
    if(lhexa.equals(hexa14)){alert("14. Ta Yu");}     if(lhexa.equals(hexa29)){alert("29. Kan");}      if(lhexa.equals(hexa44)){alert("44. Kou");}        if(lhexa.equals(hexa59)){alert("59. Huan");}
    if(lhexa.equals(hexa15)){alert("15. Ch'ien");}    if(lhexa.equals(hexa30)){alert("30. Li");}       if(lhexa.equals(hexa45)){alert("45. Ts'ui");}      if(lhexa.equals(hexa60)){alert("60. Chieh");}

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


