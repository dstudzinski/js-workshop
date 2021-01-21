import {fetch} from "./fetch";
import {ConnectionError} from "./error";

async function getUsers() {
  try {
    const response = await fetch('/users');
    const data = await response.json();
    return data;
  } catch (err) {
    if (err.message === 'Failed to fetch') {
      throw new ConnectionError('some problem')
    }

    throw err;
  }
}

function displayUser(user) {
  return `${user.name}, ${user.username}, ${user.email}`;
}

function createUser(name, username, email) {
  // validate all values
  return {
    name,
    username,
    email,
  }
}

export {
  getUsers,
  displayUser,
}
