import {fetch} from "./fetch";
import {ConnectionError} from "./error";

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  } catch (err) {
    if (err.message === 'Failed to fetch') {
      throw new ConnectionError('some problem')
    }

    throw err;
  }
}

export {
  getUsers
}
