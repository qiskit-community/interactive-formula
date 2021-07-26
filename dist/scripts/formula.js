// Sample data
const sampleNotationsData = {
  "test_one": {
    "say": "Lorem ipsum one",
    "meaning": "Lorem ipsum description one",
    "type": "Local variable one"
  },
  "test_two": {
    "say": "Lorem ipsum two",
    "meaning": "Lorem ipsum description two",
    "type": "Local variable two"
  },
  "test_three": {
    "say": "Lorem ipsum three",
    "meaning": "Lorem ipsum description three",
    "type": "Local variable three"
  }
}


const injectTooltip = function (eq, target) {
  console.log(eq, 'eq inject tooltip')
  console.log(target, 'target inject tooltip')
  if (eq) {
    target.classList.add('q-math-notation')

    // create Tooltip structure
    const tooltip = document.createElement('div')
    const tooltipContent = document.createElement('div')
    tooltip.appendChild(tooltipContent);
    tooltip.className += 'qv-tooltip'
    tooltipContent.className += 'qv-tooltip__content'

    // add tooltip data
    tooltipContent.innerHTML = ''
    if (eq.say) {
      tooltipContent.innerHTML += `
        <h3 class="qv-tooltip__title">How to read this:</h3>
        <p>${eq.say}</p>
      `
    }
    if (eq.meaning) {
      tooltipContent.innerHTML += `
        <h3 class="qv-tooltip__title">What it means:</h3><p>
          ${eq.meaning}</p>
        `
    }
    if (eq.type) {
      tooltipContent.innerHTML += `
        <h3 class="qv-tooltip__title">Type:</h3><p>
          ${eq.type}</p>
        `
    }

    target.appendChild(tooltip)
  }
}

const initNotations = function () {
  for (const key in sampleNotationsData) {
    const target = document.getElementById(key)
    if (target) {
      injectTooltip(sampleNotationsData[key], target)
    } else {
      const targets = document.querySelectorAll(`mjx-container .${key}`)
      for (let t of targets) {
        injectTooltip(sampleNotationsData[key], t)
      }
    }
  }
}

// 
setTimeout(function(){ initNotations() }, 300);
