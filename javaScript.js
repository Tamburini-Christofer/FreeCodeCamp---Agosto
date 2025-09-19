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
function isBalanced(valore) {
  const vocali = "aeiouAEIOU";
  let vocaliSinistra = 0;
  let vocaliDestra = 0;

  let lunghezza = valore.length;
  let indiceCentrale = Math.floor(lunghezza / 2);

  for (let i = 0; i < lunghezza; i++) {
    if (vocali.includes(valore[i])) {
      if (i < indiceCentrale) {
        vocaliSinistra++;
      } else if (lunghezza % 2 === 0 || i > indiceCentrale) {
        vocaliDestra++;
      }
    }
  }

  if (vocaliSinistra === vocaliDestra) {
    return "Le due metà hanno lo stesso numero di vocali ✅";
  } else if (vocaliSinistra > vocaliDestra) {
    return "La parte sinistra ha più vocali";
  } else {
    return "La parte destra ha più vocali";
  }
}

// Esempi
console.log(isBalanced("canederli")); // → destra ha più vocali
console.log(isBalanced("aibohphobia")); // → uguali
