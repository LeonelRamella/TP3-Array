const texto = prompt("Ingresar el texto porfavor");

function verificarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      return alert( "La cadena está formada solo por mayúsculas.");
    }
    else if (cadena === cadena.toLowerCase()) {
      return alert( "La cadena está formada solo por minúsculas.");
    }
    else {
      return alert( "La cadena es una mezcla de mayúsculas y minúsculas.");
    }
  }

  verificarCadena(texto);

