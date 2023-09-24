"use strict";


let prenom = ["Melodie", "Valentine", "Melanie", "Sebastien", "Gaspard", "Daniel", "Geraldine", "Alexandre", "Chloe", "Tom", "Paula", "David", "Claudia"];
let caracteristique = ["Nerd", "Blonde", "Brun", "Sportif", "Roux", "Ambitieux", "Courageux", "Peureux", "Frele", "Rapide", "Intelligent", "Sot", "Blageur", "Musclé", "Solidaire", "Gentil"];
let tueur = ["Jason", 100];
let survivants = []; // creations variables survivants et survivantsmorts 
let survivantsMorts= [];
let probaSurvivants = [[0.2, 0.8, 0.5], [0.3, 0.6, 0.4], [0.2, 0.7, 0.5], [0.1,0.5, 0.6], [0.4, 0.5, 0.7]];  


//ici je fais le tableau avec des prenoms au hasard parmis lesquels le nom des survivants va être choisi aleatoirement
function genererPrenomAleatoire() {
    // creation de la fonction qui va generer aleatoirement le nom de personnages
        const aleatoire= Math.floor(Math.random() * prenom.length);
    // utilistation de la formule de maths pour avoir un prenom aleatoire. Math.floor = permet d'avoir un nombre entier lors de la formule de maths.
    //math.random = permet de generer un nombre aleatoire
    //personnages.length = longeur du tableau 
        return prenom[aleatoire]; // donne au final un pernom aleatoire
    }

    let personnage= [] //creation d'une variable 'personnage' 
    for (let i=0; i<5; i++){ //creation d'une boucle qui permet d'avoir 5 prenoms de personnages car i commence de 0 et va jusqu'à 4 (execution de la boucle 5 fois)
        const prenom = genererPrenomAleatoire(); // à chaque fois que la boucle tourne, la fonction genererPrenomAleatoire est appelée et le resultat devient la variable 'prenom'
        personnage.push(prenom); //chaque prenom est ajouté (avec .push) aux autres prenoms
    }
    // seul probleme, parfois les prenoms d'affichent plusieurs fois dans la liste (ex la console affiche : Les personnages sont : Melanie, Daniel, Sebastien, Sebastien, Chloe, Geraldine)
    // j'ai essayé de trouver une solution mais je n'ai pas reussi.


    function genererCaracteristiqueAleatoire() {
        // creation de la fonction qui va generer aleatoirement les caracteristiques des personnages
            const aleatoire= Math.floor(Math.random() * caracteristique.length);
        // utilistation de la formule de maths pour avoir une caracteristique aleatoire. Math.floor = permet d'avoir un nombre entier lors de la formule de maths.
        //math.random = permet de generer un nombre aleatoire
        //caracteristique.length = longeur du tableau 
            return caracteristique[aleatoire]; // donne au final une caracteristique aleatoire
        }
    
        let caracteristiques= []  //creation de la variable caracteristiques pour pouvoir generer aleatoirement les caracteristiques
        for (let i=0; i<5; i++){ //creation d'une boucle qui permet d'avoir 5 caracteristique de personnages car i commence de 0 et va jusqu'à 4 (execution de la boucle 5 fois)
            const caracteristique = genererCaracteristiqueAleatoire(); // à chaque fois que la boucle tourne, la fonction genererPrenomAleatoire est appelée et le resultat devient la variable 'prenom'
            caracteristiques.push(caracteristique); //chaque caracteristique est ajouté (avec .push) aux autres caracteristiques
        }
        
        console.log("Les caracteristiques sont : "); //pour afficher dans la console les caracteristiques. J'ai essayé de les ajouter aux prenoms pour qu'ils s'affichent direct lors des combats mais je n'ai pas réussi.
        console.log(caracteristiques.join(", ")); //pour faire une concatenation







//creation de la class survivants pour definir les survivants et leurs caracteristiques
class Personnage {
    constructor(nom, caracteristiques, probabiliteMort, probabiliteDegat, probabiliteMortEnDegat) {
    // constructor pour attribuer des caracteristiques aux survivants
        this.nom=nom;
        this.caracteristiques=caracteristiques;
        this.probabiliteMort=probabiliteMort; 
        this.probabiliteDegat=probabiliteDegat; 
        this.probabiliteMortEnDegat=probabiliteMortEnDegat; //probabilité de mourir en infligeant des degats
       
    }     
}


//creation de la fonction combat qui regroupe les differentes possibilités pdt le combat (mort de jason, mort d'un/plusieurs survivants etc.)

function combat() {
    let deathCount= ""; //pour compter le nbr de survivants morts

    if (survivants.length >= 1 && tueur[1] > 0 ){ //si tout le monde est vivant
        let survivantAleatoire = Math.floor(Math.random() * survivants.length); //survivant aleatoire attaque
        let survivantRan = survivants[survivantAleatoire];
        attaqueDuTueur(survivantRan, survivantAleatoire) 
    
    } 
    else if (survivants.length>=1 && tueur[1] <=0) { //si un ou plusieurs survivant est vivant et que jason est mort 
        console.log("Jason est mort.");
    for (let i = 0; i<survivantsMorts.length; i++){
        let pt= survivantsMorts[i];

        //selon le nbr de survivants morts
        if (survivantsMorts.length >1) {
            if (pt==survivantsMorts[survivantsMorts.length - 1]){
                deathCount += ` et ${pt}. `;
            
            }
            else if (pt== survivantsMorts[survivantsMorts.length -2]){
               deathCount =+ `${pt}` 
            }
            else {
                deathCount += `${pt}, `;
            }
        }
        else {
            deathCount += `${pt}`
        }

            }
        
    
    

    if (!deathCount) { //si il n'y a pas de morts (utilisation de ! pour dire que la variable est fausse) alors, 'jason a été tué et les autres st vivants'
        console.log("Jason a été tué. Tous les survivants sont en vie");
    }
    else {
        console.log("Jason a été tué et rip : ", survivantsMorts ); //si jason est mort mais que un ou plusieurs survivants est mort
    }
} 
else if (survivant.length ==0 && tueur[1] > 0) {   //si tous les survivants sont mort et que Jason est vivant
   console.log("Jason est vivant et les survivants sont morts.");
}
else if (survivant.length == 0 && tueur[1]<= 0){ //si tout le monde est mort, utilisation de tueur[1] car tans le tableau, la deuxieme variable est la 1.
    console.log("Jason et tous les survivants sont morts.");
}

}
   

function attaqueDuTueur(survivantAleatoire, nbrSurvivantAle) { //creation d'une fonction de : jason qui attaque les survivants en fonction de la probabilité de mourir 
    let valeurAleatoire = Math.random()

    if (valeurAleatoire < survivantAleatoire ["probabiliteMort"]) {
        console.log("Jason a tué", survivantAleatoire ["nom"]);
        survivantsMorts.push(survivantAleatoire ["nom"]); //utilisation de .push pour rajouter le survivant aux  survivants morts
        survivants.splice(nbrSurvivantAle, 1);  //utilisation de .splice pour retirer le survivant du tableau des survivants
    }
    else if (valeurAleatoire < survivantAleatoire ["probabiliteMort"] + survivantAleatoire["probabiliteDegat"]) {
        console.log(survivantAleatoire["nom"], "esquive l'attaque de Jason et inflige 10 pts de degats à Jason");
        tueur[1] -= 10; //en fonction de la probabilité de mort et de degat de chaque survivant, il esquive ou non l'attaque de jason et lui inflige des degats
    }
    else {
        console.log(survivantAleatoire["nom"], "meurt mais inflige 15 points de degats à Jason"); //en fonction des proba, le survivant peut mourir mais infliger 15 pts de degats à jason
        tueur[1] -=15;
        survivantsMorts.push(survivantAleatoire["nom"]); //pour rajouter à la liste des survivants morts le survivant qui vient de mourir
        survivants.splice(nbrSurvivantAle, 1); //pour enlever du nbr de survivants vivants le survivant qui vient de mourir
    } 
    
        console.log("RIP : ", survivantsMorts); //pour afficher dans la console les survivants morts pdt le combat, à la fin.
    combat()

    };

// pour attribuer à chaque prenom des caracteristiques et des probabilités (mort, degat et mort en infligeant des degats)
prenom.forEach(nom => {
   let a = Math.floor(Math.random() * caracteristique.length);
   let caracteristiques = caracteristique.splice(a, 1); //.splice pour elever la caracteristique deja prise de celles dispo

   let b = Math.floor(Math.random() * probaSurvivants.length);
probaSurvivants= probaSurvivants.splice(b, 1); //pour enlever les proba deja prises de celles disponibles pour les autres survivants
let survivant =new Personnage(nom, caracteristiques, probaSurvivants[0][0], probaSurvivants[0][1], probaSurvivants[0][2]);
survivants.push(survivant) //pour que tous les survivants aient des caracteristqiues et des proba

});





combat()  //pour qu'il y ai un combat
