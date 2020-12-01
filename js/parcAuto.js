/*
Ceci est le programme parAuto
*/
let car1 = new Car("AA-229-CD", "bleu", 1576, 90, 45, 5);

try {
  car1.setInsurance; 
} catch (e) {
  alert(e.message);
}

console.log(car1.welcome);
console.log(car1.notice);

let choice = parseInt(0);

while (choice != 1) {
  choice = prompt(`TAPEZ 1 pour prendre une assurance`);
  //Si 1 est rentré
  if (choice == 1) {
    //On défini l'assurance sur true via le Setter setInsurance
    car1.setInsurance = Boolean(true);
    /*on affiche dans la console un message de confirmation
    et on quitte la boucle*/
    console.log(car1.notice);

    /*si autre chose que 1 est rentré on affiche dans
    la console un message d'erreur*/
  } else {
    {throw new Error(`
    Vous vous êtes fait arreter par la police!
    Vous recevez une amende de 90€ pour defaut d'assurance
    Vous rentrez au garage`) ;}
  }
}

console.log(car1.dashboard);

while (choice != 4) {
  choice = prompt(`TAPEZ votre choix (1, 2, 3 ou 4)`);
  if (choice > 0 && choice <= 3) {
    switch (choice) {
      case "1":
        console.log(`Vous sortez le pistolet à peinture`);
        console.log(car1.logColor);
        
        let newColor = prompt("TAPEZ la couleur voulue");
        car1.setColor = newColor;

        if (newColor != this.color) {
          this.color = newColor;
          if (
            confirm(`
              Merci d'avoir changé la couleur du véhicule
              Ce ${this.color} est magnifique!
              OK pour retourner au tableau de bord
              ANNULER pour rentrer le vehicule au garage`)
          ) {
            console.log(car1.dashboard);
          } else {
            window.location.reload();
          }
        } else {
          if (
            confirm(`
              Merci d'avoir rafraichi la couleur du véhicule!
              OK pour retourner au tableau de bord
              ANNULER pour rentrer le vehicule au garage`)
          ) {
            console.log(car1.dashboard);
          } else {
            window.location.reload();
          }
        }
        break;
      case "2":
        console.log(`Vous remplissez le reservoir`);
        console.log(car1.logFuel);

        let newFuel = 0;
        newFuel = prompt(`Tapez le nombre de litres d'essence désirés.`);

        console.log(`Vous demandez ${newFuel} litres`);

        car1.addFuel = newFuel;

        console.log(car1.errorFuel);
        console.log(car1.dashboard);
        break;
      case "3":
        console.log(`Vous préparez votre itinéraire`);

        let distance = prompt("Combien de Km voulez-vous parcourir?");

        console.log(`Vous voulez faire ${distance} Km`);

        car1.distKm = distance;

        let speed = prompt("Entrez votre vitesse en Km/h");

        console.log(`En roulant en moyenne à ${speed} Km/h`);

        car1.speedKm = speed;

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
        car1.consumKm = consumption;

        alert(car1.move);
        console.log(car1.dashboard);
        break;
    }
  } else if (choice == 4) {
    console.log(`Vous rentrez au garage`);
    if (
      confirm(`
      OK pour terminer 
      ou ANNULER pour recommencer l'opération`)
    ) {
      text = `
      Merci d'avoir utilisé notre programme!
      La ligue du Code vous salue bien!
      Cliquez sur OK pour quitter`;

      alert(text);
    } else {
      window.location.reload();
    }
  }
}