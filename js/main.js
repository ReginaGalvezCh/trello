function mostrarDiv(){
  //form
  //input
  //btn
   var add= document.getElementById("miDiv");
    var elForm= document.createElement('form');
    var elInput=document.createElement('input');
    var elBoton=document.createElement('input' ); 
    elBotonoton.setAttribute('type', 'submit');

  var mensaje = "guardar";
  var mensajeBtn = document.createTextNode(mensaje);
  //poner text y atrubutte in btn
  elBoton.appendChild(mensajeBtn);
  elBoton.setAttribute("class,btn btn-primary");
  elForm.setAttribute("class","return btnGuardar();");

  //unir el form con sus elementos input y btn
  elForm.appendChild(elInput);
  elForm.appendChild(elBoton);
  //unir el div gral(agregar) a contenedor
  add.appendChild(elForm);
}  

function btnGuardar(){
  var add = document.getElementById("miDiv");
  var escribeme = document.getElementsByTagName('input')[0].value;
  var elNodo = document.createTextNode(escribeme);

  var elementoTexto = document.createElement(h3);
  elementoTexto.appendChild(elNodo);

  var siguienteBtn = document.createElement('button');
  var siguienteNodo = document.createTextNode('agregar');

  siguienteBtn.appendChild(siguienteNodo);

add.appendChild(elementoTexto);
add.appendChild(siguienteNodo);

return false;

}




/*// Click en el btn para cerrar lista
var cerrar = document.getElementsByClassName("cerrar");
var i;
for (i = 0; i < cerrar.length; i++) {
  cerrar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// agregar visto cuando se selecciona un elemto
var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// crear lista nueva cuando le doy al boton 

function nuevaTarea() {
  var li = document.createElement("li");
  var ingresoValor = document.getElementById("miInput").value;
  var t = document.createTextNode(ingresoValor);
  li.appendChild(t);
  if (ingresoValor === '') {
    alert("Hola escribe algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("miInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "cerrar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}*/
