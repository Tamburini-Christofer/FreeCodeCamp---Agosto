// 11 Agosto 2025
/**************************************************************************************************************************** */
// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

//Soluzione fatta da me
//Ho creato una funzione per l'esercizio
function isBalanced(valore) {
//Ho creato una variabile che contenga le vocali di sinistra
  let vocaliSinistra = [];
//Ho creato una variabile che contenga le vocali di destra
  let vocaliDestra = [];
//Qui verrà inserito il nome del vincitore
  let partePiuVocali = "";
//Assegno ad una variabile la lunghezza del valore che verrà inserito
  let lunghezza = valore.length;
//Calcolo l'indice centrale che mi servirà in seguito
  let indiceCentrale = Math.floor(lunghezza / 2);
//Ciclo tutte le lettere
  for (let i = 0; i < lunghezza; i++) {
//Ho creato un ciclo if con un operatore logico che mi prende metà stringa
//e solo e vocali e le pusha nelle variabili create in precedenza
    if (i < indiceCentrale && (
        valore[i] === "a" ||
        valore[i] === "e" ||  
        valore[i] === "i" || 
        valore[i] === "o" || 
        valore[i] === "u" ))
        {
      vocaliSinistra.push(valore[i]);
   } else if (i >= indiceCentrale && (
        valore[i] === "a" ||
        valore[i] === "e" ||
        valore[i] === "i" ||
        valore[i] === "o" ||
        valore[i] === "u" ))
        {
      vocaliDestra.push(valore[i]);
    }
//Infine ho creato un if per valutare chi sia il vincitore tra la parte sinsitra
//o quella destra, con l'opzione pareggio
  if (vocaliSinistra.length > vocaliDestra.length) {
    partePiuVocali = ("La parte della stringa con più vocali è la sinsitra")
  } else if (vocaliSinistra.length < vocaliDestra.length) {
    partePiuVocali = ("La parte della stringa con più vocali è la destra")
  } else {
    partePiuVocali = ("Sono uguali")
  }
}
//Ritorno il valore della funzione
  return partePiuVocali;
}
//Faccio un console.log per mandare il risultato in console
console.log(isBalanced("canederli"));

//Soluzione ChatGpt
//Fino a qui è identico al mio
function isBalanced(valore) {
//ChatGpt ha creato una variabile const che contenga le vocali, sia maiuscole 
//che minuscole. Questo è molto comodo per evitare OR inutili
  const vocali = "aeiouAEIOU";
//ChatGpt ha anche creato due varabili numero, piuttosto che array
//Questo perchè ha considerato che l'importante sia il numero, non quali lettere sono
  let vocaliSinistra = 0;
  let vocaliDestra = 0;

  let lunghezza = valore.length;
  let indiceCentrale = Math.floor(lunghezza / 2);

  for (let i = 0; i < lunghezza; i++) {
//La più grande differenza di tutte sta nell'aver usato un metodo. 
//Con Includes ha preso tutte le vocali in una volta sola. 
//Con il successivo if ha messo in confronto quelle vocali prima con la parte sinistra,
//poi con la parte destra
    if (vocali.includes(valore[i])) {
      if (i < indiceCentrale) {
//poi ha aumentato il valore nuemrico della variabile interessata
        vocaliSinistra++;
      } else if (lunghezza % 2 === 0 || i > indiceCentrale) {
        vocaliDestra++;
      }
    }
  }

//Infine ha messo i numeri delle due variabili in confronto e ha fatto tornare 
//la scritta idonea.
  if (vocaliSinistra === vocaliDestra) {
    return "Le due metà hanno lo stesso numero di vocali ✅";
  } else if (vocaliSinistra > vocaliDestra) {
    return "La parte sinistra ha più vocali";
  } else {
    return "La parte destra ha più vocali";
  }
}

//Ha creato infine degli esempi 
// Esempi
console.log(isBalanced("canederli")); // → destra ha più vocali
console.log(isBalanced("aibohphobia")); // → uguali

/*
Conclusioni:

Ecco il bilancio:

✅ Cose giuste che hai fatto:

Hai capito che serve separare la stringa in due metà con l’indice centrale.

Hai saputo gestire due array distinti per contare le vocali a sinistra e a destra.

Hai applicato bene Math.floor e length.

Hai corretto l’uso di push(valore[i]).

⚠️ Cose da migliorare:

La sintassi degli if (le parentesi tonde devono racchiudere tutta la condizione).

partePiuVocali non deve essere un array, ma una stringa.

Devi ricordarti sempre di passare le stringhe tra virgolette ("canederli" e non canederli).

Il codice è un po’ ripetitivo: il controllo delle vocali con tanti || può diventare più elegante con .includes().

🌟 Valutazione complessiva: direi 7,5/10. Hai centrato la logica, devi solo pulire la sintassi e rendere più elegante il controllo.*/