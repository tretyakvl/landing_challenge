const setHeight = require('./helpers/setHeight')
const form = document.querySelector('.contacts__form')
const input = form.querySelector('.contacts__email')
const massage = form.querySelector('.contacts__error')
const ERROR_CLASS = 'is-error'
const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

input.addEventListener('blur', event => {
  checkForm(input.value)
})

form.addEventListener('submit', event => {
  event.preventDefault()
  checkForm(input.value)
})

function checkForm (data) {
  if (!regex.test(data)) {
    form.classList.add(ERROR_CLASS)
    setHeight(massage)
  } else {
    form.classList.remove(ERROR_CLASS)
    massage.style.setProperty('height', '0px')
  }
}
