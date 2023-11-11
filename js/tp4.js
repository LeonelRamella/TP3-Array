const numero = parseInt(prompt("Ingrese un numero porfavor"));

function par_impar (numeroIngresado){
    if(numeroIngresado%2==0){
        return document.write("El numero es Par");
    }else{
        return document.write("El Numero es Impar");
    }
}
//llamo la funcion
par_impar(numero);