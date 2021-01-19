import {getUsers} from "./users";
import {ConnectionError} from "./error";
import {Button} from "./Button";
import {rendererCreator} from "./renderer";


const render = rendererCreator('app');

function app() {
  console.log('app started!');
  const btnEl = Button('Show users', handleShowUsers);
  render(btnEl);
}

async function handleShowUsers() {
  try {
    const usersData = await getUsers();
    renderUsers(usersData);
  } catch (err) {
    if (err instanceof ConnectionError) {
      console.log('brak polaczenia to jak mam pobrac?', err.message)
    } else {
      console.log(err.message);
    }
  }
}

function renderUsers(data) {
  const preEl = document.createElement('pre');
  preEl.innerText = JSON.stringify(data, null, 2);
  render(preEl);
}

app();
