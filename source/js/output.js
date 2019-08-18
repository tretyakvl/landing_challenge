(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict'
require('./modules/header')
require('./modules/features')
require('./modules/faq')
require('./modules/contacts')

},{"./modules/contacts":2,"./modules/faq":3,"./modules/features":4,"./modules/header":5}],2:[function(require,module,exports){

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

},{}],3:[function(require,module,exports){
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

},{"./helpers/activateButtons":6,"./helpers/setHeight":7}],4:[function(require,module,exports){
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

},{"./helpers/activateButtons":6}],5:[function(require,module,exports){
const header = document.querySelector('.header')
const button = header.querySelector('.header__button')

button.addEventListener('click', () => {
  header.classList.toggle('header--opened')
})

},{}],6:[function(require,module,exports){
/**
 *
 * @param {NodeList} buttons
 * @param {NodeList} contentList
 * @param {function} showAction
 * @param {function} hideAction
 */
module.exports = function activateButtons (buttons, contentList, showAction, hideAction) {
  const ACTIVE_CLASS = 'is-active'

  for (const button of buttons) {
    button.addEventListener('click', handler)
  }

  function handler (event) {
    event.preventDefault()

    buttons.forEach((button, i) => {
      const content = contentList[i]

      if (button === event.currentTarget) {
        button.classList.add(ACTIVE_CLASS)
        showAction(content)
      } else {
        button.classList.remove(ACTIVE_CLASS)
        hideAction(content)
      }
    })
  }
}

},{}],7:[function(require,module,exports){
/**
 *
 * @param {HTMLElement} elem
 */
module.exports = function setHeight (elem) {
  const height = elem.scrollHeight
  elem.style.setProperty('height', height + 'px')
}

},{}]},{},[1]);
