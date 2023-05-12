//Funciones
function encriptar() {
  textoModificado = textoEntrada.value.toLowerCase()
    .replace(/á/img, "a")
    .replace(/é/img, "e")
    .replace(/í/img, "i")
    .replace(/ó/img, "o")
    .replace(/ú/img, "u")
    .replace(/e/img, "enter")
    .replace(/i/img, "imes")
    .replace(/a/img, "ai")
    .replace(/o/img, "ober")
    .replace(/u/img, "ufat");

  if(textoEntrada.value.trim() == "") {
    activarModalEncriptar();
  } else {
    modificarResultados();
  }
  return textoModificado;
}

function desencriptar() {
  textoModificado = textoEntrada.value.toLowerCase()
    .replace(/á/img, "a")
    .replace(/é/img, "e")
    .replace(/í/img, "i")
    .replace(/ó/img, "o")
    .replace(/ú/img, "u")
    .replace(/enter/img, "e")
    .replace(/imes/img, "i")
    .replace(/ai/img, "a")
    .replace(/ober/img, "o")
    .replace(/ufat/img, "u");
  if(textoEntrada.value.trim() == "" ) {
    activarModalDesencriptar();
  } else {
    modificarResultados();
  }
  return textoModificado;
}

function modificarResultados() {
  if(elementosEliminados == false) {
    eliminarElementos();
  }
  crearElementos();
  textoEntrada.value = "";
  document.getElementById("resultado").focus();
}

function crearElementos() {
  parrafoResultado.textContent = textoModificado;
  nuevoResultado.appendChild(parrafoResultado);
  nuevoResultado.appendChild(botonCopiar);
}

function eliminarElementos() {
  let imagen = document.getElementById("resultImg");
  let mensaje = document.getElementById("resTxt");
  imagen.remove();
  mensaje.remove();
  return elementosEliminados = true;
}

function copiarTexto() {
  function cambiarTextoBoton() {
    textoBoton.remove();
    textoBoton = document.createTextNode("Copiar");
    botonCopiar.appendChild(textoBoton);
  }
  navigator.clipboard.writeText(textoModificado);
  textoBoton.remove();
  textoBoton = document.createTextNode("Copiado");
  botonCopiar.appendChild(textoBoton);
  setInterval(cambiarTextoBoton, 2500)
}

//Funciones para la ventana modal
function activarModalEncriptar() {
  main.appendChild(modalContainer);
  modalContainer.appendChild(modal);
  modal.appendChild(imgModal);
  modal.appendChild(expresion);
  modal.appendChild(mensajeErrorEncriptar);
  modal.appendChild(mensajeIndicacion);
  modal.appendChild(btnModal);
}

function activarModalDesencriptar() {
  main.appendChild(modalContainer);
  modalContainer.appendChild(modal);
  modal.appendChild(imgModal);
  modal.appendChild(expresion);
  modal.appendChild(mensajeErrorDesencriptar);
  modal.appendChild(mensajeIndicacion);
  modal.appendChild(btnModal);
}

function cerrarModal() {
  mensajeErrorEncriptar.remove();
  mensajeErrorDesencriptar.remove();
  modalContainer.remove();
}

//Variables
let encriptarBtn = document.getElementById("encriptarBtn");
let desencriptarBtn = document.getElementById("desencriptarBtn");
let textoEntrada = document.getElementById("textoEntrada");
let acentos = /[áéíóú]/;
let botonCopiar = document.createElement("button");
let textoBoton = document.createTextNode("Copiar");
botonCopiar.className = "btnClaro";
botonCopiar.id = "copiarBtn";
botonCopiar.appendChild(textoBoton);
let nuevoResultado = document.getElementById("resultado");
let parrafoResultado = document.createElement("textarea");
parrafoResultado.id = "parrafoResult";
let textoModificado = "";
let elementosEliminados = false;
//Variables para la ventana modal
var main = document.querySelector("main");
var modalContainer = document.createElement("div");
modalContainer.id = "modalContainer";
var modal = document.createElement("div");
modal.id = "modal";
var imgModal = document.createElement("img");
imgModal.src = "./recursos/mensaje-de-error.png";
imgModal.id = "imgModal";
var expresion = document.createElement("p");
expresion.className = "textonegritas";
var textoExpresion = document.createTextNode("¡Ooops!");
expresion.appendChild(textoExpresion);
var mensajeErrorEncriptar = document.createElement("p");
var textoErrorEncriptar = document.createTextNode("No hay nada para encriptar.");
mensajeErrorEncriptar.appendChild(textoErrorEncriptar);
var mensajeErrorDesencriptar = document.createElement("p");
var textoErrorDesencriptar = document.createTextNode("No hay nada para desencriptar.");
mensajeErrorDesencriptar.appendChild(textoErrorDesencriptar);
var mensajeIndicacion = document.createElement("p");
var textoIndicacion = document.createTextNode("Ingresa algo de texto.");
mensajeIndicacion.appendChild(textoIndicacion);
var btnModal = document.createElement("button");
btnModal.className = "btnOscuro";
var textoBtnModal = document.createTextNode("Cerrar");
btnModal.appendChild(textoBtnModal);

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;
btnModal.onclick = cerrarModal;