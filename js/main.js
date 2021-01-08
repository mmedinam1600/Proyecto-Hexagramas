var tabla,lista,celda,texto;

function iniciar(){
 tabla=document.getElementById("hexg");
 lista=document.createElement("td");//se crea
 tabla.appendChild(lista);
}

 function agregarLinea(){
  var num1=document.getElementById("valor1").value;
  var num2=document.getElementById("valor2").value;
  var num3=document.getElementById("valor3").value;
  verificaVal(num1,num2,num3);
  var n1=parseInt(num1,10);//conviersion de string a int 
  var n2=parseInt(num2,10);
  var n3=parseInt(num3,10);
  var valLin=n1+n2+n3; //variable que guarda el valor de la suma de los 3 numeros
  var valor= ConvLineas(valLin);
  celda=document.createElement("tr");
  texto=document.createTextNode(valor);
  celda.appendChild(texto);

  if (lista.hasChildNodes())
    lista.insertBefore(celda,lista.childNodes[0]);
  else
    lista.appendChild(celda);
}

function borrarHexagrama(){
  while(lista.hasChildNodes()){
  lista.removeChild(lista.lastChild);}
}

		
function borrarLinea(){
  if(lista.hasChildNodes())
  	 lista.removeChild(lista.childNodes[0]);
}


function verificaVal( x, y, z){//funcion que verifica los valores 
	var ok1=false;
	var ok2=false;
	var ok3=false;
  if(x==2 || x==3 ){
  	ok1=true;
  }

  if(y==2 || y==3 ){
  	ok2=true;
  }

  if(z==2 || z==3 ){
  	ok3=true;
  }
  if(ok1==true && ok2==true && ok3==true){
  	return;
  }else{
  	alert("Los valores solo pueden ser  el numero 2 o 3  ");
  }
}

function ConvLineas(x){//funcion que retornara la linea correspondiente dependiendo el resultado de la suma
var seis="____________x_____________";
var siete="__________________________";
var ocho="____________ _____________";
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