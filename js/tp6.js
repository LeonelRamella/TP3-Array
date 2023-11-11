function calcularPerimetro(lados1, lados2) {
    return 2 * (lados1 + lados2);
  }
  const lado1 = parseFloat(prompt("Ingrese la longitud del primer lado del rectángulo:"));
  const lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado del rectángulo:"));
  const perimetro = calcularPerimetro(lado1, lado2);
  if(isNaN(lado1) || isNaN(lado2)){
    alert("Ingrese numeros por favor")
  } else{
    let perimetro = calcularPerimetro(lado1, lado2)
    document.write("El perimetro es: " + perimetro)
  }
