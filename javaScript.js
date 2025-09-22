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

// 15 Agosto 2025
// /**************************************************************************************************************************** */
// Data una stringa, restituisci una versione confusa di quella stringa in cui ogni parola viene trasformata utilizzando i seguenti vincoli:

// La prima e l'ultima lettera delle parole rimangono al loro posto.
// Tutte le lettere tra la prima e l'ultima lettera vengono ordinate alfabeticamente.
// Le stringhe di input non conterranno punteggiatura e saranno interamente in minuscolo.


//Mio codice 
//Creo la funzione
function jbelmu(text) {
//Creo una costante con tutte le lettere e i numeri in minuscolo
    const caratteri = 'abcdefghijklmnopqrstuvwxyz0123456789';
//Creo una variabile dove andrà messo il risultato
    let risultato = '';
//Creo una variabile usando la lunghezza dei caratteri
    const randomCaratteri = caratteri.length;
//Creo un ciclo For per ciclare le lettere
    for (let i = 1; i < text.lenght-1; i++) {
//Creo una formual che crea lettere causali partendo dalla variabile sopra
      indiceCausale = Math.floor(Math.random() * randomCaratteri);
//Aggiungo il risultato nella variabile Risultato e prendo i caratteri da indice casuale
      risultato += caratteri.charAt(indiceCasuale);
    }
//Returno il risultato
  return risultato;
}

//Mando in console la stringa Persona
console.log(jbelmu("Persona"));

//Il codice di ChatGpt
//Crea una funzione
function jbelmu(text) {
//Fa ritornare il text che viene inserito come valore variabile
  return text
//Utilizza il metodo .split per divide le parole
    .split(" ") // dividiamo in parole
//Utilizza il metodo .map 
    .map(word => {
//Crea una condizione if che determina se le parole sono corte
      if (word.length <= 2) return word; // parole corte restano uguali
//Crea una variabile contenente l'indice del valore word 0 che corrisponde al primo numero
      const first = word[0];
//Creo una variabile conente l'indice del valore word ultimo 
      const last = word[word.length - 1];
//Prende la parola centrale, esclidendo i primi indici
      const middle = word.slice(1, -1).split("").sort().join("");
//Fa ritornare la parola scomposta
      return first + middle + last;
    })
//Inserisce degli spazi
    .join(" ");
}

// Crea un esempio in console
console.log(jbelmu("persona amico ciao"));
// Output: "paenors aioam cao"

// La tua prima versione non era corretta per il compito, perché:

// Errore di logica → stavi generando caratteri casuali invece di riordinare le lettere interne delle parole.

// Errore di sintassi → text.lenght è scritto male (corretto: text.length).

// Variabili non coerenti → usi lettaCausale e indiceCasuale ma non le dichiari o non corrispondono tra loro.

// 👉 Valutazione: 2/10 (l’idea di manipolare i caratteri c’era, ma il risultato finale non rispecchiava la consegna).

//Ho fatto schifo :)

// 16 Agosto 2025
// /**************************************************************************************************************************** */
// Date due stringhe, determina se sono anagrammi l'una dell'altra (contengono gli stessi caratteri in qualsiasi ordine).

// Ignora maiuscole e minuscole e spazi vuoti.

//Mio codice (sbagliato)
//Ho creato una funzione
function areAnagrams(stringa1, stringa2) {
//Ho creato una variabile che contenesse il messaggio finale
    let risultato = "";
//Ho creato una variabile che contenesse la stringa scompsta e una con la stringa2 scomposta
    const stringa1Scomposta = [];
    const stringa2Scomposta = [];
//Ho ciclato l'indice delle stringhe
    for (let i = 0; i < stringa1.length; i++) {
//Qui ho commesso un errore. stringa1[i].push(stringa1Scomposta) Non funziona, perché un carattere della stringa (stringa1[i]) è una lettera, non un array → 
// non puoi fare .push().
      stringa1[i].push(stringa1Scomposta);
    }
    for (let j = 0; j < stringa2.length; j++) {
      stringa2[j].push(stringa2Scomposta);
    }
//Ho messo in confronto con includes. Altro errore. Uso di includes stringa1Scomposta.includes(stringa2Scomposta) 
// non controlla se due array hanno lo stesso contenuto → serve un confronto più strutturato.
    if (stringa1Scomposta.includes(stringa2Scomposta)) {
      risultato = "Le due stringhe sono anagrammi";
    } else {
      risultato= "Le due stringhe non sono anagrammi"
    }
  return risultato;
}

console.log(areAnagrams("cane", "cane"));

//Codice ChatGpt analizzato
function areAnagrams(stringa1, stringa2) {
  // Normalizza le stringhe: minuscole e senza spazi
  const s1 = stringa1.toLowerCase().replace(/\s/g, "");
  const s2 = stringa2.toLowerCase().replace(/\s/g, "");

  // Se hanno lunghezze diverse, non possono essere anagrammi
  if (s1.length !== s2.length) return false;

  // Ordina i caratteri e confronta
  const sorted1 = s1.split("").sort().join("");
  const sorted2 = s2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(areAnagrams("cane", "neca"));   // true
console.log(areAnagrams("Cane", "Neca"));   // true (ignora maiuscole)
console.log(areAnagrams("cane", "cani"));   // false

//Valutazione: 

// Hai fatto un buon tentativo 👍
// Hai dimostrato di aver capito che:

// dovevi “scomporre” le stringhe per confrontarle,

// serviva un controllo finale per stabilire se erano anagrammi.

// ⚠️ Però ci sono alcuni errori tecnici che ti hanno bloccato:

// hai usato .push() su un carattere (che non è un array),

// hai confrontato gli array con .includes() (che non verifica uguaglianza tra due array completi),

// nei cicli for hai confrontato con la stringa intera invece che con .length.

// 👉 In pratica hai la giusta intuizione, ma devi ancora perfezionare il modo in cui trasformi le stringhe e confronti i dati.

// Se fossi al livello di un esercizio da principiante direi che sei sul 6/10:

// 10 per l’idea,

// 6 per la parte tecnica da migliorare.

// 17 Agosto 2025
// /**************************************************************************************************************************** */
// Dato un array di numeri e un target intero, trova due numeri univoci nell'array che sommati diano il valore target. 
// Restituisci un array con gli indici di quei due numeri, oppure "Target non trovato" 
// se non ci sono due numeri che sommati danno il valore target.

// L'array restituito dovrebbe avere gli indici in ordine crescente.

//Mia soluzione
//Ho creato un array di numeri
const arrayNumeri = [15,5,4,61,52,1,2];
//Ho creato una variabile target
const target = 20;
//>Ho creato una funzione che possa sommare gli indici e confrontarli con il target
function findTarget(arr, target) {
//Creo un' array che è la somma che dovrà contenere gli indici dei valori sommati
  let arraySomma = [];
//Ciclo con un for tutta la lunghezza dell'array
  for (let i = 0; i < arr.length; i++) {
//Creo una variabile che possa calcolare l'indice con l'indice incrementato. 
//Qui sbaglio perchè sta calcolando l'indice con il successivo. 
//Inoltre dovrebbe dommare l'indice 0 con il 1,2,3,4,5 e così via 
    let somma = arr[i] + arr[++i];
//Creo un if che mette in paragone la somma con il target e, in caso di true, arraySomma diventerebbe somma
    if (somma === target) {
      arraySomma = somma;
    } else {
      console.log("Target not found")
    }
  }  
//Ritorno il valore
  return arraySomma;
}

console.log(findTarget(arrayNumeri, 10));

//Soluzione ChatGpt
//ChatGpt crea comunque funzione
function findTarget(arr, target) {
//Chat crea un ciclo for e ne annida uno al suo interno, così da sommare il numero successivo
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
//Se la somma dei valori dei due cicli è uguale al target,  allora ritorna i due indici 
      if (arr[i] + arr[j] === target) {
        return [i, j]; // j > i quindi sono già in ordine crescente
      }
    }
  }
//Altrimenti
  return "Target non trovato";
}

// Esempi
const arrayNumerii = [15, 5, 4, 61, 52, 1, 2];

console.log(findTarget(arrayNumerii, 17)); // [0, 6] → (15 + 2)
console.log(findTarget(arrayNumerii, 20)); // "Target non trovato"

//Valutazione:
// 👍 Punti positivi

// Hai già centrato l’idea di ciclare nell’array e calcolare una somma.

// Hai intuito che devi fare un confronto col target.

// Hai messo il return dentro la funzione → quindi già pensi bene in ottica di riutilizzo del codice.

// ⚠️ Punti da correggere

// Uso di arr[++i]

// Questo incrementa i due volte: una nel ciclo for, una nel ++i.

// Risultato: salti numeri e rischi errori fuori indice.

// Logica limitata

// Confronti solo elementi consecutivi, mentre la richiesta è di trovare due qualunque numeri nell’array.

// Gestione del risultato

// Inizi arraySomma come array ([]) ma poi lo riassegni a un numero (somma).

// Non ritorni gli indici come chiesto, ma la somma.

// Messaggi “Target not found”

// Stampa "Target not found" ad ogni iterazione sbagliata, quindi rischi di avere molti messaggi in console.

// Meglio stamparlo solo una volta alla fine, se non trovi nulla.

// 📝 Valutazione finale

// Direi che il tuo primo codice è un buon punto di partenza (hai intuito bene il cuore del problema: sommare e confrontare), ma:

// la logica è troppo ristretta (solo coppie vicine),

// ci sono errori tecnici (++i),

// e manca l’aderenza ai requisiti (servono gli indici, non la somma).

// 👉 In una scala da 1 a 10 per aderenza al problema, io ti darei 4,5/10:

// non è corretto, ma hai mostrato di aver capito la strada giusta e sei a metà dell’idea.
