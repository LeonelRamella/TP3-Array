const resultado = Array(13).fill(0);

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  const suma = dado1 + dado2;
  resultado[suma]++;
}

document.write("<h2>Número de apariciones de cada suma de los dados:</h2>");
document.write("<ul>");
for (let i = 2; i <= 12; i++) {
  document.write("<li>Suma" +i+":" + resultado[i] + "apariciones</li>");
}
document.write("</ul>");