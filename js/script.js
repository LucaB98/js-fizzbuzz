// 1 - stampo in consol i numeri da 1 a 100
// 2 - individuo i multipli di 3 e sostituisco il numero con fizz
// 3 - individuo i multipli di 5 e sostituisco il numero con Buzz
// 4 - individuo i multipli sia di 3 che di 5 e sostituisco il numero con FizzBuzz
// bonus:
// 1 - stampo in pagina(creando una ul)
// 2 - modifico lo style su css
//     2a - bg del body
//     2b - creare dei quadrati
//     2c - cambiare il bg per ogni parola

console.log('JS OK')
const list = document.getElementById('numbers-list')
let items = '';

for(let i = 1; i <= 100; i++){
   
    let content = i;

    if(i % 15 ===0){
        content = 'fizzbuzz';
    }else if(i % 3 === 0){
        content = 'fizz';
    } else if(i % 5 === 0){
        content = 'buzz';
    }

    items += `<li class="${content}">${content}</li>`;
   
}

list.innerHTML = items;