import { topBar, exteriorImage, interiorImage, exteriorColourSection, interiorColourSection, wheelsButtonsSection, performanceBtn, fullSelfDrivingCheckbox,totalPriceElement, downPaymentElement, monthlyPaymentElement, accessoryCheckboxes } from './variables.js'

import { selectedOptions, pricing } from './objects.js'

import { exteriorImages, interiorImages } from './imageMapping.js'

const basePrice = 57835
let currentPrice = basePrice
let selectedColour = 'Stealth Grey' 

const handleScroll = () => {
  const atTop = window.scrollY === 0 
  topBar.classList.toggle('visible-bar', atTop)
  topBar.classList.toggle('hidden-bar', !atTop)
}

const handleColourButtonClick = (event) => {
  let button
  if (event.target.tagName === 'IMG') {
    button = event.target.closest('button')
  } else if (event.target.tagName === 'BUTTON') {
    button = event.target
  }
  if (button) {
    const buttons = event.currentTarget.querySelectorAll('button')
    buttons.forEach((btn) => btn.classList.remove('btn-selected'))
    button.classList.add('btn-selected')
  }
}

window.addEventListener('scroll', () => requestAnimationFrame(handleScroll))
exteriorColourSection.addEventListener('click', handleColourButtonClick)
interiorColourSection.addEventListener('click', handleColourButtonClick)

