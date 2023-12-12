let x;
let soma=0;
x = parseInt(prompt("Digite o valor de n: "));
while (x!=1) {
    soma = soma + x;
    x = x - 1;   
}
document.write(soma);
