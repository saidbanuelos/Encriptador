//Funciones
function encriptar() {
  textoModificado = textoEntrada.value.toLowerCase()
    .replace(/e/img, "enter")
    .replace(/i/img, "imes")
    .replace(/a/img, "ai")
    .replace(/o/img, "ober")
    .replace(/u/img, "ufat");
  modificarResultados();
  return textoModificado;
}

function desencriptar() {
  textoModificado = textoEntrada.value.toLowerCase()
    .replace(/enter/img, "e")
    .replace(/imes/img, "i")
    .replace(/ai/img, "a")
    .replace(/ober/img, "o")
    .replace(/ufat/img, "u");
  modificarResultados();
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

//Variables
let encriptarBtn = document.getElementById("encriptarBtn");
let desencriptarBtn = document.getElementById("desencriptarBtn");
let textoEntrada = document.getElementById("textoEntrada");
let botonCopiar = document.createElement("button");
let textoBoton = document.createTextNode("Copiar");
botonCopiar.className = "btnClaro";
botonCopiar.id = "copiarBtn";
botonCopiar.appendChild(textoBoton);
let nuevoResultado = document.getElementById("resultado");
let parrafoResultado = document.createElement("p");
parrafoResultado.id = "parrafoResult";
let textoModificado = "";
let elementosEliminados = false;

encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;
botonCopiar.onclick = copiarTexto;