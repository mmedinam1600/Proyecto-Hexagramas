var tabla,lista,celda,texto;

function iniciar(){
 tabla=document.getElementById("hexg");
 lista=document.createElement("td");//se crea
 lista2=document.createElement("td");
 lista3=document.createElement("td");
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
  texto=document.createTextNode(valor);
  celda.appendChild(texto);
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
  texto2=document.createTextNode(valor2);
  celda2.appendChild(texto2);
  if (lista2.hasChildNodes()){
     lista2.insertBefore(celda2,lista2.childNodes[0]); 
  } 
  else{
     lista2.appendChild(celda2);     
  }
  tabla.appendChild(lista2);
  //Tabla 3
  celda3=document.createElement("tr");
  texto3=document.createTextNode(valor3);
  celda3.appendChild(texto3);
  if (lista3.hasChildNodes()){
     lista3.insertBefore(celda3,lista3.childNodes[0]); 
  } 
  else{
     lista3.appendChild(celda3);     
  }
  tabla.appendChild(lista3);
}

function borrarHexagrama(){
  while(lista.hasChildNodes()){
  lista.removeChild(lista.lastChild);}
}

		
function borrarLinea(){
  if(lista.hasChildNodes())
  	 lista.removeChild(lista.childNodes[0]);
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
  var lineas = document.getElementsByClassName("linea");
  var nlineas =lineas.length;
  if(nlineas > 5){
    oklineas=false;
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
}

function ConvLineas(x){//funcion que retornara la linea correspondiente dependiendo el resultado de la suma
    var seis ="____________x_____________";
    var siete="__________________________";
    var ocho ="____________ _____________";
    var nueve="____________O_____________";

    if(x==6){
        return seis;
    }

    if(x==7){
        return siete;
    }

    if(x==8){
        return ocho;
    }

    if(x==9){
        return nueve;
    }
}
function ConvLineas2(x){ //Tabla 2
    var siete="__________________________";
    var ocho ="____________ _____________";
    if(x == 6){
        return ocho;
    }
    if(x == 9){
        return siete;
    }
    if(x == 7){
        return siete;
    }
    if(x == 8){
        return ocho;
    }
}
function ConvLineas3(x){ // Tabla 3
    var siete="__________________________";
    var ocho ="____________ _____________";
    if(x == 6){
        return siete;
    }
    if(x == 9){
        return ocho;
    }
    if(x == 7){
        return siete;
    }
    if(x == 8){
        return ocho;
    }
}