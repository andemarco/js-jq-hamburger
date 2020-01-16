var open = $('i.fa-bars'); //variabile tasto apertura
var close = $('i.fa-times') //variabile tasto chiusura
// FUNZIONE APERTURA
open.click(
  function(){
    $('div.hamburger-menu').show(500)
  }
);
// FUNZIONE CHIUSURA
close.click(
  function(){
    $('div.hamburger-menu').hide(500)
  }
);
