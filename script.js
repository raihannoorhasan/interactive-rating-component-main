const submitBtn = document.querySelector('.submit-btn')
const ratingState = document.querySelector('.rating-state')
const thankYouState = document.querySelector('.thank-you-state')
const ratingRate = document.querySelector('.rating-rates')
const ratingNumberGiven = document.querySelector('.rating-number-given')
const ratingRates = document.querySelectorAll('.rating-rate')
const ratingIconContainer = document.querySelector('.rating-icon-container')
const RATING_ICON = `<img src="./images/icon-star.svg" alt="" class="rating-icon" />`

let rated = false;


ratingRate.addEventListener('click', e => {
    if (e.target.matches('.rating-rates')) return

    rated = true;
    const ratingNumber = e.target.innerText
    ratingNumberGiven.innerText = ratingNumber;

    ratingIconContainer.innerHTML = ''
    for (let i = 0; i < ratingNumber; i++) {
        ratingIconContainer.insertAdjacentHTML('beforeend', RATING_ICON)
    }

    ratingRates.forEach(r => r.classList.remove('active'))
    ratingRates[ratingNumber - 1].classList.add('active')
})

submitBtn.addEventListener('click', () => {

    if (!rated) {
        alert('Before Submit Rate Please!')
        return
    }
    ratingState.classList.add('hidden')
    thankYouState.classList.remove('hidden')
})

