
const form = document.querySelector('.contacts__form')
const input = form.querySelector('.contacts__email')
const ERROR_CLASS = 'is-error'
const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

input.addEventListener('blur', event => {
  const email = input.value

  if (!regex.test(email)) {
    form.classList.add(ERROR_CLASS)
  } else {
    form.classList.remove(ERROR_CLASS)
  }
})
