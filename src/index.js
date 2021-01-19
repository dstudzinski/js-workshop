import {getUsers} from "./users";
import {ConnectionError} from "./error";

function app() {
  console.log('app started!');

  const appEl = document.getElementById('app');
  const btnEl = document.createElement('button');
  btnEl.textContent = 'Show users';
  btnEl.addEventListener('click', () => handleShowUsers(appEl))
  appEl.appendChild(btnEl);
}

async function handleShowUsers(appEl) {
  try {
    const usersData = await getUsers();
    renderUsers(appEl, usersData);
  } catch (err) {
    if (err instanceof ConnectionError) {
      console.log('brak polaczenia to jak mam pobrac?', err.message)
    } else {
      console.log(err.message);
    }
  }
}

function renderUsers(appEl, data) {
  const preEl = document.createElement('pre');
  preEl.innerText = JSON.stringify(data, null, 2);
  appEl.appendChild(preEl);
}

app();
