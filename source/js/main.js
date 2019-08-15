'use strict'

const header = document.querySelector('.header')
const button = header.querySelector('.header__button')

button.addEventListener('click', () => {
  header.classList.toggle('header--opened')
})

const faqButtons = document.querySelectorAll('.faq__question')
const faqContent = document.querySelectorAll('.faq__answer')

function addLogic (buttons, content) {
  const BUTTON_CLASS = 'is-active'
  const CONTENT_CLASS = 'is-shown'

  for (const button of buttons) {
    button.addEventListener('click', handler)
  }

  function handler (event) {
    event.preventDefault()

    buttons.forEach((button, i) => {
      if (button === event.currentTarget && button.classList.contains(BUTTON_CLASS)) {
        button.classList.remove(BUTTON_CLASS)
        content[i].classList.remove(CONTENT_CLASS)
      } else if (button === event.currentTarget) {
        button.classList.add(BUTTON_CLASS)
        content[i].classList.add(CONTENT_CLASS)
      } else {
        button.classList.remove(BUTTON_CLASS)
        content[i].classList.remove(CONTENT_CLASS)
      }
    })
  }
}

addLogic(faqButtons, faqContent)
