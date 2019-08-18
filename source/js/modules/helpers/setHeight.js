/**
 *
 * @param {HTMLElement} elem
 */
module.exports = function setHeight (elem) {
  const height = elem.scrollHeight
  elem.style.setProperty('height', height + 'px')
}
