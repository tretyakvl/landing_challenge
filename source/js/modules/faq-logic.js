const faqButtons = document.querySelectorAll('.faq__question')
const faqContent = document.querySelectorAll('.faq__answer')
const BUTTON_CLASS = 'is-active'

for (const button of faqButtons) {
  button.addEventListener('click', handler)
}

function handler (event) {
  event.preventDefault()

  faqButtons.forEach((button, i) => {
    const contentHeight = faqContent[i].scrollHeight

    if (button === event.currentTarget && button.classList.contains(BUTTON_CLASS)) {
      button.classList.remove(BUTTON_CLASS)
      faqContent[i].style.setProperty('height', '1px')
    } else if (button === event.currentTarget) {
      button.classList.add(BUTTON_CLASS)
      faqContent[i].style.setProperty('height', contentHeight + 'px')
    } else {
      button.classList.remove(BUTTON_CLASS)
      faqContent[i].style.setProperty('height', '1px')
    }
  })
}
