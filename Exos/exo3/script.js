

//recuperation du paragraphe via son id
let elemC = document.getElementById("depart");
console.dir(elemC);

console.dir(elemC.nextElementSibling.nextElementSibling); //recupere l'element suivant de l'id depart et le suivant du suivant.
console.dir(elemC.parentElement.lastElementChild); // de l'elementC avec id"depart" on prend le parent et on demande le dernier element du parent
console.dir(elemC.parentElement.children[4]) // de l'elementC avec l'id"depart on prend le parent dont on prend la 4eme element


// let elemD = elemC.nextElementSibling;
// console.dir(elemD);




//Hors exo :récupération de la div via le nom de balsie/!\ c'est une liste qui contient toutes les div

const div = document.getElementsByName("div")

//récupération de la valeur A

console.dir(div.item(0))