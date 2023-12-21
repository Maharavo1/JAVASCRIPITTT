function compteNombresPairs(tableau) {
    var result = 0;
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            result += tableau[i];
        }
    }
    return compte;
}
// Exemple d'utilisation
var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nombreDePairs = compteNombresPairs(tableau);
console.log( nombreDePairs);
