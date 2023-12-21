// Sélectionnez les éléments par leurs ID
var ajouterBouton = document.getElementById("ajouterBouton");
var supprimerBouton = document.getElementById("supprimerBouton");
var texteAajouter = document.getElementById("texteAajouter");
var resultat = document.getElementById("resultat");

// Initialisez une variable pour stocker les textes ajoutés
var textesAjoutes = "";

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Ajouter"
ajouterBouton.addEventListener("click", function() {
    // Récupérez le texte saisi par l'utilisateur
    var texte = texteAajouter.value;

    // Concaténez le nouveau texte avec les textes précédents
    textesAjoutes += texte + "<br>";

    // Mettez à jour le contenu de l'élément résultat
    resultat.innerHTML = textesAjoutes;

    // Effacez le champ de texte
    texteAajouter.value = "";
});

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton "Supprimer"
supprimerBouton.addEventListener("click", function() {
    // Réinitialisez les textes ajoutés et le contenu de l'élément résultat
    textesAjoutes = "";
    resultat.innerHTML = "";
});
