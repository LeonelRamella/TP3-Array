function filtrarNumerosPares(arreglo) {
    let numerosPares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            numerosPares.push(arreglo[i]);
        }
    }

    return numerosPares;
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosParesFiltrados = filtrarNumerosPares(numeros);
document.write("Números pares filtrados:" + numerosParesFiltrados);