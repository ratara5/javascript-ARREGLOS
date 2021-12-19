let frutas=["mango","manzana","pera"];

document.write(frutas[1])
document.write("<br>")

let pc={
    nombre: "Raymond-PC",
    procesador: "Intel Core I7",
    ram:"16GB",
    espacio:"1TB"
}

let nombre=pc["nombre"]
let procesador=pc["procesador"]
let ram=pc["ram"]
let espacio=pc["espacio"]

let frase=`El nombre de mi PC es <b>${nombre}</b> <br>
           el procesador es <b>${procesador}</b> <br>
           la ram es <b>${ram}</b> <br>
           el espacio es <b>${espacio}</b> <br>`;
document.write(frase+"<br>")


for (let index = 6; index >=0; index--) {
    document.write(index+"<br>")
}

let array1=["maria","josefina","roberta"];
let array2=["pedro","marcelo",array1,"josefina"];

forPrincipal:
for (let array in array2){ //for in solo muestra los indices
    if(array==2){
        for (let array of array1){ //for of solo muestra los elementos
            document.write(array+"<br>");
            break forPrincipal; //interrumple ciclo con esa etiqueta
        }
    } else {
        document.write(array2[array]+"<br>");
    }
}