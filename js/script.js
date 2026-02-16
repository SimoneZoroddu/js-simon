const numbersListEl = document.getElementById('numbers-list')
const countDownEl = document.getElementById('countdown')
const answersFormEl = document.getElementById('answers-form')
const messageEl = document.getElementById('message')
//console.log(numbersListEl);
// proviamo a prendere tutti gli elementi form-control 
const formControlEl = document.getElementsByClassName('form-control')
console.log(formControlEl);

let randomNumbers = []

while (randomNumbers.length < 5) {
    const randomNumbersCreate = Math.floor(Math.random() * 20 + 1)
    if (!randomNumbers.includes(randomNumbersCreate)) {
        const liEl = document.createElement('li')
        numbersListEl.appendChild(liEl)
        liEl.innerText = randomNumbersCreate
        randomNumbers.push(randomNumbersCreate)
    }
}

//console.log(randomNumbers);
answersFormEl.addEventListener('submit', function (e) {
    e.preventDefault()
    //console.log(formControlEl.length);
    let confirmNumber = 0
    let numberRight = []
    let checkNumbers = []
    for (let i = 0; i < formControlEl.length; i++) {
        const element = formControlEl[i];
        //console.log(element.value);
        const elementNumbValue = Number(element.value)
        if (checkNumbers.includes(elementNumbValue)) {
            alert('Non si accettano numeri uguali')
            location.reload()
        }

        checkNumbers.push(elementNumbValue)

        if (randomNumbers.includes(elementNumbValue)) {
            //console.log('funziona');
            confirmNumber++
            numberRight.push(elementNumbValue)
        }
       
    }
    console.log(checkNumbers);
    //console.log(confirmNumber);
    //console.log(numberRight);
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

