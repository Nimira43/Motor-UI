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

const handleColourButtonClick = (click) => {
  let button

}

window.addEventListener('scroll', () => requestAnimationFrame(handleScroll))
exteriorColourSection.addEventListener('click', handleColourButtonClick)

