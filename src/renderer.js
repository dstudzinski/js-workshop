function rendererCreator(elementId) {
  const appEl = document.getElementById(elementId);
  return function render(element) {
    appEl.appendChild(element);
  }
}

export {
  rendererCreator
}
