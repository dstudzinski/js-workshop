function fetchCreator(url) {
  return function fetchWrapper(path, ...rest) {
    console.log('you did http call!')
    return fetch(url + path, ...rest);
  }
}

const fetchWrapper = fetchCreator('https://jsonplaceholder.typicode.com');

export {
  fetchWrapper as fetch
}
