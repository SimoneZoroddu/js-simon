const numbersListEl = document.getElementById('numbers-list')
const countDownEl = document.getElementById('countdown')
const answersFormEl = document.getElementById('answers-form')
const messageEl = document.getElementById('message')
//console.log(numbersListEl);
// proviamo a prendere tutti gli elementi form-control 
const formControlEl = document.getElementsByClassName('form-control') 
console.log(formControlEl);

let randomNumbers = []

for (let i = 0; i < 5; i++) {
    const liEl = document.createElement('li')
    numbersListEl.appendChild(liEl)
    liEl.innerText = Math.floor(Math.random() * 20 + 1)
    randomNumbers.push(liEl.innerText)
}
//console.log(randomNumbers);
answersFormEl.addEventListener('submit', function(e){
    e.preventDefault()
    //console.log(formControlEl.length);
    let confirmNumber = 0
    let numberRight = []
    for (let i = 0; i < formControlEl.length; i++) {
        const element = formControlEl[i];
        //console.log(element.value);
       if (Number(element.value) == randomNumbers[0] || Number(element.value) == randomNumbers[1] || Number(element.value) == randomNumbers[2] || Number(element.value) == randomNumbers[3] || Number(element.value) == randomNumbers[4]) {
            console.log('funziona');
            confirmNumber++
            numberRight.push(element.value)
        }
    }
    //console.log(confirmNumber);
    console.log(numberRight);
    messageEl.innerText = `Complimenti hai azzeccato ${confirmNumber} numeri: ${numberRight}`
})


let count = 30
const countDown = setInterval(function () {
    if (count === -1) {
        clearInterval(countDown)
        numbersListEl.classList.add('d-none')
        countDownEl.classList.add('d-none')
        answersFormEl.classList.remove('d-none')
    } else {
        countDownEl.innerText = count--
    }
}, 100) // e da settare a 1000 cosi si vede per ogni secondo

