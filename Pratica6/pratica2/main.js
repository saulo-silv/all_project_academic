let arr = [10,20,30,40,50,60,70,80,90];
let arr1 = arr.reduce(function(acc,valor){
    return acc+valor;
})
document.write(arr1);