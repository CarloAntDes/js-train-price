var eta = prompt("Dimmi gli anni");
var km = prompt("Quanti Km vuoi percorrere?");
var prezzo = km * 0.21;

if (eta < 18) {
 prezzo = prezzo - (prezzo * 0.20);
}

if (eta >65) {
  prezzo = prezzo - (prezzo * 0.40);
}

alert("Il prezzo è "+ prezzo + " €");
