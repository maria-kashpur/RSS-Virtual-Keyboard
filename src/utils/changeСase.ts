export default function changeCase(type: "upper" | "lower", elements: NodeListOf<Element>) {
  elements.forEach(el => {
    const value = el.textContent;
    if (!value) return;

    if (type === "upper") {
      return el.textContent = value.toUpperCase()
    } else if (type === "lower") {
      return (el.textContent = value.toLowerCase());
    }
  })
}

// document.querySelectorAll('.key');