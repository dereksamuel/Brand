const button = document.querySelector('.button');
const $reset = document.querySelector('.button-reset');
const $p = document.querySelector('.p');

const getLocalStorage = () => localStorage.getItem('Dark Mode');
const setLocalStorage = (a) => localStorage.setItem('Dark Mode', `${a}`);

$p.textContent = getLocalStorage();

button.addEventListener('click', (e) => {
  let number = getLocalStorage();
  let arrengement1 = Number(number);
  arrengement1 += 1;
  setLocalStorage(arrengement1);
  $p.textContent = getLocalStorage();
});

$reset.addEventListener('click', (e) => {
  setLocalStorage(0);
  $p.textContent = getLocalStorage();
});
