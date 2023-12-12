let nota1 = parseInt(prompt("informe a primeira nota:"))
let nota2 = parseInt(prompt("informe a segunda nota:"))
let nota3 = parseInt(prompt("informe a terceira nota:"))
let nota4 = parseInt(prompt("informe a quarta nota:"))
let nota5 = parseInt(prompt("informe a ultima nota:"))

let resultado = (nota1+nota2+nota3+nota4+nota5)/5

if (nota1>=7 && nota2>=7 && nota3>=7 && nota4>=7 && nota5>7){
    document.write("passou em todos, sua media é: " + resultado);
}
else if (nota1>=7 && nota2>=7 && nota3<7 && nota4>=7 && nota5<7){
    document.write("passou nos exames 01,02,04 e não passou nos 03 e 05, sua media é: " + resultado);
}
else if (nota1>=7 && nota2>=7 && nota3>=7 && nota4>=7 && nota5<7){
    document.write(" passou nos exames 01,02,03,04 e não passou no 05, sua media é: " + resultado);
}
else{
    document.write("reprovado, sua media é: " + resultado);
}