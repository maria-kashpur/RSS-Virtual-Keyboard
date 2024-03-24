import KEYS, { Langs, LetterType, ServiceKey, SimbolKey } from "../data/keys";

export default class Key {
  name: SimbolKey | ServiceKey;
  el: HTMLButtonElement;
  value: string;

  constructor(
    name: SimbolKey | ServiceKey,
    lang: Langs,
    letterType: LetterType,
    parent: HTMLElement | null
  ) {
    this.name = name;
    this.value = KEYS[this.name][lang][letterType];
    this.el = this.createView(parent);
  }

  changeValue(lang: Langs, letterType: LetterType) {
    this.value = KEYS[this.name][lang][letterType];
    this.updateContent();
  }

  changeCase(type: "upper" | "lower") {
    if (type === "upper") {
      this.value = this.value.toUpperCase();
    } else if (type === "lower") {
      this.value = this.value.toLowerCase();
    }
    this.updateContent();
  }

  private createView(parent: HTMLElement | null) {
    if (!parent) throw new Error("parent is not found");
    const el = document.createElement("button");
    el.className = `key ${this.name}`;
    el.name = this.name;
    parent.append(el);
    el.textContent = this.value;
    return el;
  }

  updateContent() {
    this.el.textContent = this.value;
  }

  controlActive(type: "active" | "unactive") {
    switch (type) {
      case "active":
        if (!this.el.classList.contains("active")) {
          this.el.classList.add("active");
        }
        break;
      case "unactive":
        if (this.el.classList.contains("active")) {
          this.el.classList.remove("active");
        }
        break;
      default:
        break;
    }
  }
}
