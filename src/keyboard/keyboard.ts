import createEl from "../utils/createEl";
import { KEYBOARD } from "../data/keyboard";
import { Langs, LetterType, ServiceKey, SimbolKey } from "../data/keys";
import View from "../View/view";
import langLSControl from "../utils/localStorage/lang";
import Key from "./key";

export class Keys {
  keys: Map<string, Key>;
  box: HTMLElement;
  textarea: HTMLTextAreaElement;
  lang: Langs;
  letterType: LetterType;
  isCapsLock: boolean;
  pressedKeys: string[];

  constructor() {
    this.keys = new Map();
    this.box = View.wrapper;
    this.textarea = View.textarea;
    this.lang = langLSControl("get");
    this.letterType = LetterType.caseDown;
    this.isCapsLock = false;
    this.pressedKeys = [];
  }

  createView() {
    KEYBOARD.forEach((row) => {
      const keyRow = createEl(this.box, "div", "keys__row");
      row.forEach((name) => {
        const key = new Key(name, this.lang, this.letterType, keyRow);
        this.keys.set(name, key);
      });
    });

    this.initeMousedown();
    this.initeMouseUp();
    this.initKeydown();
    this.initeKeyup();
    this.initClick();
  }

  changeKeyboardLayout() {
    this.keys.forEach((key) => key.changeValue(this.lang, this.letterType));
  }

  changeCase(type: "upper" | "lower") {
    this.keys.forEach((key) => key.changeCase(type));
  }

  private initeMousedown() {
    this.box.addEventListener("mousedown", (e) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLButtonElement)) return;

      const key = target.name;

      switch (key) {
        case ServiceKey.ShiftLeft:
          this.activeEvent("mousedown", ServiceKey.ShiftLeft);
          break;
        case ServiceKey.AltLeft:
          this.activeEvent("mousedown", ServiceKey.AltLeft);
          break;
        default:
          break;
      }
    });
  }

  private initeMouseUp() {
    this.box.addEventListener("mouseup", (e) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLButtonElement)) return;

      const key = target.name;

      switch (key) {
        case ServiceKey.ShiftLeft:
          this.activeEvent("mouseup", ServiceKey.ShiftLeft);
          break;
        case ServiceKey.AltLeft:
          this.activeEvent("mouseup", ServiceKey.AltLeft);
          break;
        default:
          break;
      }
    });
  }

  private initKeydown() {
    document.addEventListener("keydown", (e) => {
      const { code, shiftKey } = e;

      const shiftKeyBtn = this.keys.get(ServiceKey.ShiftLeft);
      if (shiftKeyBtn !== undefined) {
        shiftKey
          ? shiftKeyBtn.controlActive("active")
          : shiftKeyBtn.controlActive("unactive");
      }

      const key = this.keys.has(code) ? this.keys.get(code) : null;
      if (!key) return;
      key.controlActive("active");

      switch (code) {
        case ServiceKey.ShiftLeft:
          this.activeEvent("keydown", ServiceKey.ShiftLeft);
          break;
        case ServiceKey.AltLeft:
          this.activeEvent("keydown", ServiceKey.AltLeft);
          break;
        default:
          break;
      }

      if (e.repeat) return;
      switch (code) {
        case ServiceKey.ShiftLeft:
        case ServiceKey.ControlLeft:
          this.pressedKeys.push(code);
          break;
        case ServiceKey.CapsLock:
          if (e.getModifierState(ServiceKey.CapsLock)) {
            key.el.classList.add("on");
            this.changeCase("upper");
          }
          this.isCapsLock = e.getModifierState(ServiceKey.CapsLock);
          break;
        default:
          if (Object.keys(SimbolKey).includes(code)) {
            e.preventDefault();
            const letter = key.value;
            this.textarea.focus();
            const posStart = this.textarea.selectionStart;
            const posEnd = this.textarea.selectionEnd;
            this.textarea.setRangeText(letter, posStart, posEnd, "end");
          }
          break;
      }
    });
  }

  private changeLang() {
    this.lang = this.lang === "en" ? (this.lang = "ru") : "en";
    langLSControl("save", this.lang);
    this.changeKeyboardLayout();
  }

  private initeKeyup() {
    document.addEventListener("keyup", (e) => {
      const { code } = e;

      const key = this.keys.has(code) ? this.keys.get(code) : null;
      if (!key) return;
      key.controlActive("unactive");

      switch (code) {
        case ServiceKey.ShiftLeft:
          this.activeEvent("keyup", ServiceKey.ShiftLeft);
          break;
        case ServiceKey.AltLeft:
          this.activeEvent("keyup", ServiceKey.AltLeft);
          break;
        case ServiceKey.CapsLock:
          if (!e.getModifierState(ServiceKey.CapsLock)) {
            key.el.classList.remove("on");
            this.changeCase("lower");
          }
          this.isCapsLock = e.getModifierState(ServiceKey.CapsLock);

          break;
        default:
          break;
      }

      if (this.pressedKeys.length === 0) return;
      let isChangeLang = true;
      [ServiceKey.ShiftLeft, ServiceKey.ControlLeft].forEach((key) => {
        if (!this.pressedKeys.includes(key)) {
          isChangeLang = false;
          return;
        }
      });

      if (isChangeLang) this.changeLang();
      this.pressedKeys = [];
    });
  }

  private initClick() {
    this.box.addEventListener("mouseup", (e) => {
      const { target } = e;

      if (!target || !(target instanceof HTMLButtonElement)) return;

      const key = target.name;

      const posStart = this.textarea.selectionStart;
      const posEnd = this.textarea.selectionEnd;

      let range = 0;
      let cols = Number(this.textarea.getAttribute("cols") ?? 0);

      const { value } = this.textarea;
      this.textarea.focus();

      switch (key) {
        case ServiceKey.Backspace:
          if (posStart === posEnd && posStart === +value) {
            const start = posStart === 0 ? 0 : posStart - 1;
            this.textarea.setRangeText("", start, posEnd, "end");
          } else if (posStart === posEnd && posStart !== +value) {
            const start = posStart === 0 ? 0 : posStart - 1;
            this.textarea.setRangeText("", start, posEnd, "end");
          } else {
            this.textarea.setRangeText("", posStart, posEnd, "end");
          }
          break;

        case ServiceKey.Delete:
          if (posStart === posEnd && posStart === +value) {
          } else if (posStart === posEnd && posStart !== +value) {
            const start = posStart;
            this.textarea.setRangeText("", start, start + 1, "end");
          } else {
            this.textarea.setRangeText("", posStart, posEnd, "end");
          }
          break;

        case ServiceKey.Tab:
          e.preventDefault();
          const tab = "\t";
          this.textarea.setRangeText(tab, posStart, posEnd, "end");

          break;

        case ServiceKey.CapsLock:
          if (target.classList.contains("on")) {
            target.classList.remove("on");
            target.classList.remove("active");
            this.isCapsLock = false;
            this.changeCase("lower");
          } else {
            target.classList.add("on");
            this.isCapsLock = true;
            this.changeCase("upper");
          }
          break;

        case ServiceKey.AltLeft:
          if (this.textarea.selectionStart !== 0) {
            range = this.textarea.selectionStart - 1;
          }
          this.textarea.setSelectionRange(range, range);
          break;

        case ServiceKey.ArrowRight:
          if (this.textarea.selectionStart === this.textarea.value.length) {
            range = this.textarea.value.length;
          } else {
            range = this.textarea.selectionStart + 1;
          }
          this.textarea.setSelectionRange(range, range);
          break;

        case ServiceKey.ArrowUp:
          if (this.textarea.selectionStart > cols) {
            range = this.textarea.selectionStart - cols - 1;
          } else {
            range = this.textarea.selectionStart;
          }
          this.textarea.setSelectionRange(range, range);
          break;

        case ServiceKey.ArrowDown:
          range = this.textarea.selectionStart + cols + 1;
          this.textarea.setSelectionRange(range, range);
          break;

        default:
          const letter = target.textContent ?? "";
          this.textarea.setRangeText(letter, posStart, posEnd, "end");
          break;
      }
    });
  }

  private activeEvent(
    type: "mousedown" | "mouseup" | "keydown" | "keyup",
    key: ServiceKey.ShiftLeft | ServiceKey.AltLeft
  ) {
    if (type === "mousedown" || type === "mouseup") this.textarea.focus();

    if (key === ServiceKey.ShiftLeft) {
      if (type === "mousedown" || type === "keydown")
        this.changeCase(this.isCapsLock ? "lower" : "upper");
      if (type === "mouseup" || type === "keyup")
        this.changeCase(this.isCapsLock ? "upper" : "lower");
    }

    if (key === ServiceKey.AltLeft) {
      if (type === "mousedown" || type === "keydown")
        this.letterType = LetterType.option;
      if (type === "mouseup" || type === "keyup")
        this.letterType = LetterType.caseDown;
      this.changeKeyboardLayout();
    }
  }
}
