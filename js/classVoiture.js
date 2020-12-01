/*
Ceci est la classe Voiture utilisée par le programme parcAuto
*/
class Car {
  constructor(registration,color,weight,power,capacity,places,) {
    this.registration = registration; 
    this.color = color; 
    this.weight = weight; 
    this.power = power; 
    this.capacity = capacity; 
    this.places = places; 
    this.fuel = 5; 
    this.insurance = Boolean(false); 
    this.message = "Bienvenu dans votre nouveau véhicule"; 
    this.newFuel = 0;
    this.distance = 0;
    this.speed = 0;
    this.consumption = 0;
  }
  //Message d'acceuil du tableau de bord
  get welcome() {
    return this.getWelcome();
  }
  getWelcome() {
    return this.message;
  }
  // Fiche technique
  get notice() {
    if (this.insurance == false) {
    return this.getNotice1();
    } else if (this.insurance == true) {
      return this.getNotice2(); 
    }
  }
  getNotice1() {
    return `FICHE TECHNIQUE
    Ce véhicule immmatriculé ${this.registration} est ${this.color}
    Il pèse ${this.weight}Kg pour une puissance de ${this.power} chevaux.
    Il peut recevoir ${this.places} personnes et contenir ${this.capacity} litres d'essence.
    Il est fourni avec ${this.fuel} litres d'essence.
    ATTENTION ce véhicule n'est pas assuré!`
  }
  getNotice2() {
    return `
    PARFAIT Ce véhicule est bien assuré
    Vous pouvez démarrer`
  }
  //Assurance
  set setInsurance(setInsurance) {
    return this.insurance = setInsurance;
  }
  //Tableau de bord
  get dashboard() {
    return this.getDashboard();
  }
  getDashboard() {
    return `TABLEAU DE BORD
    Ce véhicule ${this.color} contient ${this.fuel}  litres d'essence
    TAPEZ
    1 pour changer de couleur de carrosserie
    2 pour mettre de l'essence 
    3 pour partir avec le véhicule
    4 pour rentrer au garage (quitter le test)`;
  }
  // Repeindre le véhicule
  get logColor() {
    return this.getLogColor();
  }
  getLogColor() {
    return `
    Le véhicule est actuellement ${this.color}
    Veuillez definir une nouvelle couleur de carrosserie
    ou la même couleur pour effectuer un rafraichissement`
  }  
  set setColor(setColor) {
    return this.color = setColor;
  }
  //Remettre de l'essence
  get logFuel() {
    return this.getLogFuel();
  }
  getLogFuel() {
    return `
    Il y a ${this.fuel} litres dans le reservoir 
    pour une capacité de ${this.capacity} litres.
    Combien de litres d'essence voulez-vous ajouter?`
  }
  set addFuel(addFuel) {
    return this.newFuel = addFuel;
  }
  get errorFuel() {
    if (this.newFuel <= parseInt(this.capacity) - parseInt(this.fuel)) {
      this.fuel = parseInt(this.newFuel) + parseInt(this.fuel);
      return this.getOkFuel();
    } else {
        return this.getErrFuel();
    }
  }     
  getOkFuel() {
    return `
    Ajout de ${this.newFuel} litres d'essence
    Le réservoir contient maintenant ${this.fuel} litres`
  }
  getErrFuel() {
    return `
    Vous ne pouvez pas depasser la capacité maximale du réservoir!!.` 
  }
  set setFuel(setFuel) {
    return this.fuel = parseInt(setFuel) + parseInt(this.fuel);
  }
  //Calculer la consommation d'essence
  set distKm(distKm) {
    return this.distance = distKm;
  }
  set speedKm(speedKm) {
    return this.speed = speedKm;
  }
  set consumKm(consumKm) {
    return this.consumption = consumKm;
  }
  //Se déplacer
  get move() {
    let possibleDist = (this.fuel / this.consumption) * 100;
    if (this.distance >= possibleDist) {
        return this.getNoMove();
    } else {
        this.fuel = parseFloat(this.fuel - this.consumption);
        return this.getMove();
    }
  }
  getNoMove() {
    return `
    Vous n'avez pas assez d'essence pour effectuer ce trajet`
  }
  getMove() {
    return `
    Vous avez consommé ${this.consumption} litres, il vous reste: ${this.fuel} litres dans votre réservoir`
  }
}


