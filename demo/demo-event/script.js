const inputNom = document.querySelector('#inputNom'); // on recupere l'input Nom
const inputPrenom = document.getElementById("inputPrenom");
const inputAge = document.getElementById("inputAge");
const bouton = document.querySelector("button");

bouton.addEventListener("click", function(){
    const nomcomplet = inputNom.value + " " + inputPrenom.value; //on récupere les valeurs a l'interieur de la valeur inputNom et inputPrenom
    const age= inputAge.valueAsNumber;
    const ageDansCinqAns= age + 5;
    alert(" Bonjour " + nomcomplet + " vous avez "+ age + " et dans 5 ans vous aurez... " + ageDansCinqAns )
})