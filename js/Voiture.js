/*
Ceci est la classVoiture 
utilisée par le programme parcAuto
*/

//Classe Parent Voiture
class Car {
  constructor(registration, color, power, weight, capacity, places) {
    this.registration = registration;
    this.color = color;
    this.power = power;
    this.weight = weight;
    this.capacity = capacity;
    this.places = places;
    this.fuel = 5;
    this.insurance = false;
  }
  toString() {
  return `
    Références du Modele: (${this.registration}, ${this.color}, ${this.power})`;
  }
  //Fiche technique
  notice() {
  return `
    FICHE TECHNIQUE
    Ce véhicule pèse ${this.weight} pour une puissance de ${this.power} chevaux.
    Il peut recevoir ${this.places} personnes et contenir ${this.capacity} litres d'essence.`;
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
    Ce véhicule ${this.color.toUpperCase()} contient ${this.fuel} litres d'essence
    Présence d'assurance = ${this.checkInsurance()}
    TAPEZ
    1 pour changer de couleur de carrosserie
    2 pour mettre de l'essence 
    3 pour partir avec le véhicule
    4 pour prendre une assurance
    5 pour rentrer au garage (quitter le test)`;
  }
  // Repeindre la voiture
  checkColor() {
  return `
    Le véhicule est actuellement ${this.color.toUpperCase()}
    Veuillez definir une nouvelle couleur de carrosserie
    ou la même couleur pour effectuer un rafraichissement`;
  }
  repaint() {
    if (this.newColor != this.color) {
      this.color = this.newColor;
      return `
    Merci d'avoir changé la couleur du véhicule
    Ce ${this.color} est magnifique!`; 
    } else {
      return `
    Merci d'avoir rafraichi la couleur du véhicule!`
    } 
  }
  // Faire l'appoint d'essence
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
  // Se déplacer
  move() {
    if (this.speed < 50) {
      this.consumption = (this.distance / 100) * 10;
    } else if (50 <= this.speed && this.speed <= 90) {
      this.consumption = (this.distance / 100) * 5;     
    } else if (91 <= this.speed && this.speed <= 130) {
      this.consumption = (this.distance / 100) * 8; 
    } else if (131 <= this.speed) {
      this.consumption = (this.distance / 100) * 12;
    }
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

//Classe enfant Modèle
class Model extends Car {
  constructor(registration, color, power, brand, year) {
      super(registration, color, power);
      this.brand = brand;
      this.year = year;
  }
  toString() {
    return `
    Bienvenu dans votre ${this.brand}
    Année de sortie: ${this.year} ` +
    super.toString() 
  }
}
