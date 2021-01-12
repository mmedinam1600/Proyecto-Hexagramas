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
   document.getElementById("descr").innerHTML="Descripción hexagrama";
}

		
function borrarLinea(){
  if(lista.hasChildNodes() && lista2.hasChildNodes() && lista3.hasChildNodes())
  	 lista.removeChild(lista.childNodes[0]);
     lista2.removeChild(lista2.childNodes[0]);
     lista3.removeChild(lista3.childNodes[0]);
     lhexa.pop();
     console.log(lhexa);
     document.getElementById("descr").innerHTML="Descripción hexagrama";
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
    if(lhexa.equals(hexa1)){alert("1. Ch'ien");
       var uno=document.getElementById("1");
       uno.style.color="#f34";
       uno.style.fontSize="30px";
       uno.onmouseover=function(e){
       document.getElementById("descr").innerHTML="1.  Cielo. Lo creativo. El principio generador";
       uno.removeAttribute("style");};
     }  
                                                                      
    if(lhexa.equals(hexa2)){alert("2. K'un");
     var dos=document.getElementById("2");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="2.  Tierra. Lo receptivo. El principio pasivo";
     dos.removeAttribute("style");};

    }

    if(lhexa.equals(hexa3)){alert("3. Chun");
    var tres=document.getElementById("3");
     tres.style.color="#f34";
     tres.style.fontSize="30px";
     tres.onmouseover=function(e){
     document.getElementById("descr").innerHTML="3.  Acumular. El obstáculo inicial. La dificultad del comienzo";
     tres.removeAttribute("style");};
    }

    if(lhexa.equals(hexa4)){alert("4. Meng");
     var cua=document.getElementById("4");
     cua.style.color="#f34";
     cua.style.fontSize="30px";
     cua.onmouseover=function(e){
     document.getElementById("descr").innerHTML="4. Juventud. El joven necio. La inmadurez.";
     cua.removeAttribute("style");};
    }

    if(lhexa.equals(hexa5)){alert("5. Hsü");
     var cinco=document.getElementById("5");
     cinco.style.color="#f34";
     cinco.style.fontSize="30px";
     cinco.onmouseover=function(e){
     document.getElementById("descr").innerHTML="5.  Esperar. La espera. La maduración.";
     cinco.removeAttribute("style");};
    }

    if(lhexa.equals(hexa6)){alert("6. Sung");
     var seis=document.getElementById("6");
     seis.style.color="#f34";
     seis.style.fontSize="30px";
     seis.onmouseover=function(e){
     document.getElementById("descr").innerHTML="6.  Disputar. El conflicto. El pleito";
     seis.removeAttribute("style");}; 
    }

    if(lhexa.equals(hexa7)){alert("7. Shih");
     var siete=document.getElementById("7");
     siete.style.color="#f34";
     siete.style.fontSize="30px";
     siete.onmouseover=function(e){
     document.getElementById("descr").innerHTML="7.  Ejército. La legión.";
     siete.removeAttribute("style");};  
    } 

    if(lhexa.equals(hexa8)){alert("8. Pi");
     var ocho=document.getElementById("8");
     ocho.style.color="#f34";
     ocho.style.fontSize="30px";
     ocho.onmouseover=function(e){
     document.getElementById("descr").innerHTML="8.  Solidaridad. La unión";
     ocho.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa9)){alert("9. Hsiao Ch'u");
     var nueve=document.getElementById("9");
     nueve.style.color="#f34";
     nueve.style.fontSize="30px";
     nueve.onmouseover=function(e){
     document.getElementById("descr").innerHTML="9.  Animalito doméstico. La pequeña fuerza";
     nueve.removeAttribute("style");};
    }

    if(lhexa.equals(hexa10)){alert("10. Lü");
     var diez=document.getElementById("10");
     diez.style.color="#f34";
     diez.style.fontSize="30px";
     diez.onmouseover=function(e){
     document.getElementById("descr").innerHTML="10.  Caminar. El porte. El paso cauteloso";
     diez.removeAttribute("style");};
    }

    if(lhexa.equals(hexa11)){alert("11. Tai");
     var once=document.getElementById("11");
     once.style.color="#f34";
     once.style.fontSize="30px";
     once.onmouseover=function(e){
     document.getElementById("descr").innerHTML="11.  Prosperidad. La paz. La armonía";
     once.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa12)){alert("12. P'i");
     var doce=document.getElementById("12");
     doce.style.color="#f34";
     doce.style.fontSize="30px";
     doce.onmouseover=function(e){
     document.getElementById("descr").innerHTML="12.  Cierre. El estancamiento. Lo inerte";
     doce.removeAttribute("style");}; 
    } 

    if(lhexa.equals(hexa13)){alert("13. Tung jen");
     var trece=document.getElementById("13");
     trece.style.color="#f34";
     trece.style.fontSize="30px";
     trece.onmouseover=function(e){
     document.getElementById("descr").innerHTML="13. Hombres Reunidos. La unión comunitaria";
     trece.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa14)){alert("14. Ta Yu");
     var catorce=document.getElementById("14");
     catorce.style.color="#f34";
     catorce.style.fontSize="30px";
     catorce.onmouseover=function(e){
     document.getElementById("descr").innerHTML="14. Gran dominio. La gran posesión. Lo que se tiene de más.";
     catorce.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa15)){alert("15. Ch'ien");
     var quince=document.getElementById("15");
     quince.style.color="#f34";
     quince.style.fontSize="30px";
     quince.onmouseover=function(e){
     document.getElementById("descr").innerHTML="15. Condescendencia. La modestia. La humildad ";
     quince.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa16)){alert("16. Yü");
     var dieciseis=document.getElementById("16");
     dieciseis.style.color="#f34";
     dieciseis.style.fontSize="30px";
     dieciseis.onmouseover=function(e){
     document.getElementById("descr").innerHTML="16. Ocuparse. El entusiasmo. La algarabía.";
     dieciseis.removeAttribute("style");};
    }

    if(lhexa.equals(hexa17)){alert("17. Sui");
     var diecisiete=document.getElementById("17");
     diecisiete.style.color="#f34";
     diecisiete.style.fontSize="30px";
     diecisiete.onmouseover=function(e){
     document.getElementById("descr").innerHTML="17. Conformarse. La continuidad. El seguimiento. ";
     diecisiete.removeAttribute("style");};
    }

    if(lhexa.equals(hexa18)){alert("18. Ku");
     var dieciocho=document.getElementById("18");
     dieciocho.style.color="#f34";
     dieciocho.style.fontSize="30px";
     dieciocho.onmouseover=function(e){
     document.getElementById("descr").innerHTML="18. Destrucción. La reconstrucción. La labor en lo corrompido.";
     dieciocho.removeAttribute("style");};
    }

    if(lhexa.equals(hexa19)){alert("19. Lin");
     var diecinueve=document.getElementById("19");
     diecinueve.style.color="#f34";
     diecinueve.style.fontSize="30px";
     diecinueve.onmouseover=function(e){
     document.getElementById("descr").innerHTML="19. Acercarse. Lo que va llegando.";
     diecinueve.removeAttribute("style");};
    }

    if(lhexa.equals(hexa20)){alert("20. Kuan");
     var veinte=document.getElementById("20");
     veinte.style.color="#f34";
     veinte.style.fontSize="30px";
     veinte.onmouseover=function(e){
     document.getElementById("descr").innerHTML="20. Observar. La contemplación";
     veinte.removeAttribute("style");};
    }

    if(lhexa.equals(hexa21)){alert("21. Shin Ho");
     var veinteuno=document.getElementById("21");
     veinteuno.style.color="#f34";
     veinteuno.style.fontSize="30px";
     veinteuno.onmouseover=function(e){
     document.getElementById("descr").innerHTML="21. Quebrar mordiendo. La dentellada. La filosa mordedura";
     veinteuno.removeAttribute("style");};
    }

    if(lhexa.equals(hexa22)){alert("22. Pi");
     var veintedos=document.getElementById("22");
     veintedos.style.color="#f34";
     veintedos.style.fontSize="30px";
     veintedos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="22. Adornar. La elegancia. La gracia.";
     veintedos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa23)){alert("23. Po");
     var veintetres=document.getElementById("23");
     veintetres.style.color="#f34";
     veintetres.style.fontSize="30px";
     veintetres.onmouseover=function(e){
     document.getElementById("descr").innerHTML="23. Resquebrajar. La desintegración. El derrumbe";
     veintetres.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa24)){alert("24. Fu");
     var veintecuatro=document.getElementById("24");
     veintecuatro.style.color="#f34";
     veintecuatro.style.fontSize="30px";
     veintecuatro.onmouseover=function(e){
     document.getElementById("descr").innerHTML="24. Regresar. El retorno. Lo que vuelve.";
     veintecuatro.removeAttribute("style");};
    }

    if(lhexa.equals(hexa25)){alert("25. Wu Wang");
     var veintecinco=document.getElementById("25");
     veintecinco.style.color="#f34";
     veintecinco.style.fontSize="30px";
     veintecinco.onmouseover=function(e){
     document.getElementById("descr").innerHTML="25. Sinceridad. La inocencia. La naturalidad.";
     veintecinco.removeAttribute("style");};
    }

    if(lhexa.equals(hexa26)){alert("26. Ta Ch'u");
     var veinteseis=document.getElementById("26");
     veinteseis.style.color="#f34";
     veinteseis.style.fontSize="30px";
     veinteseis.onmouseover=function(e){
     document.getElementById("descr").innerHTML="26. Fuerza educadora. El poder de lo fuerte. La gran acumulación";
     veinteseis.removeAttribute("style");};
    }

    if(lhexa.equals(hexa27)){alert("27. I");
     var veintesiete=document.getElementById("27");
     veintesiete.style.color="#f34";
     veintesiete.style.fontSize="30px";
     veintesiete.onmouseover=function(e){
     document.getElementById("descr").innerHTML="27. Nutrirse. La alimentación. Las fauces.";
     veintesiete.removeAttribute("style");};
    }

    if(lhexa.equals(hexa28)){alert("28. Ta Kuo");
     var dos=document.getElementById("28");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="28. Excesos. La preponderancia de lo grande.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa29)){alert("29. Kan");
     var dos=document.getElementById("29");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="29. Peligro. Lo abismal. La caida.30. Distinguir. El resplandor. Lo a";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa30)){alert("30. Li");
     var dos=document.getElementById("30");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="30. Distinguir. El resplandor. Lo adherente.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa31)){alert("31. Hsien");
     var dos=document.getElementById("31");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="31. Unir. La influencia.La atracción.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa32)){alert("32. Heng");
     var dos=document.getElementById("32");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="32. Luna Creciente. La duración. La permanencia.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa33)){alert("33. Tun");
     var dos=document.getElementById("33");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="33. Retirarse. EL repliegue";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa34)){alert("34. Ta Chuang");
     var dos=document.getElementById("34");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="34. Gran fuerza. El gran vigor.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa35)){alert("35. Chin");
     var dos=document.getElementById("35");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="35. Progresar. El avance.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa36)){alert("36. Ming I");
     var dos=document.getElementById("36");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="36. Luz que se apaga. El oscurecimiento.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa37)){alert("37. Chia Jen");
     var dos=document.getElementById("37");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="37. Gente de familia. El clan.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa38)){alert("38. K'uei");
     var dos=document.getElementById("38");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="38. Contraste. La oposición. El antagonismo";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa39)){alert("39. Chien");
     var dos=document.getElementById("39");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="39. Dificultad. El obstáculo. El impedimento";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa40)){alert("40. Hsieh");
     var dos=document.getElementById("40");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="40. Explicar. La liberación. El alivio.";
     dos.removeAttribute("style");};
    } 

    if(lhexa.equals(hexa41)){alert("41. Sun");
     var dos=document.getElementById("41");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="41. Perder. La disminución.";
     dos.removeAttribute("style");};
    }
    
    if(lhexa.equals(hexa42)){alert("42. I");
     var dos=document.getElementById("42");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="42. Evolución. El aumento. La ganancia.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa43)){alert("43. Kuai");
     var dos=document.getElementById("43");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="43. Decidir. El desbordamiento. La resolución.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa44)){alert("44. Kou");
     var dos=document.getElementById("44");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="44. Encontrarse. El acoplamiento.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa45)){alert("45. Ts'ui");
     var dos=document.getElementById("45");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="45. Cosechar. La reunión. La convergencia.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa46)){alert("46. Sheng");
     var dos=document.getElementById("46");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="46. Subir. El ascenso. La escalada.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa47)){alert("47. K'un");
     var dos=document.getElementById("47");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="47. Angustia. La pesadumbre. El agotamiento.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa48)){alert("48. Ching");
     var dos=document.getElementById("48");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="48. El pozo de agua. La fuente";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa49)){alert("49. Ko");
     var dos=document.getElementById("49");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="49. Renovar. La revolución. El cambio";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa50)){alert("50. Ting");
     var dos=document.getElementById("50");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="50. La caldera. Lo alquímico ";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa51)){alert("51. Chen");
     var dos=document.getElementById("51");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="51. Trueno. La conmoción. Lo suscitativo.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa52)){alert("52. Ken");
     var dos=document.getElementById("52");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="52. Cimientos. La quietud. La detención";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa53)){alert("53. Chien");
     var dos=document.getElementById("53");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="53. Evolución. El progreso gradual.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa54)){alert("54. Kuei Mei");
     var dos=document.getElementById("54");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="54. Desposar a la hija menor. La doncella.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa55)){alert("55. Feng");
     var dos=document.getElementById("55");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="55. Abundancia. La plenitud";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa56)){alert("56. Lü");
     var dos=document.getElementById("56");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="56. Viajero. El andariego";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa57)){alert("57. Sun");
     var dos=document.getElementById("57");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="57. Viento. Lo penetrante. Lo suave";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa58)){alert("58. Tui");
     var dos=document.getElementById("58");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="58. Recogerse. La serenidad. La satisfacción";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa59)){alert("59. Huan");
     var dos=document.getElementById("59");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="59. Confusión. La dispersión. La disolución";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa60)){alert("60. Chieh");
     var dos=document.getElementById("60");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="60. Moderación. La restricción. La limitación ";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa61)){alert("61. Chung Fu");
     var dos=document.getElementById("61");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="61. Fe Interior. La verdad interior. La sinceridad interna.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa62)){alert("62. Hsiao Kuo");
     var dos=document.getElementById("62");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="62. Pequeñas cosas importantes. La pequeña preponderancia.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa63)){alert("63. Chi Chi");
     var dos=document.getElementById("63");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="63. Conclusiones. Después de la realización.";
     dos.removeAttribute("style");};
    }

    if(lhexa.equals(hexa64)){alert("64. Wei Chi");
     var dos=document.getElementById("64");
     dos.style.color="#f34";
     dos.style.fontSize="30px";
     dos.onmouseover=function(e){
     document.getElementById("descr").innerHTML="64. Inconcluso. Antes de la realización.";
     dos.removeAttribute("style");};
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


