/*
Ceci est la classVoiture 
utilisée par le programme parcAuto
*/
class Car {
  constructor(registration, color, weight, power, capacity, places) {
    this.registration = registration;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.capacity = capacity;
    this.places = places;
    this.fuel = 5;
    this.insurance = false;
    this.message = "Bienvenu dans votre nouveau véhicule";
  }
  //Message d'acceuil du tableau de bord
  welcome() {
    return this.message;
  }
  // Fiche technique
  notice() {
    if (this.insurance == false) {
      return `FICHE TECHNIQUE
    Ce véhicule est immmatriculé ${this.registration}
    Il pèse ${this.weight} Kg pour une puissance de ${this.power} chevaux.
    Il peut recevoir ${this.places} personnes et contenir ${this.capacity} litres d'essence.`;
    } else if (this.insurance == true) {
      return `
    PARFAIT Ce véhicule est bien assuré
    Vous pouvez démarrer`;
    }
  }
  //checking de l'assurance
  checkInsurance() {
    if (this.insurance == false) {
      return `NON`;
    } else {
      return `OUI`;
    }
  }
  //Tableau de bord
  dashboard() {
    return `
    TABLEAU DE BORD
    Ce véhicule ${this.color} contient ${this.fuel} litres d'essence
    Présence d'assurance = ${this.checkInsurance()}
    TAPEZ
    1 pour changer de couleur de carrosserie
    2 pour mettre de l'essence 
    3 pour partir avec le véhicule
    4 pour prendre une assurance
    5 pour rentrer au garage (quitter le test)`;
  }
  // Repeindre le véhicule
  checkColor() {
    return `
    Le véhicule est actuellement ${this.color}
    Veuillez definir une nouvelle couleur de carrosserie
    ou la même couleur pour effectuer un rafraichissement`;
  }
  newColor() {
    return `
    Merci d'avoir changé la couleur du véhicule
    Ce ${this.color} est magnifique!`;
  }
  sameColor() {
    return `
    Merci d'avoir rafraichi la couleur du véhicule!`;
  }
  //Remettre de l'essence
  remainFuel() {
    return `
    Il y a ${this.fuel} litres dans le reservoir 
    pour une capacité de ${this.capacity} litres.
    Combien de litres d'essence voulez-vous ajouter?`;
  }
  checkFuel() {
    if (this.newFuel <= parseInt(this.capacity) - parseInt(this.fuel)) {
      this.fuel = parseInt(this.newFuel) + parseInt(this.fuel);
      return `
    Ajout de ${this.newFuel} litres d'essence
    Le réservoir contient maintenant ${this.fuel} litres`;
    } else {
      return `
    Vous ne pouvez pas depasser la capacité maximale du réservoir!!.`;
    }
  }
  //Se déplacer
  move() {
    let possibleDist = (this.fuel / this.consumption) * 100;
    if (this.distance >= possibleDist) {
      return `
    Vous n'avez pas assez d'essence pour effectuer ce trajet`;
    } else {
      this.fuel = parseFloat(this.fuel - this.consumption);
      return `
    Vous avez consommé ${this.consumption} litres, 
    il vous reste: ${this.fuel} litres dans votre réservoir`;
    }
  }
}
