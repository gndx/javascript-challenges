



//factorizacion

function factorial (n) {
    var n = parseInt(prompt("ingrese el numero el cual quiera obtener factorial:"));
	
    var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
    
	document.write(n+"!"+" = "+total+ "<br>");
    

}


factorial();

//numeros primos

function primo(j) 
{
    var j = parseInt(prompt("ingrese el numero el cual quiera saber si es primo o no:"));

    document.write("Es primo: ");
    if (j<=1) return false;
    for (var i = 2; i <= j-1; i++)
        if (j % i == 0) return false;
    return true;

}

    
    
    
document.write(primo());



//fibonacci


// Cantidad de números que deseamos imprimir
function fibon(limit){
    var limit = parseInt(prompt("ingrese el limite de la secuencia fibonacci:"));

    var fibo = [0,1];
    document.write("<br>Serie fibonacci");
    for(i=2; i <= limit; i++){
        fibo.push(fibo[i-1] + fibo[i-2]);
       
        document.write("<br> "+fibo[i]+"<br/>");	
    }
}

fibon();