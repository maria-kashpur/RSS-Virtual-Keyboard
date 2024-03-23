function createEl(parent: HTMLElement, tag: string, className: string) {
  const el = document.createElement(tag);
  el.classList.add(className);
  parent.append(el);
  return el;
}

export default createEl;
