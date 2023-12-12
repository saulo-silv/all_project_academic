alert(" escreva numeros que não se repetem:")

let num1 = parseInt(prompt("digite o primeiro numero:"))
let num2 = parseInt(prompt("digite o segundo numero:"))
let num3 = parseInt(prompt("digite o terceiro numero:"))

if ((num1 > num2 && num1 > num3) && num2 > num3) {
    soma = num1+num2;
}else if ((num1 > num2 && num1 > num3) && num3 > num2) {
    soma = num1 + num3;
}else if ((num2 > num1 && num2 > num3) && num1 > num3) {
    soma = num2 + num1;
}else if ((num2 > num1 && num2 > num3 ) && num3 > num1) {
    soma = num2 = num3;
}else if ((num3 > num1 && num3 > num2) && num1 > num2) {
    soma = num3 + num1;
}else if ((num3 > num1 && num3 > num2) && num2 > num1 ) {
    soma = num3 + num2;
}
document.write("a soma dos dois maiores são: " + soma);