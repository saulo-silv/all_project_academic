alert("Digite um numero. Para encerrar digite 0")
let x = parseInt(prompt("Digite um valor."));
while (x != 0) {
    quadrado = x * x;
    document.write(`${x} ao quadrado é ${quadrado}<br>`)
     x = parseInt(prompt("digite um numero:"))
}
