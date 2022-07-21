function imc(){
    var nombre = prompt("Cual es tu nombre?");
    var peso = prompt(nombre+" , Cuanto pesas?");
    var altura = prompt(nombre+" , Cuanto medis?");

    var calculo=peso/(altura*altura);

    if(calculo<19){
        document.write(calculo+"<br>");
        document.write("Tienes bajo peso."+"<br>");
    } else if(calculo>=19 && calculo<25){
        document.write(calculo+"<br>");
        document.write("Usted tiene un IMC normal."+"<br>");
    } else if(calculo>=25 && calculo<30){
        document.write(calculo+"<br>");
        document.write("Usted tiene sobrepeso."+"<br>");
    } else{
        document.write(calculo+"<br>");
        document.write("Usted tiene obesidad.");
    }
}