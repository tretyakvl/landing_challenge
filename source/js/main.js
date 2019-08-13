'use strict'

const header = document.querySelector('.header')
const button = header.querySelector('.header__button')

button.addEventListener('click', () => {
  header.classList.toggle('header--opened')
})

const featuresButtons = document.querySelectorAll('.features__button')
const featuresItems = document.querySelectorAll('.features__feature')
const BUTTON_ACTIVE = 'features__button--active'
const ITEM_SHOWN = 'features__feature--shown'

for (const button of featuresButtons) {
  button.addEventListener('click', featuresHandler)
}

function featuresHandler (event) {
  event.preventDefault()

  featuresButtons.forEach((button, i) => {
    if (event.currentTarget === button) {
      button.classList.add(BUTTON_ACTIVE)
      featuresItems[i].classList.add(ITEM_SHOWN)
    } else {
      button.classList.remove(BUTTON_ACTIVE)
      featuresItems[i].classList.remove(ITEM_SHOWN)
    }
  })
}
