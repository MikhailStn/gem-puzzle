import startPoints from './start-points.js';
import winPoints from './win-points.js';

/* create elements */

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const buttonsWrapper = document.createElement('div');
buttonsWrapper.className = 'buttons-wrapper';
const buttonStart = document.createElement('button');
buttonStart.innerHTML = 'Start game';
const buttonSave = document.createElement('button');
buttonSave.innerHTML = 'Save';
const buttonLoad = document.createElement('button');
buttonLoad.innerHTML = 'Load';
const buttonResults = document.createElement('button');
buttonResults.innerHTML = 'Results';
const buttonSound = document.createElement('button');
buttonSound.className = 'sound';
wrapper.append(buttonsWrapper);

buttonsWrapper.append(buttonStart);
buttonsWrapper.append(buttonSave);
buttonsWrapper.append(buttonLoad);
buttonsWrapper.append(buttonResults);
buttonsWrapper.append(buttonSound);

const timerAndSteps = document.createElement('div')
timerAndSteps.className = 'timer-steps-wrapper'

wrapper.append(timerAndSteps)

const savedGameText = document.createElement('span')
savedGameText.className = 'saved-text'
savedGameText.innerHTML = 'Successfully saved'


const timer = document.createElement('div')
timer.className = 'timer'
const timerMinutes = document.createElement('div')
timerMinutes.innerHTML = '00'
timerMinutes.className = 'timer-minutes'
const timerSeparator = document.createElement('div')
timerSeparator.innerHTML = ':'
timerSeparator.className = 'separator'
const timerSeconds = document.createElement('div')
timerSeconds.innerHTML = '00'
timerSeconds.className = 'timer-seconds'

timer.append(timerMinutes, timerSeparator, timerSeconds)


const stepsWrapper = document.createElement('span')
const stepsCounter = document.createElement('span')
let steps = 0
stepsWrapper.innerHTML = 'Steps: '
stepsWrapper.className = 'steps'
stepsCounter.innerHTML = steps
stepsCounter.className = 'number'



timerAndSteps.append(stepsWrapper, stepsCounter, savedGameText, timer)

const fieldWrapper = document.createElement('div');
fieldWrapper.className = 'field-wrapper';
wrapper.append(fieldWrapper);

const optionsWrapper = document.createElement('div')
optionsWrapper.className = 'options-wrapper'
wrapper.append(optionsWrapper)

const form = document.createElement('form')
form.className = 'form'
const radio3x3 = document.createElement('input')
const span3x3 = document.createElement('span')
radio3x3.name = 'desk-button'
radio3x3.type = 'radio'
radio3x3.className = 'radio-btn'
span3x3.innerHTML = '3x3'

const radio4x4 = document.createElement('input')
const span4x4 = document.createElement('span')
radio4x4.name = 'desk-button'
radio4x4.type = 'radio'
radio4x4.className = 'radio-btn'
radio4x4.checked = true
span4x4.innerHTML = '4x4'

const radio5x5 = document.createElement('input')
const span5x5 = document.createElement('span')
radio5x5.name = 'desk-button'
radio5x5.type = 'radio'
radio5x5.className = 'radio-btn'
span5x5.innerHTML = '5x5'

const radio6x6 = document.createElement('input')
const span6x6 = document.createElement('span')
radio6x6.name = 'desk-button'
radio6x6.type = 'radio'
radio6x6.className = 'radio-btn'
span6x6.innerHTML = '6x6'

const radio7x7 = document.createElement('input')
const span7x7 = document.createElement('span')
radio7x7.name = 'desk-button'
radio7x7.type = 'radio'
radio7x7.className = 'radio-btn'
span7x7.innerHTML = '7x7'

const radio8x8 = document.createElement('input')
const span8x8 = document.createElement('span')
radio8x8.name = 'desk-button'
radio8x8.type = 'radio'
radio8x8.className = 'radio-btn'
span8x8.innerHTML = '8x8'


optionsWrapper.append(form)
form.append(radio3x3, span3x3, radio4x4, span4x4, radio5x5, span5x5, radio6x6, span6x6, radio7x7, span7x7, radio8x8, span8x8)

const resultsWrapper = document.createElement('div')
resultsWrapper.className = 'results-wrap'
const resultsBackground = document.createElement('div')
resultsBackground.className = 'results-bg'

document.body.append(resultsWrapper)

const resultsList = document.createElement('ol')
resultsList.className = 'results-list'
resultsWrapper.append(resultsList)
resultsWrapper.append(resultsBackground)

const closeResultsBtn = document.createElement('button')
closeResultsBtn.className = 'results-button'
resultsList.append(closeResultsBtn)

for (let i = 0; i <= 10; i++) {
  const resultItem = document.createElement('li')
  resultItem.className = 'result-item'
  resultsList.append(resultItem)
}

const resultItems = document.querySelectorAll('.result-item')
resultItems[0].className = 'result-h2'
resultItems[0].innerHTML = 'Results'


/* sound */

const btnSound = document.querySelector('.sound');
let isSound = true

const toggleVolume = () => {
  btnSound.classList.toggle('mute');
  if (isSound) {
    isSound = false
  } else {
    isSound = true
  }
};

const playSound = () => {
  if (isSound) {
    let sound = new Audio()
    sound.src = './assets/sound.mp3'
    sound.play()
  } else {
    return
  }
}

btnSound.addEventListener('click', toggleVolume);
btnSound.addEventListener('click', playSound)
buttonSave.addEventListener('click', playSound)
buttonLoad.addEventListener('click', playSound)
buttonResults.addEventListener('click', playSound)


/* start game */

const allRadioButtons = document.querySelectorAll('.radio-btn')

const startNewGame = () => {
  steps = 0
  stepsCounter.innerHTML = steps

  if (allRadioButtons[0].checked == true && !fieldWrapper.classList.contains('field-x3')) {
    fieldWrapper.classList.remove('field-x8', 'field-x4', 'field-x5', 'field-x6', 'field-x7');
    fieldWrapper.classList.add('field-x3');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 3; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x3');
      for (let j = 0; j < 3; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x4', 'x5', 'x6', 'x7', 'x8');
      }
    }
  } else if (allRadioButtons[1].checked == true && !fieldWrapper.classList.contains('field-x4')) {
    fieldWrapper.classList.remove('field-x3', 'field-x5', 'field-x6', 'field-x7', 'field-x8');
    fieldWrapper.classList.add('field-x4');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 4; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x4');
      for (let j = 0; j < 4; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x3', 'x5', 'x6', 'x7', 'x8');
      }
    }
  } else if (allRadioButtons[2].checked == true && !fieldWrapper.classList.contains('field-x5')) {
    fieldWrapper.classList.remove('field-x3', 'field-x4', 'field-x6', 'field-x7', 'field-x8');
    fieldWrapper.classList.add('field-x5');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 5; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x5');
      for (let j = 0; j < 5; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x3', 'x4', 'x6', 'x7', 'x8');
      }
    }
  } else if (allRadioButtons[3].checked == true && !fieldWrapper.classList.contains('field-x6')) {
    fieldWrapper.classList.remove('field-x3', 'field-x5', 'field-x4', 'field-x7', 'field-x8');
    fieldWrapper.classList.add('field-x6');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 6; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x6');
      for (let j = 0; j < 6; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x3', 'x5', 'x4', 'x7', 'x8');
      }
    }
  } else if (allRadioButtons[4].checked == true && !fieldWrapper.classList.contains('field-x7')) {
    fieldWrapper.classList.remove('field-x3', 'field-x5', 'field-x6', 'field-x4', 'field-x8');
    fieldWrapper.classList.add('field-x7');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 7; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x7');
      for (let j = 0; j < 7; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x3', 'x5', 'x6', 'x4', 'x8');
      }
    }
  } else if (allRadioButtons[5].checked == true && !fieldWrapper.classList.contains('field-x8')) {
    fieldWrapper.classList.remove('field-x3', 'field-x5', 'field-x6', 'field-x7', 'field-x4');
    fieldWrapper.classList.add('field-x8');
    fieldWrapper.innerHTML = '';
    let item
    let itemColumns
    for (let i = 0; i < 8; i++) {
      itemColumns = document.createElement('div')
      itemColumns.className = 'field-column'
      fieldWrapper.append(itemColumns)
      itemColumns.classList.add('x8');
      for (let j = 0; j < 8; j++) {
        item = document.createElement('div');
        item.className = 'field-item';
        itemColumns.append(item);
        itemColumns.classList.remove('x3', 'x5', 'x6', 'x7', 'x4');
      }
    }
  }
};

buttonStart.addEventListener('click', startNewGame)
buttonStart.addEventListener('click', playSound)

let counterForStartPoints = 0

const fillTheFields = () => {
  if (allRadioButtons[0].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[0][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[0].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[0][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[1].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[1][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[1].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[1][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[2].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[2][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[2].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[2][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[3].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[3][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[3].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[3][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[4].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[4][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[4].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[4][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[5].checked == true && counterForStartPoints < 6) {
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[5][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  } else if (allRadioButtons[5].checked == true && !counterForStartPoints < 6) {
    counterForStartPoints = 0;
    const items = document.querySelectorAll('.field-item')
    items.forEach(el => {el.classList.remove('empty')})
    for (let i = 0; i < items.length; i++) {
      items[i].innerHTML = `${startPoints[5][counterForStartPoints][i]}`
    }
    counterForStartPoints++
  }
}

buttonStart.addEventListener('click', fillTheFields)

const hideZeroItem = () => {
  const items = document.querySelectorAll('.field-item')
  for (let i = 0; i < items.length; i++) {
    if (items[i].innerHTML == '0') {
      items[i].classList.add('empty')
    }
  }
}

buttonStart.addEventListener('click', hideZeroItem)

let leftItem = 0
let rightItem = 0
let topItem = 0
let bottomItem = 0

const findItems = () => {
  const items = document.querySelectorAll('.field-item')
  items.forEach(el => {el.classList.remove('top'); el.classList.remove('bottom'); el.classList.remove('left'); el.classList.remove('right')})
  let columns = document.querySelectorAll('.field-column')
  let zeroIt = document.querySelector('.empty')
  if (leftItem) {
    leftItem.removeEventListener('click', moveRight)
    leftItem.removeEventListener('click', playSound)
  }
  if (rightItem) {
    rightItem.removeEventListener('click', moveLeft)
    rightItem.removeEventListener('click', playSound)
  }
  if (topItem) {
    topItem.removeEventListener('click', moveDown)
    topItem.removeEventListener('click', playSound)
  }
  if (bottomItem) {
    bottomItem.removeEventListener('click', moveUp)
    bottomItem.removeEventListener('click', playSound)
  }
  if (zeroIt.previousSibling) {
    leftItem = zeroIt.previousSibling
    leftItem.classList.add('left')
    leftItem.addEventListener('click', moveRight)
    leftItem.addEventListener('click', playSound)
    leftItem.setAttribute('draggable', 'true')
    zeroIt.ondragover = allowDrop;
    function allowDrop(event) {
      event.preventDefault()
    }
    leftItem.addEventListener('mousedown', () => {zeroIt.ondrop = moveRight})
  }
  if (zeroIt.nextSibling) {
    rightItem = zeroIt.nextSibling
    rightItem.classList.add('right')
    rightItem.addEventListener('click', moveLeft)
    rightItem.addEventListener('click', playSound)
    rightItem.setAttribute('draggable', 'true')
    zeroIt.ondragover = allowDrop;
    function allowDrop(event) {
      event.preventDefault()
    }
    rightItem.addEventListener('mousedown', () => {zeroIt.ondrop = moveLeft})
  }
  for (let i = 0; i < columns.length; i++) {
    let itemsInColumn = columns[0].querySelectorAll('.field-item')
    for (let j = 0; j < itemsInColumn.length; j++) {
      if (columns[i].childNodes[j].classList.contains('empty')) {
        if (i != 0) {
          topItem = columns[i - 1].childNodes[j]
          topItem.classList.add('top')
          topItem.addEventListener('click', moveDown)
          topItem.addEventListener('click', playSound)
          topItem.setAttribute('draggable', 'true')
          zeroIt.ondragover = allowDrop;
          function allowDrop(event) {
            event.preventDefault()
          }
          topItem.addEventListener('mousedown', () => {zeroIt.ondrop = moveDown})
        }
        if (i != columns.length - 1) {
          bottomItem = columns[i + 1].childNodes[j]
          bottomItem.classList.add('bottom')
          bottomItem.addEventListener('click', moveUp)
          bottomItem.addEventListener('click', playSound)
          bottomItem.setAttribute('draggable', 'true')
          zeroIt.ondragover = allowDrop;
          function allowDrop(event) {
            event.preventDefault()
          }
          bottomItem.addEventListener('mousedown', () => {zeroIt.ondrop = moveUp})
        }
      }
    }
  }
}

buttonStart.addEventListener('click', () => setTimeout(findItems, 5))

const changeRight = () => {
  if (leftItem) {
    leftItem.removeEventListener('click', moveRight)
    leftItem.removeAttribute('draggable')
  }
  if (rightItem) {
    rightItem.removeEventListener('click', moveLeft)
    rightItem.removeAttribute('draggable')
  }
  if (topItem) {
    topItem.removeEventListener('click', moveDown)
    topItem.removeAttribute('draggable')
  }
  if (bottomItem) {
    bottomItem.removeEventListener('click', moveUp)
    bottomItem.removeAttribute('draggable')
  }
  let emptyItem = document.querySelector('.empty')
  emptyItem.classList.remove('empty')
  emptyItem.innerHTML = leftItem.innerHTML
  leftItem.innerHTML = '0'
  leftItem.classList.add('empty')
  let items = document.querySelectorAll('.field-item')
  items.forEach(el => {el.classList.remove('right'); el.classList.remove('left'); el.classList.remove('top'); el.classList.remove('bottom')})
  findItems()
}

const changeLeft = () => {
  if (leftItem) {
    leftItem.removeEventListener('click', moveRight)
    leftItem.removeAttribute('draggable')
  }
  if (rightItem) {
    rightItem.removeEventListener('click', moveLeft)
    rightItem.removeAttribute('draggable')
  }
  if (topItem) {
    topItem.removeEventListener('click', moveDown)
    topItem.removeAttribute('draggable')
  }
  if (bottomItem) {
    bottomItem.removeEventListener('click', moveUp)
    bottomItem.removeAttribute('draggable')
  }
  let emptyItem = document.querySelector('.empty')
  emptyItem.classList.remove('empty')
  emptyItem.innerHTML = rightItem.innerHTML
  rightItem.innerHTML = '0'
  rightItem.classList.add('empty')
  let items = document.querySelectorAll('.field-item')
  items.forEach(el => {el.classList.remove('right'); el.classList.remove('left'); el.classList.remove('top'); el.classList.remove('bottom')})
  findItems()
}

const changeTop = () => {
  if (leftItem) {
    leftItem.removeEventListener('click', moveRight)
    leftItem.removeAttribute('draggable')
  }
  if (rightItem) {
    rightItem.removeEventListener('click', moveLeft)
    rightItem.removeAttribute('draggable')
  }
  if (topItem) {
    topItem.removeEventListener('click', moveDown)
    topItem.removeAttribute('draggable')
  }
  if (bottomItem) {
    bottomItem.removeEventListener('click', moveUp)
    bottomItem.removeAttribute('draggable')
  }
  let emptyItem = document.querySelector('.empty')
  emptyItem.classList.remove('empty')
  emptyItem.innerHTML = bottomItem.innerHTML
  bottomItem.innerHTML = '0'
  bottomItem.classList.add('empty')
  let items = document.querySelectorAll('.field-item')
  items.forEach(el => {el.classList.remove('right'); el.classList.remove('left'); el.classList.remove('top'); el.classList.remove('bottom')})
  findItems()
}

const changeBottom = () => {
  if (leftItem) {
    leftItem.removeEventListener('click', moveRight)
    leftItem.removeAttribute('draggable')
  }
  if (rightItem) {
    rightItem.removeEventListener('click', moveLeft)
    rightItem.removeAttribute('draggable')
  }
  if (topItem) {
    topItem.removeEventListener('click', moveDown)
    topItem.removeAttribute('draggable')
  }
  if (bottomItem) {
    bottomItem.removeEventListener('click', moveUp)
    bottomItem.removeAttribute('draggable')
  }
  let emptyItem = document.querySelector('.empty')
  emptyItem.classList.remove('empty')
  emptyItem.innerHTML = topItem.innerHTML
  topItem.innerHTML = '0'
  topItem.classList.add('empty')
  let items = document.querySelectorAll('.field-item')
  items.forEach(el => {el.classList.remove('right'); el.classList.remove('left'); el.classList.remove('top'); el.classList.remove('bottom');})
  findItems()
}

/* check and show popup */

const checkResults = () => {
  let items = document.querySelectorAll('.field-item');
  let winString = ''
  if (items.length == 9) {
    winString = winPoints[0].join()
  } else if (items.length == 16) {
    winString = winPoints[1].join()
  } else if (items.length == 25) {
    winString = winPoints[2].join()
  } else if (items.length == 36) {
    winString = winPoints[3].join()
  } else if (items.length == 49) {
    winString = winPoints[4].join()
  } else if (items.length == 64) {
    winString = winPoints[5].join()
  }
  let arr = []
  for (let i = 0; i < items.length; i++) {
    arr.push(items[i].innerHTML)
  }
  if (arr.join() == winString && arr.length > 0) {
    popupBg.style.opacity = '1'
    popupBg.style.visibility = 'visible'
    popupWin.style.opacity = '1'
    popupWin.style.visibility = 'visible'
    popupText.innerHTML = `Hooray! You solved the puzzle in ${timerMinutes.innerHTML} : ${timerSeconds.innerHTML} and ${steps} moves!`
    timer.style.opacity = 0
    updateResults()
  }
};

/* animation */

const moveRight = () => {
  steps++
  stepsCounter.innerHTML = steps
  let items = document.querySelectorAll('.field-item')
  leftItem.classList.add('move-right')
  leftItem.addEventListener('animationend', () => items.forEach(el => {el.classList.remove('move-right'); el.classList.remove('move-left'); el.classList.remove('move-top'); el.classList.remove('move-bottom');}))
  setTimeout(changeRight, 150)
  leftItem.addEventListener('animationend', checkResults)
}

const moveLeft = () => {
  steps++
  stepsCounter.innerHTML = steps
  let items = document.querySelectorAll('.field-item')
  rightItem.classList.add('move-left')
  rightItem.addEventListener('animationend', () => items.forEach(el => {el.classList.remove('move-right'); el.classList.remove('move-left'); el.classList.remove('move-top'); el.classList.remove('move-bottom');}))
  setTimeout(changeLeft, 150)
  rightItem.addEventListener('animationend', checkResults)
}

const moveUp = () => {
  steps++
  stepsCounter.innerHTML = steps
  let items = document.querySelectorAll('.field-item')
  bottomItem.classList.add('move-top')
  bottomItem.addEventListener('animationend', () => items.forEach(el => {el.classList.remove('move-right'); el.classList.remove('move-left'); el.classList.remove('move-top'); el.classList.remove('move-bottom');}))
  setTimeout(changeTop, 150)
  bottomItem.addEventListener('animationend', checkResults)
}

const moveDown = () => {
  steps++
  stepsCounter.innerHTML = steps
  let items = document.querySelectorAll('.field-item')
  topItem.classList.add('move-bottom')
  topItem.addEventListener('animationend', () => items.forEach(el => {el.classList.remove('move-right'); el.classList.remove('move-left'); el.classList.remove('move-top'); el.classList.remove('move-bottom');}))
  setTimeout(changeBottom, 150)
  topItem.addEventListener('animationend', checkResults)
}

/* timer */

let isStarted = false

let seconds = 0;
let minutes = 0

const runTimer = () => {
  if (isStarted == true) {
    timer.style.opacity = 1
    seconds = 0
    minutes = 0
    timerSeconds.innerHTML = '00'
    timerMinutes.innerHTML = '00'
    return
  } else {
    timer.style.opacity = 1
    isStarted = true
    setInterval(() => {
      seconds++
      if (seconds < 10) {
        timerSeconds.innerHTML = `0${seconds}`
      } else {
        timerSeconds.innerHTML = seconds
      }
      if (seconds >= 60) {
        seconds = 0
        minutes++
        timerSeconds.innerHTML = `0${seconds}`
        if (minutes < 10) {
          timerMinutes.innerHTML = `0${minutes}`
        } else {
          timerMinutes.innerHTML = minutes
        }
      }
    }, 1000)
  }
}

buttonStart.addEventListener('click', runTimer)


const popupWin = document.createElement('div')
popupWin.className = 'popup-win'
const popupBg = document.createElement('div')
popupBg.className = 'popup-win-background'
document.body.append(popupWin, popupBg)

const popupButton = document.createElement('button')
popupButton.className = 'popup-button'
popupButton.innerHTML = 'Start new game'
const popupText = document.createElement('p')
popupText.className = 'popup-text'

popupWin.append(popupText, popupButton)


const closePopup = () => {
  popupBg.style.opacity = '0'
  popupBg.style.visibility = 'hidden'
  popupWin.style.opacity = '0'
  popupWin.style.visibility = 'hidden'
}

popupButton.addEventListener('click', closePopup)
popupButton.addEventListener('click', startNewGame)
popupButton.addEventListener('click', fillTheFields)
popupButton.addEventListener('click', hideZeroItem)
popupButton.addEventListener('click', () => setTimeout(findItems, 5))
popupButton.addEventListener('click', runTimer)



/* results */

const showResults = () => {
  resultsWrapper.classList.add('visible')
}

const hideResults = () => {
  resultsWrapper.classList.remove('visible')
}


buttonResults.addEventListener('click', showResults)
closeResultsBtn.addEventListener('click', hideResults)
resultsBackground.addEventListener('click', hideResults)

const findCurrentTime = () => {
  return `${timerMinutes.innerHTML} : ${timerSeconds.innerHTML}`
}

const findCurrentMode = () => {
  let items = document.querySelectorAll('.field-item')
  if (items.length == 9) {
    return '3x3'
  } else if (items.length == 16) {
    return '4x4'
  } else if (items.length == 25) {
    return '5x5'
  } else if (items.length == 36) {
    return '6x6'
  } else if (items.length == 49) {
    return '7x7'
  } else if (items.length == 64) {
    return '8x8'
  }
}

const updateResults = () => {
  let resultItNode = document.querySelectorAll('.result-item')
  if (resultItNode[0].innerHTML == '') {
    resultItNode[0].innerHTML = `Moves: ${stepsCounter.innerHTML}, Time: ${findCurrentTime()}, Mode: ${findCurrentMode()}`
  } else {
    resultItNode[9].innerHTML = resultItNode[8].innerHTML
    resultItNode[8].innerHTML = resultItNode[7].innerHTML
    resultItNode[7].innerHTML = resultItNode[6].innerHTML
    resultItNode[6].innerHTML = resultItNode[5].innerHTML
    resultItNode[5].innerHTML = resultItNode[4].innerHTML
    resultItNode[4].innerHTML = resultItNode[3].innerHTML
    resultItNode[3].innerHTML = resultItNode[2].innerHTML
    resultItNode[2].innerHTML = resultItNode[1].innerHTML
    resultItNode[1].innerHTML = resultItNode[0].innerHTML
    resultItNode[0].innerHTML = `Moves: ${stepsCounter.innerHTML}, Time: ${findCurrentTime()}, Mode: ${findCurrentMode()}`
  }
}


/* local storage */

const saveResults = () => {
  let resultItNode = document.querySelectorAll('.result-item')
  localStorage.setItem('result1', resultItNode[0].innerHTML)
  localStorage.setItem('result2', resultItNode[1].innerHTML)
  localStorage.setItem('result3', resultItNode[2].innerHTML)
  localStorage.setItem('result4', resultItNode[3].innerHTML)
  localStorage.setItem('result5', resultItNode[4].innerHTML)
  localStorage.setItem('result6', resultItNode[5].innerHTML)
  localStorage.setItem('result7', resultItNode[6].innerHTML)
  localStorage.setItem('result8', resultItNode[7].innerHTML)
  localStorage.setItem('result9', resultItNode[8].innerHTML)
  localStorage.setItem('result10', resultItNode[9].innerHTML)
}

window.addEventListener('beforeunload', saveResults)

const getResults = () => {
  let resultItNode = document.querySelectorAll('.result-item')
  resultItNode[0].innerHTML = localStorage.getItem('result1')
  resultItNode[1].innerHTML = localStorage.getItem('result2')
  resultItNode[2].innerHTML = localStorage.getItem('result3')
  resultItNode[3].innerHTML = localStorage.getItem('result4')
  resultItNode[4].innerHTML = localStorage.getItem('result5')
  resultItNode[5].innerHTML = localStorage.getItem('result6')
  resultItNode[6].innerHTML = localStorage.getItem('result7')
  resultItNode[7].innerHTML = localStorage.getItem('result8')
  resultItNode[8].innerHTML = localStorage.getItem('result9')
  resultItNode[9].innerHTML = localStorage.getItem('result10')
}

window.addEventListener('load', getResults)

const saveGame = () => {
  localStorage.setItem('game', fieldWrapper.innerHTML)
  savedGameText.style.opacity = 1
  savedGameText.style.visibility = 'visible'
  setTimeout(() => {savedGameText.style.opacity = 0; savedGameText.style.visibility = 'hidden'}, 1000)
  localStorage.setItem('steps', stepsCounter.innerHTML)
  localStorage.setItem('minutes', minutes)
  localStorage.setItem('seconds', seconds)
  localStorage.setItem('field-class', fieldWrapper.className)
}

buttonSave.addEventListener('click', saveGame)

const loadGame = () => {
  let items = document.querySelectorAll('.field-item') 
  if (items.length > 0) {
    minutes = localStorage.getItem('minutes')
    seconds = localStorage.getItem('seconds')
  }
   else {
    minutes = localStorage.getItem('minutes')
    seconds = localStorage.getItem('seconds')
    runTimer()
   }
   fieldWrapper.innerHTML = localStorage.getItem('game')
   stepsCounter.innerHTML = localStorage.getItem('steps')
   steps = localStorage.getItem('steps')
   findItems()
   fieldWrapper.className = localStorage.getItem('field-class')
}

buttonLoad.addEventListener('click', loadGame)