const jaune = document.querySelector(".jaune")
const bleu = document.querySelector(".bleu")

let couleurencours;
let case1 = document.querySelector(' #canvas tr td');

jaune.addEventListener('click',function(){
    couleurencours=jaune.textcontent;
    console.log(jaune);
})

bleu.addEventListener('click',function(){
    couleurencours=bleu.textcontent;
    console.log(bleu);
})

case1.