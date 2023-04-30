const textArea = document.querySelector('.keyboard__text')
const keys = document.querySelectorAll('.key')
let isCapsLock = false;

function convertToUpperCase () {
  keys.forEach(key => {key.textContent = key.textContent.toUpperCase()})

}

function convertToLowerCase () {
  keys.forEach(key => {key.textContent = key.textContent.toLowerCase()})
}

function clickTextEntry () {
  keys.forEach(key => {
    key.addEventListener('click', (event) => {
        let posStart = textArea.selectionStart;
        let posEnd = textArea.selectionEnd;
        // click 'Backspace'
        if (key.classList.contains('Backspace')) {
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
          textArea.focus();
          let tab = '\t';
          textArea.setRangeText(tab, posStart, posEnd, "end");
        } else if (key.classList.contains('CapsLock')) {
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

function initeKeyboad () {
  clickTextEntry ();
  keyPressTextEntry ();
}



// export {initeKeyboad}

