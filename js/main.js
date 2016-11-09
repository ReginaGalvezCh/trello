function mostrarDiv(){
  //form
  //input
  //btn
  var add= document.getElementById('miDiv');
  var elForm= document.createElement('div');
  var elInput=document.createElement('input');
  var elBoton=document.createElement('button' ); 
  var mensajeBtn = document.createTextNode('guardar lista');

  add.appendChild(elForm);
  elForm.appendChild(elInput);
  elForm.appendChild(elBoton);
  elBoton.appendChild(mensajeBtn);

  elForm.setAttribute('class','col-md-4');
  elBoton.setAttribute('onclick','btnGuardar');
  
  //poner text y atrubutte in btn
  elBoton.appendChild(mensajeBtn);
  elBoton.setAttribute("class"," baja btn btn-primary ");
  elBoton.setAttribute("onclick"," btnGuardar()");
}  

function btnGuardar(){
  var add = document.getElementById('miDiv').lastChild;
  var escribeme = add.getElementsByTagName('input')[0];
  var otroInput = add.getElementsByTagName('input')[0].value;
  var botonDos = add.getElementsByTagName('button')[0];
 
  var elementoTexto = document.createElement('h3');
  var siguienteBtn = document.createElement('button');
  var divDos=document.createElement('div');
  var elNodo = document.createTextNode(escribeme);
  var siguienteNodo = document.createTextNode('agregar');

  elementoTexto.appendChild(elNodo);
  add.appendChild(elementoTexto);
  add.appendChild(divDos);
  add.appendChild(siguienteBtn);
  siguienteBtn.appendChild(siguienteNodo);

  divDos.setAttribute('class','miDiv');  
  siguienteBtn.setAttribute('onclick','nuevaTarea()');
  escribeme.setAttribute('class','hidden');
  botonDos.setAttribute('class','hidden');

}
function nuevaTarea(){


}