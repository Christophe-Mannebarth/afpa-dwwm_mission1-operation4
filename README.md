# afpa-dwwm_mission1-operation4

Résultat: https://christophe-mannebarth.github.io/afpa-dwwm_mission1-operation4/

Programmes orientés objet : Gestion des vehicules

3.1 CLASSE MÉTIER ET APPLICATION DE TYPE CONSOLE
  L'application minimale envisagée ici comprendra la définition 
  de la classe ‘Métier' (Voiture) et un programme procédural de type console (parcAuto) 
  utilisant cette classe.
  Comme on souhaite que la classe Métier reste indépendante de son usage par une 
  application particulière, elle n'effectue aucun affichage direct ; 
  les messages générés sont stockés dans un attribut accessible par le getter correspondant, 
  et c'est bien le programme principal qui saura les récupérer et les restituer à 
  l'utilisateur comme bon lui semble (ici, simples affichages séquentiels sur la console). 
  En cas d'erreur importante, la classe Métier pourra aussi lever une Exception 
  (gérée dans le programme principal).

3.2 définition de la classe ‘Métier' (Voiture)
classe représentant (de manière simplifiée !) une voiture du parc automobile de l'entreprise cliente.

  Attributs privés:
  Les différents attributs privés nécessaires pour représenter les données caractéristiques 
  d'un véhicule se limitent pour l'instant à :

    • Immatriculation – string
    • Couleur – string
    • Poids – int
    • Puissance – int
    • Capacité du réservoir – float
    • Niveau d'essence – float
    • Nombre de places – int
    • Assuré – bool
    • Message au tableau de bord – string

  Constructeurs
  Un constructeur par défaut n'a pas de sens dans cette application.
  On peut créer une voiture connaissant au moins les données qui ne pourront pas changer :

    • Immatriculation
    • Couleur
    • Poids
    • Puissance
    • Capacité du réservoir
    • Nombre de places

  A la livraison, le réservoir du véhicule est fourni avec 5 litres de carburant, 
  et le véhicule n'est pas assuré (mais le tableau de bord peut déjà afficher un message d'accueil).

    Propriétés (getters et setters)
    La classe Voiture expose des accesseurs standards en lecture (sans contrôle) pour chacun des attributs privés.
    Pour ces véhicules, seul l'indicateur d'assurance peut être affecté directement de l'extérieur. 
    L'accesseur en écriture correspondant effectuera donc :

      • Mise à jour de l'indicateur booléen d'assurance.
      • Génération d'un message pour le tableau de bord.

  Méthode exposée : Repeindre la voiture
  La classe Voiture expose la méthode repeindre() qui admet en paramètre le libellé de la nouvelle couleur.
  Si cette nouvelle couleur est identique à la couleur courante, la méthode génère simplement un 
  message remerciant pour ce rafraîchissement ; s'il s'agit d'une couleur différente, 
  il la mémorise dans l'attribut correspondant et génère un autre message de remerciement. 
  Cette méthode pourrait aussi bien retourner un code d'erreur, par exemple un booléen true si tout va 
  bien ou false sinon.

  Méthode exposée : Faire l'appoint d'essence
  La classe Voiture expose la méthode mettreEssence() qui admet en paramètre 
  une quantité de carburant à ajouter au réservoir.
  Cette méthode effectue tout d'abord un test pour savoir si cette quantité est compatible avec 
  le niveau d'essence courant du véhicule ; si tout va bien, elle ajoute le carburant et génère 
  un message de feed-back, sinon, elle refuse cet appoint de carburant et génère un message d'erreur.
  Cette méthode doit retourner au programme appelant le nouveau niveau de carburant.

  Méthode exposée : Se déplacer
  La classe Voiture expose la méthode seDeplacer() qui admet en paramètres la distance 
  parcourue en km et la vitesse moyenne du déplacement.
  En fonction de ces deux paramètres, la méthode calcule tout d'abord la consommation de 
  carburant selon la règle de gestion (très simplifiée) :

    • Consommation de 10 l aux 100 km en ville, soit à une vitesse moyenne inférieure à 50 km/h ;
    • Consommation de 5 l aux 100 km en sur route, soit à une vitesse moyenne comprise entre 50 et 90 km/h ;
    • Consommation de 8 l aux 100 km en sur autoroute, soit à une vitesse moyenne comprise entre 90 et 130 km/h ;
    • Consommation de 12 l aux 100 km pour une vitesse moyenne supérieure à 130 km/h 
    (et on ne parle pas des retraits de points de permis...) ;

    Conseil
    Ce calcul élémentaire de consommation pourrait bien faire l'objet d'une nouvelle méthode privée 
    qui serait alors réutilisable par la classe elle-même...

  D'après cette consommation nécessaire de carburant, la méthode détermine si ce trajet est possible en 
  fonction du niveau d'essence courant. Si ce n'est pas le cas, elle génère un message d'erreur. 
  Et si tout va bien, elle déduit la consommation calculée et génère un message indiquant cette consommation.

  Méthode exposée redéfinie toString()
  Il est de bonne pratique de redéfinir dans chaque classe la méthode toString() héritée de la classe Object.
  Dans notre classe Voiture, cette méthode toString() doit retourner un libellé rappelant 
  simplement l'immatriculation, la puissance et la couleur du véhicule.

3.3 Tests fonctionnels de base
  Le programme principal (parcAuto) se limitera à tester le comportement d'objets de type Voiture. 
  Il se contentera donc d'instancier au moins un véhicule puis de modifier certaines propriétés 
  et enfin d'invoquer les méthodes exposées afin de simuler la vie de véhicules.
  A vous de définir votre jeu d'essai de manière à bien tester le code de votre classe Métier.
  Conseil
  Comme les actions sur les objets Voiture ne provoquent aucun affichage, 
  le programme principal doit systématiquement récupérer le message interne du véhicule pour l'afficher 
  sur la console.
