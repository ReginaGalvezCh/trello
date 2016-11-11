function nvaLista() { 
  var elTablero = document.getElementById("trello");
  var laLista = document.createElement("div");
  var elInput = document.createElement("input");
  var elBoton = document.createElement("button");
  var qDiga = document.createTextNode("Guardar lista");

  elTablero.appendChild(laLista);
 laLista.appendChild(elInput);
 laLista.appendChild(elBoton);
  elBoton.appendChild(qDiga);

  laLista.setAttribute("class", "lista col-md-3","col-sm-3","col-xs-3");
  elBoton.setAttribute("onclick", "agregarLista()");
  elBoton.setAttribute("class","btn btn-success");
}

function agregarLista() {
  // html
  var laListaDos = document.getElementById("trello").lastChild;
  var elNvoInput = laListaDos.getElementsByTagName("input")[0];
  var qDiceElInput = laListaDos.getElementsByTagName("input")[0].value;
  var btnInputTitulo = laListaDos.getElementsByTagName("button")[0];

  var elementouno = document.createElement("h3");
  var btnTarea = document.createElement("button");
  var hacerLAsTareas = document.createElement("div");
  var otroInput = document.createTextNode(qDiceElInput);
  var otraTarea = document.createTextNode("Añadir Tarea");

  laListaDos.appendChild(elementouno);
  elementouno.appendChild(otroInput);
  laListaDos.appendChild(btnTarea);
  laListaDos.appendChild(hacerLAsTareas);
  btnTarea.appendChild(otraTarea);

  hacerLAsTareas.setAttribute("class", "tareas");
  btnTarea.setAttribute("onclick", "anadirTarea()");
  btnTarea.setAttribute("class","btn btn-success");
  elNvoInput.setAttribute("class", "hidden");
  btnInputTitulo.setAttribute("class", "hidden","btn btn-success");

}

function anadirTarea() {
  // html
  var laListaDos = document.getElementById("trello").lastChild;
  var lasTareas = laListaDos.lastChild;

  var elText = document.createElement("textarea");
  var elGuardar = document.createElement("button");
  var mandarGuardar = document.createTextNode("Guardar Tarea");

  lasTareas.appendChild(elText);
  lasTareas.appendChild(elGuardar);
  elGuardar.appendChild(mandarGuardar);

  elGuardar.setAttribute("onclick", "guardarTarea()");
  elGuardar.setAttribute("class","btn btn-success")
  btnAnadirTarea.setAttribute("class", "hidden btn btn-success");
}

function guardarTarea() {
  // html
  var laListaDos = document.getElementById("trello").lastChild;
  var lasTareas = laListaDos.lastChild;
  var textfinal = lasTareas.getElementsByTagName("textarea")[0];
  var qDiceText = textfinal.value;
  var btnDiceText = lasTareas.getElementsByTagName("button")[0];

  var nvaTarea = document.createElement("div");
 var haciaAbajo = document.createElement("input");
 var elementodos = document.createElement("h4");
  var btnTarea = document.createElement("button");
  var elementonodo = document.createTextNode(qDiceText);
  var otraTarea = document.createTextNode("Añadir Tarea");

  lasTareas.appendChild(nvaTarea);
  nvaTarea.appendChild(elementodos);
  nvaTarea.appendChild(btnTarea);
  elementodos.appendChild(elementonodo);
  btnTarea.appendChild(otraTarea);

  nvaTarea.setAttribute("class", "tareaNueva");
  elementodos.setAttribute("class", "pull-left");
  btnTarea.setAttribute("onclick", "anadirTarea()");
  btnTarea.setAttribute("class", "pull-right btn btn-success");
  textareaTarea.classList.add("oculto");
  btnDiceText.setAttribute("class", "hidden btn btn-success");

}
