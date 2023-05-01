import { createEl } from './create_element.js';
import {
  paintingKeyboard,
  clickTextEntry,
  keyPressTextEntry,
  initeShift,
  initeAlt,
  initeKeys,
  changeLang,
} from './keyboard/keyboard.js';

const keyboardSection = createEl(document.body, 'section', 'keyboard');

keyboardSection.innerHTML = `<h1 class="keyboard__title">Виртуальная RSS-клавиатура</h1>
<textarea class="keyboard__text" rows="7" cols="50" autofocus></textarea>
<div class="keyboard__body"></div>
<div class="keyboard__additional-inf">
<p>Клавиатура создана в операционной системе MacOS</p>
<p>Для переключения языка: левыe shift + control</p>
</div>`;

paintingKeyboard();
clickTextEntry(document.querySelectorAll('.key'));
keyPressTextEntry();
initeShift();
initeAlt();
initeKeys(changeLang, 'ShiftLeft', 'ControlLeft');
