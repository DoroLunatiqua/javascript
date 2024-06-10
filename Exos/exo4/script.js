

//recupere les lignes paires (ici les chiffres impairs puisque je commence de 0 ) queryselector prend un element, le queryselectorall prend tout
const odds = document.querySelectorAll('div>ul>li:nth-child(even)');
console.log(odds);