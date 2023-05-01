import {KEYS, KEY_ROWS} from './keys.js'

const body = document.body;
const keyboardSection = createEl(body, 'section', 'keyboard');

let lang = 'en'
let letterType = 'caseDown'

keyboardSection.innerHTML = `<h1 class="keyboard__title">Виртуальная RSS-клавиатура</h1>
<textarea class="keyboard__text" rows="7" cols="10" autofocus></textarea>
<div class="keyboard__body"></div>
<div class="keyboard__additional-inf">
<p>Клавиатура создана в операционной системе MacOS</p>
<p>Для переключения языка: левыe ctrl + alt</p>
</div>`;

function paintingKeyboard () {
  const keyWrapper = document.querySelector('.keyboard__body');

  KEY_ROWS.forEach(el => {
    let keyRow = createEl(keyWrapper, 'div', 'keys__row');
    el.forEach(subEl => {
      let key = createEl(keyRow, 'button', `key`);
      key.classList.add(`${subEl}`)
      key.textContent = KEYS[subEl][lang][letterType]
    })
  })
}
// ---------------------------
const textArea = document.querySelector('.keyboard__text')

let isCapsLock = false;

function convertToUpperCase () {
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => {key.textContent = key.textContent.toUpperCase()})
}

function convertToLowerCase () {
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => {key.textContent = key.textContent.toLowerCase()})
}

function clickTextEntry () {
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => {
    key.addEventListener('click', (event) => {
        let posStart = textArea.selectionStart;
        let posEnd = textArea.selectionEnd;
        if (key.classList.contains('Backspace')) {
          // click 'Backspace'
          if (posStart === posEnd && posStart === textArea.value) {
            textArea.focus()
            let start = posStart === 0 ? 0 : posStart - 1
            textArea.setRangeText('', start, posEnd, "end")
          } else if (posStart === posEnd && posStart !== textArea.value) {
            textArea.focus()
            let start = posStart === 0 ? 0 : posStart - 1
            textArea.setRangeText('', start, posEnd, "end")
          } else {
            textArea.focus()
            textArea.setRangeText('', posStart, posEnd, "end")
          }
        } else if (key.classList.contains('Tab')) {
          // click 'Тab'
          textArea.focus();
          let tab = '\t';
          textArea.setRangeText(tab, posStart, posEnd, "end");
        } else if (key.classList.contains('CapsLock')) {
          // click 'CapsLock'
          textArea.focus()
          if (key.classList.contains('on')) {
            key.classList.remove('on');
            key.classList.remove('active');
            isCapsLock = false;
            convertToLowerCase()
          } else {
            key.classList.add('on') 
            isCapsLock = true;
            convertToUpperCase()
          }
        } else if (key.classList.contains('ArrowLeft')) {
          // click 'ArrowLeft'
          textArea.focus()
          let range = textArea.selectionStart === 0 ? 0 : textArea.selectionStart - 1;
          textArea.setSelectionRange(range, range)
        } else if (key.classList.contains('ArrowRight')) {
          // click 'ArrowRight'
          textArea.focus()
          let range = textArea.selectionStart === textArea.value.length  ? textArea.value.length : textArea.selectionStart + 1;
          textArea.setSelectionRange(range, range)
        } else if (key.classList.contains('ArrowUp')) {
          // click 'ArrowUp'
          textArea.focus();
          let cols = + textArea.getAttribute('cols');
          let range = textArea.selectionStart > cols ? textArea.selectionStart - cols - 1: textArea.selectionStart;
          textArea.setSelectionRange(range, range);
        } else if (key.classList.contains('ArrowDown')) {
          // click 'ArrowDown'
          textArea.focus();
          let cols = + textArea.getAttribute('cols');
          let A =  textArea.selectionStart + cols + 1;
          textArea.setSelectionRange(A, A);
        } else if (key.classList.contains(' ')) {
          // click 'ArrowDown'
          textArea.focus();
          
        } else {
          let letter = key.textContent;
          textArea.focus()
          textArea.setRangeText(letter, posStart, posEnd, "end")
        }
    })
  })
};


function keyPressTextEntry () {
  document.addEventListener('keydown', (event) => {
    let presskey = document.querySelector(`.${event.code}`);
    presskey.classList.add('active');
    
    if (event.code === 'CapsLock') {
      if (event.getModifierState('CapsLock')) {
        presskey.classList.add('on')
        convertToUpperCase()
      } 
      isCapsLock = event.getModifierState('CapsLock')
    } 

  })

  document.addEventListener('keyup', (event) => {
    let presskey = document.querySelector(`.${event.code}`);

      presskey.classList.remove('active');

      if (event.code === 'CapsLock') {
        if (!event.getModifierState('CapsLock')) {
          presskey.classList.remove('on')
          convertToLowerCase()
        }
        isCapsLock = event.getModifierState('CapsLock')
      } 
  })
}

// переключение языка, кнопки вверх вниз, кнопка shift, alt, delete

function createEl(parent, tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  parent.append(el)
  return el
}

paintingKeyboard()
clickTextEntry ();
keyPressTextEntry ();