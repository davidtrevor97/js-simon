// If you are talking about the 'native' alert() then that won't ever work as JS does not have any access to it in any way apart from popping it open

// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

//set variabili e creazione 5 numeri random compresi tra 1 e 100
var randomArray = [];
for (var i = 0; i < 5; i++) {
  var random = Math.floor( Math.random() * 100 - 1 ) +1 ;
  randomArray.push(random + " ");
}
var alert = $(".alert");

//mostra alert
alert.text(randomArray);

// ciclo timing TIMER di 30 secondi per la visione
setTimeout( mostra , 3000 );
function mostra(){
  alert.hide();
}
//Array numeri inseriti
var insertNumber = [];
//prompt richiesta numeri
setTimeout( richiestaF , 3500);
function richiestaF(){
  for (var i = 0; i < 5 ; i++) {
    var richiesta = parseInt( prompt("inerisci i numeri che hai appena visto") );
    insertNumber.push(richiesta);
    }
}
console.log(insertNumber);
