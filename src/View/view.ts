import createEl from "../utils/createEl";

export default class View {
  static get textarea() {
    const textArea = document.querySelector(".keyboard__text");
    if (!textArea || !(textArea instanceof HTMLTextAreaElement))
      throw new Error("textarea is not found");
    return textArea;
  }

  static get wrapper() {
    const el = document.querySelector(".keyboard__body");
    if (!el || !(el instanceof HTMLElement)) throw new Error("");
    return el;
  }

  static createKeyboardSection() {
    const wrapper = createEl(document.body, "div", "app");
    const keyboardSection =  createEl(wrapper, "section", "keyboard");
    keyboardSection.innerHTML = `
      <h1 class="keyboard__title">Виртуальная клавиатура</h1>
      <textarea class="keyboard__text" rows="7" cols="50" autofocus></textarea>
      <div class="keyboard__body"></div>
      <div class="keyboard__additional-inf">
        <p>Клавиатура создана в операционной системе MacOS</p>
        <p>Для переключения языка: левыe <span class="key_inf">shift</span> + <span class="key_inf">control</span></p>
      </div>
    `;
  };
}
