function createEl(parent, tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  parent.append(el);
  return el;
}

export default createEl;
