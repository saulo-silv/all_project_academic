let num1 = parseInt(prompt(" digite o primeiro numero:"));
let num2 = parseInt(prompt(" digite o segundo numero:"))
let num3 = parseInt(prompt(" digite o terceiro numero:"))

if (num1 <= num2 && num2 <= num3) {
    document.write("a ordem crescente é:"+ num1 ,num2 , num3);    
}else if (num1 <= num3 && num3 <= num2) {
    document.write("a ordem crescente é:"+ num1 , num3, num2);    
    
}else if (num2 <= num1 && num1 <= num3) {
    document.write("a ordem crescente é:"+ num2 , num1, num3);    
}else if (num2 <= num3 && num3 <= num1) {
    document.write("a ordem crescente é:"+ num2 , num3, num1);    
    
}else if (num3 <= num1 && num1 <= num2) {
    document.write("a ordem crescente é:"+ num3 , num1, num2);    
    
}else if (num3 <= num2 && num2 <= num1) {
    document.write("a ordem crescente é:"+ num3 , num2, num1);    
    
}
