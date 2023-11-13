function fahrenheit(temp){
    return (temp * 9/5) + 32;
}


const gradosCelsius = parseInt(prompt("Ingrese la temperatura en Celsius: "));
document.write("La temperatura de Celsius a Fahrenheit es " + fahrenheit(gradosCelsius) + "°F");