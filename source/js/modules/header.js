const header = document.querySelector('.header')
const button = header.querySelector('.header__button')

button.addEventListener('click', () => {
  header.classList.toggle('header--opened')
})
