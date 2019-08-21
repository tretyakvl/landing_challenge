const body = document.querySelector('body')
const header = body.querySelector('.header')
const button = header.querySelector('.header__button')

button.addEventListener('click', () => {
  body.classList.toggle('no-scroll')
  header.classList.toggle('header--opened')
})
