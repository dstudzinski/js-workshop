function Button(text, click) {
  const btnEl = document.createElement('button');
  btnEl.textContent = text;
  btnEl.addEventListener('click', click);
  return btnEl;
}

export {
  Button
}
