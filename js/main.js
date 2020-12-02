/*
Ceci est le programme parcAuto
fonctionnant avec la classVoiture
*/
let car1 = new Car("AA-229-CD", "BLEU", 1576, 90, 45, 5);
let reg = new String("AA-229-CD");
let col = new String("BLEU");
let pow = new String("90");

try {
  car1.insurance;
} catch (e) {
  alert(e.message);
}
// console.log(car1.toString());
console.log(car1.welcome());
console.log(car1.notice());
console.log(car1.dashboard());

let choice = null;
while (choice != 5) {
  choice = prompt(`TAPEZ votre choix (1, 2, 3, 4 ou 5)`);
  if (choice > 0 && choice <= 4) {
    switch (choice) {
      case "1": //Couleur du véhicule
        console.log(`Vous sortez le pistolet à peinture`);
        console.log(car1.checkColor());

        let newColor = prompt("TAPEZ la couleur voulue");
        console.log(`Vous peignez le véhicule en ${newColor.toUpperCase()}`)
        car1.newColor = newColor.toUpperCase();

        console.log(car1.repaint());
        console.log(car1.dashboard());
        break;

      case "2": // Mettre de l'essence
        console.log(`Vous remplissez le reservoir`);
        console.log(car1.remainFuel());

        let newFuel = prompt(`Tapez le nombre de litres d'essence désirés.`);
        console.log(`Vous demandez ${newFuel} litres`);
        car1.newFuel = newFuel;

        console.log(car1.checkFuel());
        console.log(car1.dashboard());
        break;

      case "3": // Se déplacer
        if (car1.insurance == true) {
          console.log(`Vous préparez votre itinéraire`);

          let distance = prompt("Combien de Km voulez-vous parcourir?");
          console.log(`Vous voulez faire ${distance} Km`);
          car1.distance = distance;
          let speed = prompt("Entrez votre vitesse en Km/h");
          console.log(`En roulant en moyenne à ${speed} Km/h`);
          car1.speed = speed;
          let consumption = "";
          car1.consumption = consumption;

          console.log(car1.move());
          console.log(car1.dashboard());
        } else {
          {
            console.error(`
        Vous vous êtes fait arreter par la police!
        Vous recevez une amende de 135€ pour defaut d'assurance...
        Maman va pas etre contente!!`
        );
          }
        }
        break;

      case "4": // Prendre une assurance
        if (car1.insurance == false) {
          car1.insurance = true;
          console.log(`Vous souscrivez à une assurance`);
          console.log(car1.dashboard());
        } else {
          alert(`Vous etes déja assuré!`);
        }
        break;
    }
  } else if (choice == 5) {
    console.log(`
    Vous rentrez au garage...
    Merci d'avoir utilisé notre programme!
    La ligue du Code vous salue bien!`);
  }
}
