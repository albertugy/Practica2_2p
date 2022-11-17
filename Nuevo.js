//alert("hola mundo")
/*
Autor: yo
Fechas hoy
*/  
//int
var number = 5;
var number2 = 2;
//string
var number_letras = " cinco";
var cadenas = "Alberto";
//Operadores == != >< >= <=
//AND & OR || NOT !
var bool= (number>number2) || (3<2);
//condicionales
if(cadenas=="Alberto")
alert("Te llamas " +cadenas)
else
    alert("Tu nombre no es bonito")


//switch
var letra='a';
switch(letra){
    case 'a': //alert("La letra es a")
    break;
    case 'b': //alert("La letra es b")
    break;
    case 'c': //alert("La letra es c")
    break;
    default: //alert ("No se reconoce la opcion")
}
//while

var x=0;
while (x<3){
    //alert(x)
    x++
}

// do while

do{
    //alert(x)
    x++;
}while(x<3)

//for
//for(var z=0; z=5; z++){
   // alert("Estamos en: "+z)
//}

//Funciones

function MiFuncion(){
var name= document.getElementById('Apellidos').value
alert("Mi apellido es: " + name)
}