const present= document.getElementById("present");
const absent=document.getElementById("absent");
const statut=document.getElementById("statut");

// console.log(present);

present.addEventListener('click', function(){
    statut.textContent="Present"
    absent.textContent=""
    present.textContent="✅"
    
})

absent.addEventListener('click', function(){
    statut.textContent="Absent"
    absent.textContent="❌"
    present.textContent=""

    
})
/////////////////////////////

const present1= document.getElementById("present1");
const absent1=document.getElementById("absent1");
const statut1=document.getElementById("statut1");



present1.addEventListener('click', function(){
    statut1.textContent="Present"
    absent1.textContent=""
    present1.textContent="✅"
})

absent1.addEventListener('click', function(){
    statut1.textContent="Absent"
    absent1.textContent="❌"
    present1.textContent=""

})
/////////////////////////////////////
const present2= document.getElementById("present2");
const absent2=document.getElementById("absent2");
const statut2=document.getElementById("statut2");


present2.addEventListener('click', function(){
    statut2.textContent="Present"
    absent2.textContent=""
    present2.textContent="✅"
})

absent2.addEventListener('click', function(){
    statut2.textContent="Absent"
    absent2.textContent="❌"
    present2.textContent=""
})

//////////////////////////////////////////////