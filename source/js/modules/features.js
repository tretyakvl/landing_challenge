const activateButtons = require('./helpers/activateButtons')
const buttons = document.querySelectorAll('.features__button')
const contentList = document.querySelectorAll('.features__feature')
const show = function (content) {
  content.classList.add('features__feature--shown')
}
const hide = function (content) {
  content.classList.remove('features__feature--shown')
}

activateButtons(buttons, contentList, show, hide)
