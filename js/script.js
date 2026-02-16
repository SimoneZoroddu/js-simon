const numbersListEl = document.getElementById('numbers-list')
const countDownEl = document.getElementById('countdown')
const answersFormEl = document.getElementById('answers-form')
//console.log(numbersListEl);



for (let i = 0; i < 5; i++) {
    const liEl = document.createElement('li')
    numbersListEl.appendChild(liEl)
    liEl.innerText = Math.floor(Math.random() * 20 + 1)
}

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
}, 200) // e da settare a 1000 cosi si vede per ogni secondo