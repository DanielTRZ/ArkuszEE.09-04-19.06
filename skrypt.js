// moim zdaniem najszybsze i najprostsze rozwiazanie skryptu zadania

function dodawanie(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
    
if( a ==""|| b ==""){
wynik.innerHTML="Prosze podać obie liczby.";
}
else{ 
        
a = parseFloat(a);
b = parseFloat(b);
     
var zliczenie = a + b;
wynik.innerHTML = "Wynik" +"  " + zliczenie;
}  
}

function odejmowanie(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
     
if( a ==""|| b ==""){
wynik.innerHTML="Prosze podać obie liczby.";
}
else{       
a = parseFloat(a);
b = parseFloat(b);
     
var zliczenie = a - b;
wynik.innerHTML = "Wynik" +"  " + zliczenie;
}          
}
function mnozenie(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
    
if( a ==""|| b ==""){
wynik.innerHTML="Prosze podać obie liczby.";
}
else{ 
        
a = parseFloat(a);
b = parseFloat(b);
     
var zliczenie = a * b;
wynik.innerHTML = "Wynik" +"  " + zliczenie;
}  
    
}function dzielenie(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
     
if( a ==""|| b ==""){
wynik.innerHTML="Prosze podać obie liczby.";
}
else{ 
        
a = parseFloat(a);
b = parseFloat(b);
     
var zliczenie = a / b;
wynik.innerHTML = "Wynik" +"  " + zliczenie;
}  
          
}function potegowanie(){
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
   
    
if( a ==""|| b ==""){
wynik.innerHTML="Prosze podać obie liczby.";
}
else { 
        
a = parseFloat(a);
        b = parseFloat(b);
     
        var  zliczenie = a ** b;
        wynik.innerHTML = "Wynik" +"  " + zliczenie;
 }  
    
    
    
}
