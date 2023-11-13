function encontrarNumeroMayor(arreglo) {
    if (arreglo.length === 0) {
        return "El arreglo está vacío.";
    }
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return "El número mayor en el arreglo es: " + mayor;
}
let numeros = [3, 8, 2, 10, 5];
let resultado = encontrarNumeroMayor(numeros);
document.write(resultado);