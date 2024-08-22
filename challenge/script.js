
var entradaTexto = document.querySelector(".entrada-mensaje");
var salidaTexto = document.querySelector(".salida-mensaje");
var seccionTexto1 = document.querySelector(".mensaje-vacio");
var seccionTexto2 = document.querySelector(".instruccion");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar) {
    const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z","Á","É","Í","Ó","Ú","á","é","í","ó","ú"];
    var conteo = 0;

    for (var posicion = 0; posicion < textoValidar.length; posicion++) {
        for (var letra = 0; letra < letras.length; letra++) {
            if (textoValidar.charAt(posicion) == letras[letra]) {
                conteo++;
            }
        }
    }
    if (conteo == 0) {
        return true;
    }
    return false;
}

function cifrar() {
    var texto = entradaTexto.value;
    var salida = "";
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    for (var posicion = 0; posicion < texto.length; posicion++) {
        if (texto.charAt(posicion) == "a") {
            salida = salida + "ai";
        } else if (texto.charAt(posicion) == "e") {
            salida = salida + "enter";
        } else if (texto.charAt(posicion) == "i") {
            salida = salida + "imes";
        } else if (texto.charAt(posicion) == "o") {
            salida = salida + "ober";
        } else if (texto.charAt(posicion) == "u") {
            salida = salida + "ufat";
        } else {
            salida = salida + texto.charAt(posicion);
        }
    }
    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function descifrar() {
    var texto = entradaTexto.value;
    var salida = "";
    if (!validar(texto)) {
        alert("Texto inválido, verifique su texto.");
        return;
    }
    salida = texto.replace(/ai/g, "a")
                  .replace(/enter/g, "e")
                  .replace(/imes/g, "i")
                  .replace(/ober/g, "o")
                  .replace(/ufat/g, "u");

    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}

function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "block";
}

function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar() {
    var copia = salidaTexto.value;
    navigator.clipboard.writeText(copia);

    var anuncio = document.querySelector(".alerta");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
