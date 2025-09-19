// 11 Agosto 2025
/**************************************************************************************************************************** */
// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

//Soluzione fatta da me
function isBalanced(valore) {
  let vocaliSinistra = [];
  let vocaliDestra = [];
  let partePiuVocali = "";
  let lunghezza = valore.length;
  let indiceCentrale = Math.floor(lunghezza / 2);

  for (let i = 0; i < lunghezza; i++) {
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
  if (vocaliSinistra.length > vocaliDestra.length) {
    partePiuVocali = ("La parte della stringa con più vocali è la sinsitra")
  } else if (vocaliSinistra.length < vocaliDestra.length) {
    partePiuVocali = ("La parte della stringa con più vocali è la destra")
  } else {
    partePiuVocali = ("Sono uguali")
  }
}
  return partePiuVocali;
}

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
