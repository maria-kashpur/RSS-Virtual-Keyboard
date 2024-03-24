export enum SimbolKey {
  Backquote = "Backquote",
  Digit1 = "Digit1",
  Digit2 = "Digit2",
  Digit3 = "Digit3",
  Digit4 = "Digit4",
  Digit5 = "Digit5",
  Digit6 = "Digit6",
  Digit7 = "Digit7",
  Digit8 = "Digit8",
  Digit9 = "Digit9",
  Digit0 = "Digit0",
  Minus = "Minus",
  Equal = "Equal",
  KeyQ = "KeyQ",
  KeyW = "KeyW",
  KeyE = "KeyE",
  KeyR = "KeyR",
  KeyT = "KeyT",
  KeyY = "KeyY",
  KeyU = "KeyU",
  KeyI = "KeyI",
  KeyO = "KeyO",
  KeyP = "KeyP",
  BracketLeft = "BracketLeft",
  BracketRight = "BracketRight",
  Backslash = "Backslash",
  KeyA = "KeyA",
  KeyS = "KeyS",
  KeyD = "KeyD",
  KeyF = "KeyF",
  KeyG = "KeyG",
  KeyH = "KeyH",
  KeyJ = "KeyJ",
  KeyK = "KeyK",
  KeyL = "KeyL",
  Semicolon = "Semicolon",
  Quote = "Quote",
  KeyZ = "KeyZ",
  KeyX = "KeyX",
  KeyC = "KeyC",
  KeyV = "KeyV",
  KeyB = "KeyB",
  KeyN = "KeyN",
  KeyM = "KeyM",
  Comma = "Comma",
  Period = "Period",
  Slash = "Slash",
}

export enum ServiceKey {
  Backspace = "Backspace",
  Tab = "Tab",
  Delete = "Delete",
  Enter = "Enter",
  CapsLock = "CapsLock",
  ShiftRight = "ShiftRight",
  MetaRight = "MetaRight",
  Space = "Space",
  MetaLeft = "MetaLeft",
  AltLeft = "AltLeft",
  ControlLeft = "ControlLeft",
  ArrowUp = "ArrowUp",
  ShiftLeft = "ShiftLeft",
  ArrowRight = "ArrowRight",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  AltRight = "AltRight",
}

export enum LetterType {
  caseDown = "caseDown",
  shift = "shift",
  option = "option"
};

export type KeyValue = {
  [key in LetterType]: string
}

export type Langs = 'en' | "ru";

export type KeyData = {
  [key in Langs]: KeyValue;
};

export const KEYS: { [key in SimbolKey | ServiceKey]: KeyData } = {
  [SimbolKey.Backquote]: {
    en: {
      caseDown: "`",
      shift: "~",
      option: "`",
    },
    ru: {
      caseDown: "ё",
      shift: "~",
      option: "`",
    },
  },
  [SimbolKey.Digit1]: {
    en: {
      caseDown: "1",
      shift: "!",
      option: "¡",
    },
    ru: {
      caseDown: "1",
      shift: "!",
      option: "!",
    },
  },
  [SimbolKey.Digit2]: {
    en: {
      caseDown: "2",
      shift: "@",
      option: "™",
    },
    ru: {
      caseDown: "2",
      shift: '"',
      option: "@",
    },
  },
  [SimbolKey.Digit3]: {
    en: {
      caseDown: "3",
      shift: "#",
      option: "£",
    },
    ru: {
      caseDown: "3",
      shift: "№",
      option: "#",
    },
  },
  [SimbolKey.Digit4]: {
    en: {
      caseDown: "4",
      shift: "$",
      option: "¢",
    },
    ru: {
      caseDown: "4",
      shift: ";",
      option: "$",
    },
  },
  [SimbolKey.Digit5]: {
    en: {
      caseDown: "5",
      shift: "%",
      option: "∞",
    },
    ru: {
      caseDown: "5",
      shift: "%",
      option: "©",
    },
  },
  [SimbolKey.Digit6]: {
    en: {
      caseDown: "6",
      shift: "^",
      option: "§",
    },
    ru: {
      caseDown: "6",
      shift: ":",
      option: "^",
    },
  },
  [SimbolKey.Digit7]: {
    en: {
      caseDown: "7",
      shift: "&",
      option: "¶",
    },
    ru: {
      caseDown: "7",
      shift: "?",
      option: "&",
    },
  },
  [SimbolKey.Digit8]: {
    en: {
      caseDown: "8",
      shift: "*",
      option: "•",
    },
    ru: {
      caseDown: "8",
      shift: "*",
      option: "₽",
    },
  },
  [SimbolKey.Digit9]: {
    en: {
      caseDown: "9",
      shift: "(",
      option: "ª",
    },
    ru: {
      caseDown: "9",
      shift: "(",
      option: "(",
    },
  },
  [SimbolKey.Digit0]: {
    en: {
      caseDown: "0",
      shift: ")",
      option: "º",
    },
    ru: {
      caseDown: "0",
      shift: ")",
      option: ")",
    },
  },
  [SimbolKey.Minus]: {
    en: {
      caseDown: "-",
      shift: "_",
      option: "–",
    },
    ru: {
      caseDown: "-",
      shift: "_",
      option: "–",
    },
  },
  [SimbolKey.Equal]: {
    en: {
      caseDown: "=",
      shift: "+",
      option: "≠",
    },
    ru: {
      caseDown: "=",
      shift: "+",
      option: "≠",
    },
  },
  [ServiceKey.Backspace]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.Delete]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.Tab]: {
    en: {
      caseDown: "\t",
      shift: "\t",
      option: "\t",
    },
    ru: {
      caseDown: "\t",
      shift: "\t",
      option: "\t",
    },
  },
  [SimbolKey.KeyQ]: {
    en: {
      caseDown: "q",
      shift: "Q",
      option: "œ",
    },
    ru: {
      caseDown: "й",
      shift: "Й",
      option: "ј",
    },
  },
  [SimbolKey.KeyW]: {
    en: {
      caseDown: "w",
      shift: "W",
      option: "џ",
    },
    ru: {
      caseDown: "ц",
      shift: "Ц",
      option: "џ",
    },
  },
  [SimbolKey.KeyE]: {
    en: {
      caseDown: "e",
      shift: "E",
      option: "´",
    },
    ru: {
      caseDown: "у",
      shift: "У",
      option: "ў",
    },
  },
  [SimbolKey.KeyR]: {
    en: {
      caseDown: "r",
      shift: "R",
      option: "®",
    },
    ru: {
      caseDown: "к",
      shift: "К",
      option: "ќ",
    },
  },
  [SimbolKey.KeyT]: {
    en: {
      caseDown: "t",
      shift: "T",
      option: "†",
    },
    ru: {
      caseDown: "е",
      shift: "Е",
      option: "†",
    },
  },
  [SimbolKey.KeyY]: {
    en: {
      caseDown: "y",
      shift: "Y",
      option: "¥",
    },
    ru: {
      caseDown: "н",
      shift: "Н",
      option: "њ",
    },
  },
  [SimbolKey.KeyU]: {
    en: {
      caseDown: "u",
      shift: "U",
      option: "¨",
    },
    ru: {
      caseDown: "г",
      shift: "Г",
      option: "ѓ",
    },
  },
  [SimbolKey.KeyI]: {
    en: {
      caseDown: "i",
      shift: "I",
      option: "ˆ",
    },
    ru: {
      caseDown: "ш",
      shift: "Ш",
      option: "ѕ",
    },
  },
  [SimbolKey.KeyO]: {
    en: {
      caseDown: "o",
      shift: "O",
      option: "ø",
    },
    ru: {
      caseDown: "щ",
      shift: "Щ",
      option: "'",
    },
  },
  [SimbolKey.KeyP]: {
    en: {
      caseDown: "p",
      shift: "P",
      option: "π",
    },
    ru: {
      caseDown: "з",
      shift: "З",
      option: "‘",
    },
  },
  [SimbolKey.BracketLeft]: {
    en: {
      caseDown: "[",
      shift: "{",
      option: "“",
    },
    ru: {
      caseDown: "х",
      shift: "Х",
      option: "“",
    },
  },
  [SimbolKey.BracketRight]: {
    en: {
      caseDown: "]",
      shift: "}",
      option: "‘",
    },
    ru: {
      caseDown: "ъ",
      shift: "Ъ",
      option: "«",
    },
  },
  [SimbolKey.Backslash]: {
    en: {
      caseDown: "\\",
      shift: "|",
      option: "«",
    },
    ru: {
      caseDown: "\\",
      shift: "/",
      option: "|",
    },
  },
  [ServiceKey.CapsLock]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [SimbolKey.KeyA]: {
    en: {
      caseDown: "a",
      shift: "A",
      option: "å",
    },
    ru: {
      caseDown: "ф",
      shift: "Ф",
      option: "d",
    },
  },
  [SimbolKey.KeyS]: {
    en: {
      caseDown: "s",
      shift: "S",
      option: "ß",
    },
    ru: {
      caseDown: "ы",
      shift: "Ы",
      option: "z",
    },
  },
  [SimbolKey.KeyD]: {
    en: {
      caseDown: "d",
      shift: "D",
      option: "∂",
    },
    ru: {
      caseDown: "в",
      shift: "В",
      option: "ћ",
    },
  },
  [SimbolKey.KeyF]: {
    en: {
      caseDown: "f",
      shift: "F",
      option: "ƒ",
    },
    ru: {
      caseDown: "а",
      shift: "А",
      option: "÷",
    },
  },
  [SimbolKey.KeyG]: {
    en: {
      caseDown: "g",
      shift: "G",
      option: "©",
    },
    ru: {
      caseDown: "п",
      shift: "П",
      option: "…",
    },
  },
  [SimbolKey.KeyH]: {
    en: {
      caseDown: "h",
      shift: "H",
      option: "˙",
    },
    ru: {
      caseDown: "р",
      shift: "Р",
      option: "•",
    },
  },
  [SimbolKey.KeyJ]: {
    en: {
      caseDown: "j",
      shift: "J",
      option: "∆",
    },
    ru: {
      caseDown: "о",
      shift: "О",
      option: "∆",
    },
  },
  [SimbolKey.KeyK]: {
    en: {
      caseDown: "k",
      shift: "K",
      option: "˚",
    },
    ru: {
      caseDown: "л",
      shift: "Л",
      option: "љ",
    },
  },
  [SimbolKey.KeyL]: {
    en: {
      caseDown: "l",
      shift: "L",
      option: "¬",
    },
    ru: {
      caseDown: "д",
      shift: "Д",
      option: "l",
    },
  },
  [SimbolKey.Semicolon]: {
    en: {
      caseDown: ";",
      shift: ":",
      option: "…",
    },
    ru: {
      caseDown: "ж",
      shift: "Ж",
      option: "«",
    },
  },
  [SimbolKey.Quote]: {
    en: {
      caseDown: "'",
      shift: '"',
      option: "æ",
    },
    ru: {
      caseDown: "э",
      shift: "Э",
      option: "є",
    },
  },
  [ServiceKey.Enter]: {
    en: {
      caseDown: "\n",
      shift: "\n",
      option: "\n",
    },
    ru: {
      caseDown: "\n",
      shift: "\n",
      option: "\n",
    },
  },
  [ServiceKey.ShiftLeft]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [SimbolKey.KeyZ]: {
    en: {
      caseDown: "z",
      shift: "Z",
      option: "Ω",
    },
    ru: {
      caseDown: "я",
      shift: "Я",
      option: "ђ",
    },
  },
  [SimbolKey.KeyX]: {
    en: {
      caseDown: "x",
      shift: "X",
      option: "≈",
    },
    ru: {
      caseDown: "ч",
      shift: "Ч",
      option: "x",
    },
  },
  [SimbolKey.KeyC]: {
    en: {
      caseDown: "c",
      shift: "C",
      option: "ç",
    },
    ru: {
      caseDown: "с",
      shift: "С",
      option: "c",
    },
  },
  [SimbolKey.KeyV]: {
    en: {
      caseDown: "v",
      shift: "V",
      option: "√",
    },
    ru: {
      caseDown: "м",
      shift: "М",
      option: "v",
    },
  },
  [SimbolKey.KeyB]: {
    en: {
      caseDown: "b",
      shift: "B",
      option: "∫",
    },
    ru: {
      caseDown: "и",
      shift: "И",
      option: "і",
    },
  },
  [SimbolKey.KeyN]: {
    en: {
      caseDown: "n",
      shift: "N",
      option: "˜",
    },
    ru: {
      caseDown: "т",
      shift: "Т",
      option: "ƒ",
    },
  },
  [SimbolKey.KeyM]: {
    en: {
      caseDown: "m",
      shift: "M",
      option: "µ",
    },
    ru: {
      caseDown: "ь",
      shift: "Ь",
      option: "m",
    },
  },
  [SimbolKey.Comma]: {
    en: {
      caseDown: ",",
      shift: "<",
      option: "≤",
    },
    ru: {
      caseDown: "б",
      shift: "Б",
      option: "≤",
    },
  },
  [SimbolKey.Period]: {
    en: {
      caseDown: ".",
      shift: ">",
      option: "≥",
    },
    ru: {
      caseDown: "ю",
      shift: "Ю",
      option: "≥",
    },
  },
  [SimbolKey.Slash]: {
    en: {
      caseDown: "/",
      shift: "?",
      option: "÷",
    },
    ru: {
      caseDown: ".",
      shift: ",",
      option: "ї",
    },
  },
  [ServiceKey.ArrowUp]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.ShiftRight]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.ControlLeft]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.AltLeft]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.MetaLeft]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.Space]: {
    en: {
      caseDown: " ",
      shift: " ",
      option: " ",
    },
    ru: {
      caseDown: " ",
      shift: " ",
      option: " ",
    },
  },
  [ServiceKey.MetaRight]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.AltRight]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.ArrowLeft]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.ArrowDown]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
  [ServiceKey.ArrowRight]: {
    en: {
      caseDown: "",
      shift: "",
      option: "",
    },
    ru: {
      caseDown: "",
      shift: "",
      option: "",
    },
  },
};

export default KEYS;
