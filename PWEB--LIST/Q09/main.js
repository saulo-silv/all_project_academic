let x = parseInt(prompt("informe o numero:"));
contador = 0;
for (let i = 2; i <= x/2; i++) {
    if (x % i == 0) {
        contador++;
    }   
}
if (contador == 0) {
    document.write("é um numero primo ");
}else
    document.write("não é um numero primo: " );

