const numbersListEl = document.getElementById('numbers-list')
//console.log(numbersListEl);


for (let i = 0; i <= 5; i++) {
    const liEl = document.createElement('li')
    numbersListEl.appendChild(liEl)
    liEl.innerText = Math.floor(Math.random() * 20 + 1)
}