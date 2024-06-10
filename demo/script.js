
// Permet d'afficher un popup avec le message
alert(" Bienvenue, Hello World");

//affection

let nombre = 52;

//verification entre les valeurs

console.log(nombre == "52"); //True   egalité de valeur mais pas de type
console.log(nombre == 52); //True

//verification entre les valeurs et les types

console.log(nombre ==="52"); //False
console.log(nombre === 52); //True

//Concaténation entre le str et le number

console.log(26 + "26"); // Pas de conversion implicite , il va concaténer

/////////////////////// Variables /////////////////////////////

console.log ("Variable : ");

const  PI = 3.14; // on sait que on ne va pas la modifier et on ne PEUT PAS la modifier.

console.log(PI);

// PI = 2;

// console.log(PI); //va indiquer une erreur car on ne peut pas réassigner une erreur sur une constante : const 

let ageUtilisateur = 41;
console.log(ageUtilisateur);
ageUtilisateur=ageUtilisateur+1;
console.log(ageUtilisateur);

ageUtilisateur = "Bonjour";
console.log(ageUtilisateur); //ne provoque pas d'erruer, le type est modifié


// PROMPT : un genre de pop up mais recuper une donner : demandez à l'utilisateur d'entrer une donnée: retour en valeur string

console.log("Prompt : ");
ageUtilisateur = prompt ("Veuillez entrer votre age: ")
console.log (ageUtilisateur);

ageUtilisateur= +ageUtilisateur ; //conversion explicite il le transforme en int



let nombreEntier = 10;
console.log("nombreEntier:>>> " , typeof(nombreEntier));
nombreEntier= nombreEntier.toString();//transforme en string
console.log("nombreEntier:>>> " , typeof(nombreEntier));


