let x = parseInt(prompt("informe o numero: "));
fatorial = 1;
contador = 2;
while (contador <= x) {
    fatorial = fatorial * contador;
    contador++;
}
document.write("o valor é: " + x , fatorial);