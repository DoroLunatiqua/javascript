// const paralorem = document.getElementById("lorem");

// // console.log(paralorem);

// console.dir(paralorem) //donne acces à tous les attributs de l'element (aide a se positionner dans "l'arbre du DOM")

// paralorem.id="Loremupdate" // on modifie le nom de l'ID !! en cas de besoin de l'id reprendre la nouvelle sinon reprendre la constante

// paralorem.innerHTML= "Hello" //

// paralorem.innerHTML= "<script>alert('hello')</script>" //prend en compte le langage HTML (ne pas l'utiliser dans un input par exemple sinon ca laisse la porte ouvert au hacking)

// paralorem.textContent = " Bonjour à tous " // change le contenu mais ne prend pas en compte le langage HTML

const paraLorem = document.getElementById("lorem2")//reupere les elements de l'ID
const paraQuery = document.querySelector("#lorem1")//recupere les elements de l'ID avec le "selecteur Css"

console.log(paraLorem);
console.dir(paraLorem);

console.log(paraQuery);
console.dir(paraQuery);


const paragraphes = document.getElementsByTagName("p") // cherche une balise : tout ce qui correspond ici à la balise P
const paragraphesQuery = document.querySelectorAll("p") // cherche un élément : tout ce qui correspond aux elements p

console.log(paragraphes);
console.dir(paragraphes);

console.log(paragraphesQuery);
console.dir(paragraphesQuery);

//Modification de l'ID
paraLorem.id = "LoremUpdate"

//les balises html seront interpretees
paraQuery.innerHTML = "<strong>Bonjour à tous</strong>" 

// les balises html seront considerees comme du texte
paraLorem.textContent =  "<em>Bonjour à tous</em>"

//Si nous modifions l'id, la class, ou autre moyen d'acces, il faut 
//utiliser cette nouvelle valeur pour la rechercher de nouveau
console.log(document.getElementById("LoremUpdate"));
console.dir(paraLorem);

console.log(paraQuery.className);
paraQuery.className = "para red strong blue" //possibilité d'utiliser dynamiquement des valeurs CSS avec des variations de classe

console.log(paraQuery.classList);
paraQuery.classList.add("textcolor"); //ajoute les classes specifiées
console.log(paraQuery.classList);
paraQuery.classList.replace("red","blue"); //remplace
console.log(paraQuery.classList);
paraQuery.classList.remove("strong"); //supprime la classe spécifiée
console.log(paraQuery.classList);
paraQuery.classList.toggle("fromJS") // ajoute ou supprime la classe indiquée

const inputNumber= document.getElementById("inputNumber");
const inputText= document.getElementById("inputText");

console.dir(inputNumber);
console.dir(inputText);