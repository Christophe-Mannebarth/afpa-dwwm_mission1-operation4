/*
Ceci est le programme parcAuto
fonctionnant avec la classVoiture
*/
let car1 = new Car("AA-229-CD", "bleu", 1576, 90, 45, 5);

try {
  car1.setInsurance;
} catch (e) {
  alert(e.message);
}

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
        car1.color = newColor;

        if (newColor != this.color) {
          this.color = newColor;
          console.log(car1.newColor());
          console.log(car1.dashboard());
        } else {
          console.log(car1.sameColor());
          console.log(car1.dashboard());
        }
        break;

      case "2": // Mettre de l'essence
        console.log(`Vous remplissez le reservoir`);
        console.log(car1.remainFuel());

        let newFuel = 0;
        newFuel = prompt(`Tapez le nombre de litres d'essence désirés.`);
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
          let speed = prompt("Entrez votre vitesse en Km/h");
          console.log(`En roulant en moyenne à ${speed} Km/h`);

          let consumption = "";
          if (speed < 50) {
            consumption = (distance / 100) * 10;
            console.log(`Vous allez consommer 10 litres aux 100km`);
          } else if (50 <= speed && speed <= 90) {
            consumption = (distance / 100) * 5;
            console.log(`Vous allez consommer 5 litres aux 100km`);
          } else if (91 <= speed && speed <= 130) {
            consumption = (distance / 100) * 8;
            console.log(`Vous allez consommer 8 litres aux 100km`);
          } else if (131 <= speed) {
            consumption = (distance / 100) * 12;
            console.log(`Vous allez consommer 12 litres aux 100km`);
          }
          car1.consumption = consumption;

          console.log(car1.move());
          console.log(car1.dashboard());
        } else {
          {
            throw new Error(`
        Vous vous êtes fait arreter par la police!
        Vous recevez une amende de 90€ pour defaut d'assurance
        Vous rentrez au garage (rafraichissez la page)`);
          }
        }
        break;

      case "4": // Prendre une assurance
        if (car1.insurance == false) {
          car1.insurance = true;
          console.log(`Vous souscrivez à une assurance`);
          console.log(car1.notice());
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
