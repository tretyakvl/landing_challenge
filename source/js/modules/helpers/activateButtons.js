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
