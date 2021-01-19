import {fetch} from "./fetch";
import {ConnectionError} from "./error";

function getUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).catch(err => {
    if (err.message === 'Failed to fetch') {
      throw new ConnectionError('some problem')
    }

    throw err;
  })
}

export {
  getUsers
}
