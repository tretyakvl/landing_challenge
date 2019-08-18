const activateButtons = require('./helpers/activateButtons')
const buttons = document.querySelectorAll('.faq__question')
const contentList = document.querySelectorAll('.faq__answer')
const show = require('./helpers/setHeight')
const hide = function (content) {
  content.style.setProperty('height', '0px')
}

buttons.forEach((button, i) => {
  button.addEventListener('click', event => {
    const content = contentList[i]
    if (button.classList.contains('is-active')) {
      event.stopImmediatePropagation()
      button.classList.remove('is-active')
      hide(content)
    }
  })
})

activateButtons(buttons, contentList, show, hide)
