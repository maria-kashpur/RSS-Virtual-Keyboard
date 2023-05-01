const KEYS = {
  Backquote: {
    en: {
      caseDown: '`',
      shift: '~',
      option: '`',
    },
    ru: {
      caseDown: 'ё',
      shift: '~',
      option: '`',
    }
  },
  Digit1: {
    en: {
      caseDown: '1',
      shift: '!',
      option: '¡',
    },
    ru: {
      caseDown: '1',
      shift: '!',
      option: '!',
    }
  },
  Digit2: {
    en: {
      caseDown: '2',
      shift: '@',
      option: '™',
    },
    ru: {
      caseDown: '2',
      shift: '"',
      option: '@',
    }
  },
  Digit3: {
    en: {
      caseDown: '3',
      shift: '#',
      option: '£',
    },
    ru: {
      caseDown: '3',
      shift: '№',
      option: '#',
    }
  },
  Digit4: {
    en: {
      caseDown: '4',
      shift: '$',
      option: '¢',
    },
    ru: {
      caseDown: '4',
      shift: ';',
      option: '$',
    }
  },
  Digit5: {
    en: {
      caseDown: '5',
      shift: '%',
      option: '∞',
    },
    ru: {
      caseDown: '5',
      shift: '%',
      option: '©',
    }
  },
  Digit6: {
    en: {
      caseDown: '6',
      shift: '^',
      option: '§',
    },
    ru: {
      caseDown: '6',
      shift: ':',
      option: '^',
    }
  },
  Digit7: {
    en: {
      caseDown: '7',
      shift: '&',
      option: '¶',
    },
    ru: {
      caseDown: '7',
      shift: '?',
      option: '&',
    }
  },
  Digit8: {
    en: {
      caseDown: '8',
      shift: '*',
      option: '•',
    },
    ru: {
      caseDown: '8',
      shift: '*',
      option: '₽',
    }
  },
  Digit9: {
    en: {
      caseDown: '9',
      shift: '(',
      option: 'ª',
    },
    ru: {
      caseDown: '9',
      shift: '(',
      option: '(',
    }
  },
  Digit0: {
    en: {
      caseDown: '0',
      shift: ')',
      option: 'º',
    },
    ru: {
      caseDown: '0',
      shift: ')',
      option: ')',
    }
  },
  Minus: {
    en: {
      caseDown: '-',
      shift: '_',
      option: '–',
    },
    ru: {
      caseDown: '-',
      shift: '_',
      option: '–',
    }
  },
  Equal: {
    en: {
      caseDown: '=',
      shift: '+',
      option: '≠',
    },
    ru: {
      caseDown: '=',
      shift: '+',
      option: '≠',
    }
  },
  Backspace: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  Delete: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  Tab: {
    en: {
      caseDown: '\t',
      shift: '\t',
      option: '\t',
    },
    ru: {
      caseDown: '\t',
      shift: '\t',
      option: '\t',
    }
  },
  KeyQ: {
    en: {
      caseDown: 'q',
      shift: 'Q',
      option: 'œ',
    },
    ru: {
      caseDown: 'й',
      shift: 'Й',
      option: 'ј',
    }
  },
  KeyW: {
    en: {
      caseDown: 'w',
      shift: 'W',
      option: 'џ',
    },
    ru: {
      caseDown: 'ц',
      shift: 'Ц',
      option: 'џ',
    }
  },
  KeyE: {
    en: {
      caseDown: 'e',
      shift: 'E',
      option: '\´',
    },
    ru: {
      caseDown: 'у',
      shift: 'У',
      option: 'ў',
    }
  },
  KeyR: {
    en: {
      caseDown: 'r',
      shift: 'R',
      option: '®',
    },
    ru: {
      caseDown: 'к',
      shift: 'К',
      option: 'ќ',
    }
  },
  KeyT: {
    en: {
      caseDown: 't',
      shift: 'T',
      option: '†',
    },
    ru: {
      caseDown: 'е',
      shift: 'Е',
      option: '†',
    }
  },
  KeyY: {
    en: {
      caseDown: 'y',
      shift: 'Y',
      option: '¥',
    },
    ru: {
      caseDown: 'н',
      shift: 'Н',
      option: 'њ',
    }
  },
  KeyU: {
    en: {
      caseDown: 'u',
      shift: 'U',
      option: '¨',
    },
    ru: {
      caseDown: 'г',
      shift: 'Г',
      option: 'ѓ',
    }
  },
  KeyI: {
    en: {
      caseDown: 'i',
      shift: 'I',
      option: 'ˆ',
    },
    ru: {
      caseDown: 'ш',
      shift: 'Ш',
      option: 'ѕ',
    }
  },
  KeyO: {
    en: {
      caseDown: 'o',
      shift: 'O',
      option: 'ø',
    },
    ru: {
      caseDown: 'щ',
      shift: 'Щ',
      option: `'`,
    }
  },
  KeyP: {
    en: {
      caseDown: 'p',
      shift: 'P',
      option: 'π',
    },
    ru: {
      caseDown: 'з',
      shift: 'З',
      option: '‘',
    }
  },
  BracketLeft: {
    en: {
      caseDown: '[',
      shift: '{',
      option: '“',
    },
    ru: {
      caseDown: 'х',
      shift: 'Х',
      option: '“',
    }
  },
  BracketRight: {
    en: {
      caseDown: ']',
      shift: '}',
      option: '‘',
    },
    ru: {
      caseDown: 'ъ',
      shift: 'Ъ',
      option: '«',
    }
  },
  Backslash: {
    en: {
      caseDown: '\\',
      shift: '|',
      option: '«',
    },
    ru: {
      caseDown: '\\',
      shift: '/',
      option: '|',
    }
  },
  CapsLock: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  KeyA: {
    en: {
      caseDown: 'a',
      shift: 'A',
      option: 'å',
    },
    ru: {
      caseDown: 'ф',
      shift: 'Ф',
      option: 'd',
    }
  },
  KeyS: {
    en: {
      caseDown: 's',
      shift: 'S',
      option: 'ß',
    },
    ru: {
      caseDown: 'ы',
      shift: 'Ы',
      option: 'z',
    }
  },
  KeyD: {
    en: {
      caseDown: 'd',
      shift: 'D',
      option: '∂',
    },
    ru: {
      caseDown: 'в',
      shift: 'В',
      option: 'ћ',
    }
  },
  KeyF: {
    en: {
      caseDown: 'f',
      shift: 'F',
      option: 'ƒ',
    },
    ru: {
      caseDown: 'а',
      shift: 'А',
      option: '÷',
    }
  },
  KeyG: {
    en: {
      caseDown: 'g',
      shift: 'G',
      option: '©',
    },
    ru: {
      caseDown: 'п',
      shift: 'П',
      option: '…',
    }
  },
  KeyH: {
    en: {
      caseDown: 'h',
      shift: 'H',
      option: '˙',
    },
    ru: {
      caseDown: 'р',
      shift: 'Р',
      option: '•',
    }
  },
  KeyJ: {
    en: {
      caseDown: 'j',
      shift: 'J',
      option: '∆',
    },
    ru: {
      caseDown: 'о',
      shift: 'О',
      option: '∆',
    }
  },
  KeyK: {
    en: {
      caseDown: 'k',
      shift: 'K',
      option: '˚',
    },
    ru: {
      caseDown: 'л',
      shift: 'Л',
      option: 'љ',
    }
  },
  KeyL: {
    en: {
      caseDown: 'l',
      shift: 'L',
      option: '¬',
    },
    ru: {
      caseDown: 'д',
      shift: 'Д',
      option: 'l',
    }
  },
  Semicolon: {
    en: {
      caseDown: ';',
      shift: ':',
      option: '…',
    },
    ru: {
      caseDown: 'ж',
      shift: 'Ж',
      option: '«',
    }
  },
  Quote: {
    en: {
      caseDown: `'`,
      shift: '"',
      option: 'æ',
    },
    ru: {
      caseDown: 'э',
      shift: 'Э',
      option: 'є',
    }
  },
  Enter: {
    en: {
      caseDown: '\n',
      shift: '\n',
      option: '\n',
    },
    ru: {
      caseDown: '\n',
      shift: '\n',
      option: '\n',
    }
  },
  ShiftLeft: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  KeyZ: {
    en: {
      caseDown: 'z',
      shift: 'Z',
      option: 'Ω',
    },
    ru: {
      caseDown: 'я',
      shift: 'Я',
      option: 'ђ',
    }
  },
  KeyX: {
    en: {
      caseDown: 'x',
      shift: 'X',
      option: '≈',
    },
    ru: {
      caseDown: 'ч',
      shift: 'Ч',
      option: 'x',
    }
  },
  KeyC: {
    en: {
      caseDown: 'c',
      shift: 'C',
      option: 'ç',
    },
    ru: {
      caseDown: 'с',
      shift: 'С',
      option: 'c',
    }
  },
  KeyV: {
    en: {
      caseDown: 'v',
      shift: 'V',
      option: '√',
    },
    ru: {
      caseDown: 'м',
      shift: 'М',
      option: 'v',
    }
  },
  KeyB: {
    en: {
      caseDown: 'b',
      shift: 'B',
      option: '∫',
    },
    ru: {
      caseDown: 'и',
      shift: 'И',
      option: 'і',
    }
  },
  KeyN: {
    en: {
      caseDown: 'n',
      shift: 'N',
      option: '˜',
    },
    ru: {
      caseDown: 'т',
      shift: 'Т',
      option: 'ƒ',
    }
  },
  KeyM: {
    en: {
      caseDown: 'm',
      shift: 'M',
      option: 'µ',
    },
    ru: {
      caseDown: 'ь',
      shift: 'Ь',
      option: 'm',
    }
  },
  Comma: {
    en: {
      caseDown: ',',
      shift: '<',
      option: '≤',
    },
    ru: {
      caseDown: 'б',
      shift: 'Б',
      option: '≤',
    }
  },
  Period: {
    en: {
      caseDown: '.',
      shift: '>',
      option: '≥',
    },
    ru: {
      caseDown: 'ю',
      shift: 'Ю',
      option: '≥',
    }
  },
  Slash: {
    en: {
      caseDown: '/',
      shift: '?',
      option: '÷',
    },
    ru: {
      caseDown: '.',
      shift: ',',
      option: 'ї',
    }
  },
  ArrowUp: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ShiftRight: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ControlLeft: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  AltLeft: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  MetaLeft: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  Space: {
    en: {
      caseDown: ' ',
      shift: ' ',
      option: ' ',
    },
    ru: {
      caseDown: ' ',
      shift: ' ',
      option: ' ',
    }
  },
  MetaRight: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  AltRight: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ArrowLeft: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ArrowUp: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ArrowDown: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
  ArrowRight: {
    en: {
      caseDown: '',
      shift: '',
      option: '',
    },
    ru: {
      caseDown: '',
      shift: '',
      option: '',
    }
  },
};

const KEY_ROWS = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], 
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'MetaRight']
];

// to create a new key_row 
const keys__row = []
function createKEY__ROW () {
  document.onkeydown = function (e) {
        keys__row.push(e.code)
        console.log(keys__row)
  }
}


export {KEYS, KEY_ROWS}