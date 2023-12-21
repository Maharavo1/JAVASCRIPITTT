const prompt = require('prompt-sync')();
let nombreMystere = 4;
let essais = 3;
while (essais > 0) {
  const reponse = parseInt(prompt("Quel est le nombre mystère ? :"));
  if (reponse === nombreMystere) {
    console.log("Bravo ! Vous avez trouvé le nombre mystère ");
    break;
  }
   if (reponse < nombreMystere) {
    console.log("Trop petit !");
  } if(reponse>nombreMystere) {
    console.log("Trop grand !");
  }
  essais--
}
if (essais === 0) {
  console.log("Vous avez perdu , la bonne reponse est :"+nombreMystere );
}