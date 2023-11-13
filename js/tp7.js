function tablaDeMultiplicar(numero) {
    document.write("Tabla de multiplicar del " + numero + ": <br>");
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      document.write(numero + " x " + i + " = " + resultado + "<br>");
    }
  }
  
  const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  
  if (!isNaN(numero)) {
    tablaDeMultiplicar(numero);
  } else {
    document.write("Por favor, ingrese un número válido.");
  }