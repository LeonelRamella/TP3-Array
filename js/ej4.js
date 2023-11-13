const numerosPrimos = [];

function esPrimo(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function ingreso(numero){
    for(let i = 0; i <= numero; i++){
        if(esPrimo(i)){
            numerosPrimos.push(i);
        }
    }
}


const numero = parseInt(prompt("Ingrese un número: "));
ingreso(numero);
document.write("El arreglo de números primos generado es " + [numerosPrimos]);