// 11 Agosto 2025
/**************************************************************************************************************************** */
// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

//Soluzione fatta da me                                     QA<
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


// 13 Agosto 2025
// /**************************************************************************************************************************** */
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

// Your function should handle sequences of any length greater than or equal to zero.
// If the length is zero, return an empty array.
// Note that the starting numbers are part of the sequence.

//Soluzione mia con aiuto ChatGpt per la logica
function fibonacciSequence(startSequence, length) {
  // Se la lunghezza è 0, ritorno un array vuoto
  if (length === 0) return [];

  // Copio gli elementi iniziali della sequenza
  let sequence = startSequence.slice(0, length);

  // Calcolo i successivi numeri fino ad arrivare alla lunghezza richiesta
  for (let i = sequence.length; i < length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
// Esempio:
console.log(fibonacciSequence([0, 1], 10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// //Valutazione su esercizio mio preChatGpt
// ✅ Cose positive

// Hai intuito che serviva un array per accumulare i valori della sequenza.

// Hai capito che serviva un ciclo per generare i numeri successivi.

// La funzione ha già due parametri: startSequence e length → questo è corretto.

// ⚠️ Errori principali

// Variabili non dichiarate

// Usi arrayFibonacci senza averlo dichiarato prima.

// arrayLenght non serve a nulla e non è scritto bene (length è la parola giusta).

// Uso improprio di forEach

// forEach non serve per costruire la sequenza, ma solo per iterare sugli elementi già esistenti.

// Inoltre dentro fai numero[i], ma numero è un singolo valore, non un array.

// Somma non salvata

// numero[i] + numero[++i] non viene mai inserita in nessun array → quindi il risultato si perde.

// Sintassi errata

// Hai una parentesi in più dentro forEach.

// Nel return scrivi arrayFibonacci(numero) come se fosse una funzione, ma è un array → errore.

// Chiamata sbagliata della funzione

// Fai fibonacciSequence(arrayFibonacci) ma arrayFibonacci non esiste ancora. Dovevi passare [0,1] e la lunghezza.

// 🌟 Valutazione finale

// Correttezza logica: 2/10 (l’idea c’è ma l’implementazione non funziona).

// Pulizia del codice: 3/10 (nomi confusi, parentesi sbagliate).

// Comprensione del problema: 5/10 (hai capito che serve un ciclo e un array, ma hai scelto gli strumenti sbagliati).

// ➡️ Media complessiva: 3.5/10

// Non funziona, ma la buona notizia è che la tua seconda versione è stata già un enorme passo avanti (da 3,5/10 a 8,5/10 🚀).

// Vuoi che ti riscriva il tuo codice iniziale corretto riga per riga (senza cambiare troppo la struttura, solo aggiustando gli errori), così vedi la differenza?

// 14 Agosto 2025
// /**************************************************************************************************************************** */
// Data una stringa, rimuovi tutti gli spazi dalla stringa, inserisci due spazi tra ogni carattere, converti tutte le lettere alfabetiche in maiuscolo e restituisci il risultato.

// I caratteri non alfabetici devono rimanere invariati (ad eccezione degli spazi).

//Mio codice 
//Creo la funzione 
function spaceJam(stringa) {

//Tolgo gli spazi (Errore!! Trim elimina solo gli spazi iniziali e finali)
    stringa = stringa.trim();
//Separo i caratteri
    stringa = stringa.split("");
//Creo uno spazio tra caratteri
    stringa = stringa.join(" ");
//Rendiamo tutto maiuscolo
    stringa = stringa.toUpperCase();
//Returniamo a stringa
  return stringa;
}
console.log(spaceJam("ho 23 gatti e 33 cani nel giardino 1"));

//Codice ChatGpt
function spaceJam(stringa) {
  stringa = stringa.replace(/\s+/g, ""); // rimuove tutti gli spazi
  stringa = stringa.split("");           // separa i caratteri
  stringa = stringa.join("  ");          // due spazi tra i caratteri
  stringa = stringa.toUpperCase();       // trasforma in maiuscolo
  return stringa;
}

console.log(spaceJam("ho 22 gatti e 33 cani nel giardino 1"));         // "C  A  N  E"
console.log(spaceJam("Hello World!"));  // "H  E  L  L  O  W  O  R  L  D  !"

// Direi che il tuo esercizio mostra che hai capito bene i passaggi fondamentali per trasformare una stringa in JavaScript:

// ✅ Punti positivi:

// Hai usato i metodi giusti (trim, split, join, toUpperCase).

// La sequenza logica delle operazioni è chiara: tagliare → dividere → unire → maiuscolo.

// Il codice è leggibile e ordinato.

// ⚠️ Piccoli errori:

// trim() elimina solo gli spazi ai bordi, non quelli interni → quindi non rispettava la consegna di eliminare tutti gli spazi.

// join(" ") inseriva un solo spazio, ma ne servivano due.

// All’inizio avevi provato con toUpperScale() (errore di metodo), ma poi hai corretto.

// ⭐ Valutazione complessiva: Sei sulla strada giusta, direi 7,5/10. Ti sei mosso bene con gli strumenti, hai solo bisogno di fare più attenzione ai dettagli della consegna (quanti spazi, che tipo di spazi, ecc.).

// Vuoi che ti proponga un paio di variazioni più avanzate dello stesso esercizio, per allenarti ancora meglio?

