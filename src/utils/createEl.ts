function createEl(parent: HTMLElement, tag: string, className: string) {
  console.log("CreateEl");
  const el = document.createElement(tag);
  el.classList.add(className);
  parent.append(el);
  return el;
}

export default createEl;
