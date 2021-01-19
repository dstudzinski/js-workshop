function fetchWrapper(...args) {
  console.log('you did http call!')
  return fetch(...args);
}

export {
  fetchWrapper as fetch
}
