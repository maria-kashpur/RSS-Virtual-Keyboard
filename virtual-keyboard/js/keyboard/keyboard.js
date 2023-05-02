/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import { KEYS, KEY_ROWS } from './keys.js';
import createEl from '../create_element.js';

let lang = '';
if (localStorage.getItem('lang')) {
  lang = localStorage.getItem('lang');
} else {
  lang = 'en';
}
localStorage.setItem('lang', lang);
let letterType = 'caseDown';
let isCapsLock = false;

function paintingKeyboard() {
  const keyWrapper = document.querySelector('.keyboard__body');

  KEY_ROWS.forEach((el) => {
    const keyRow = createEl(keyWrapper, 'div', 'keys__row');
    el.forEach((subEl) => {
      const key = createEl(keyRow, 'button', 'key');
      key.classList.add(`${subEl}`);
      key.textContent = KEYS[subEl][lang][letterType];
    });
  });
}

function convertToUpperCase() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => { key.textContent = key.textContent.toUpperCase(); });
}

function convertToLowerCase() {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => { key.textContent = key.textContent.toLowerCase(); });
}

function changeKeyValue() {
  KEY_ROWS.forEach((el) => {
    el.forEach((subEl) => {
      document.querySelector(`.${subEl}`).textContent = KEYS[subEl][lang][letterType];
    });
  });
}

function clickTextEntry(keys) {
  const textArea = document.querySelector('.keyboard__text');
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      const posStart = textArea.selectionStart;
      const posEnd = textArea.selectionEnd;
      if (key.classList.contains('Backspace')) {
        // click 'Backspace'
        if (posStart === posEnd && posStart === textArea.value) {
          textArea.focus();
          const start = posStart === 0 ? 0 : posStart - 1;
          textArea.setRangeText('', start, posEnd, 'end');
        } else if (posStart === posEnd && posStart !== textArea.value) {
          textArea.focus();
          const start = posStart === 0 ? 0 : posStart - 1;
          textArea.setRangeText('', start, posEnd, 'end');
        } else {
          textArea.focus();
          textArea.setRangeText('', posStart, posEnd, 'end');
        }
      } else if (key.classList.contains('Delete')) {
        // click 'Delete'
        if (posStart === posEnd && posStart === textArea.value) {
          textArea.focus();
        } else if (posStart === posEnd && posStart !== textArea.value) {
          textArea.focus();
          const start = posStart;
          textArea.setRangeText('', start, start + 1, 'end');
        } else {
          textArea.focus();
          textArea.setRangeText('', posStart, posEnd, 'end');
        }
      } else if (key.classList.contains('Tab')) {
        // click 'Тab'
        textArea.focus();
        const tab = '\t';
        textArea.setRangeText(tab, posStart, posEnd, 'end');
      } else if (key.classList.contains('CapsLock')) {
        // click 'CapsLock'
        textArea.focus();
        if (key.classList.contains('on')) {
          key.classList.remove('on');
          key.classList.remove('active');
          isCapsLock = false;
          convertToLowerCase();
        } else {
          key.classList.add('on');
          isCapsLock = true;
          convertToUpperCase();
        }
      } else if (key.classList.contains('ArrowLeft')) {
        // click 'ArrowLeft'
        textArea.focus();
        let range = 0;
        if (!textArea.selectionStart === 0) {
          range = textArea.selectionStart - 1;
        }
        textArea.setSelectionRange(range, range);
      } else if (key.classList.contains('ArrowRight')) {
        // click 'ArrowRight'
        textArea.focus();
        let range = 0;
        if (textArea.selectionStart === textArea.value.length) {
          range = textArea.value.length;
        } else {
          range = textArea.selectionStart + 1;
        }
        textArea.setSelectionRange(range, range);
      } else if (key.classList.contains('ArrowUp')) {
        // click 'ArrowUp'
        textArea.focus();
        const cols = +textArea.getAttribute('cols');
        let range = 0;
        if (textArea.selectionStart > cols) {
          range = textArea.selectionStart - cols - 1;
        } else {
          range = textArea.selectionStart;
        }
        textArea.setSelectionRange(range, range);
      } else if (key.classList.contains('ArrowDown')) {
        // click 'ArrowDown'
        textArea.focus();
        const cols = +textArea.getAttribute('cols');
        const range = textArea.selectionStart + cols + 1;
        textArea.setSelectionRange(range, range);
      } else {
        const letter = key.textContent;
        textArea.focus();
        textArea.setRangeText(letter, posStart, posEnd, 'end');
      }
    });
  });
}

function initeShift() {
  const textArea = document.querySelector('.keyboard__text');

  document.querySelector('.ShiftLeft').addEventListener('mousedown', () => {
    textArea.focus();
    // eslint-disable-next-line no-unused-expressions
    isCapsLock ? convertToLowerCase() : convertToUpperCase();
  });

  document.querySelector('.ShiftLeft').addEventListener('mouseup', () => {
    textArea.focus();
    isCapsLock ? convertToUpperCase() : convertToLowerCase();
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'ShiftLeft') {
      isCapsLock ? convertToLowerCase() : convertToUpperCase();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'ShiftLeft') {
      isCapsLock ? convertToUpperCase() : convertToLowerCase();
    }
  });
}

function initeAlt() {
  const textArea = document.querySelector('.keyboard__text');

  document.querySelector('.AltLeft').addEventListener('mousedown', () => {
    textArea.focus();
    letterType = 'option';
    changeKeyValue();
  });

  document.querySelector('.AltLeft').addEventListener('mouseup', () => {
    textArea.focus();
    letterType = 'caseDown';
    changeKeyValue();
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'AltLeft') {
      letterType = 'option';
      changeKeyValue();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.code === 'AltLeft') {
      letterType = 'caseDown';
      changeKeyValue();
    }
  });
}

function changeLang() {
  if (lang === 'en') {
    lang = 'ru';
  } else {
    lang = 'en';
  }

  localStorage.setItem('lang', lang);
  changeKeyValue();
}

function keyPressTextEntry() {
  const textArea = document.querySelector('.keyboard__text');
  document.addEventListener('keydown', (event) => {
    const presskey = document.querySelector(`.${event.code}`);
    presskey.classList.add('active');

    const inputKey = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'];
    inputKey.forEach((el) => {
      if (event.code === el) {
        event.preventDefault();
        const letter = document.querySelector(`.${event.code}`).textContent;
        textArea.focus();
        const posStart = textArea.selectionStart;
        const posEnd = textArea.selectionEnd;
        textArea.setRangeText(letter, posStart, posEnd, 'end');
      }
    });

    event.shiftKey ? document.querySelector('.ShiftLeft').classList.add('active') : document.querySelector('.ShiftLeft').classList.remove('active');

    if (event.code === 'CapsLock') {
      if (event.getModifierState('CapsLock')) {
        presskey.classList.add('on');
        convertToUpperCase();
      }
      isCapsLock = event.getModifierState('CapsLock');
    }
  });

  document.addEventListener('keyup', (event) => {
    const presskey = document.querySelector(`.${event.code}`);

    presskey.classList.remove('active');

    if (event.code === 'CapsLock') {
      if (!event.getModifierState('CapsLock')) {
        presskey.classList.remove('on');
        convertToLowerCase();
      }
      isCapsLock = event.getModifierState('CapsLock');
    }
  });
}

function initeKeys(func, ...keys) {
  let arrPressedKeys = [];

  document.addEventListener('keydown', (event) => {
    if (event.repeat) return;
    arrPressedKeys.push(event.code);
  });

  document.addEventListener('keyup', () => {
    if (arrPressedKeys.length === 0) return;

    let isFunc = true;

    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!arrPressedKeys.includes(key)) {
        isFunc = false;
        break;
      }
    }

    if (isFunc) func();

    arrPressedKeys = [];
  });
}

export {
  paintingKeyboard, clickTextEntry, keyPressTextEntry, initeShift, initeAlt, initeKeys, changeLang,
};
