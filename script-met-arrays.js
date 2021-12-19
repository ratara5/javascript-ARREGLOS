let nombres=["pedro","maria","jorge"];

let resultado2=nombres.shift(); //hace lo mismo que pop(), pero con el primer elemento
let resultado1=nombres.pop(); // borra el último elemento y retorna ese elemento

document.write("Elementos removidos: <b style='color:red'>"+resultado2+"</b>");
document.write(" y <b style='color:red'>"+resultado1+"</b></br>");
document.write("quedó: <b>"+nombres+"</b>"); // después de shift() y pop() ya no están ni el primer ni el último elementos

