const conteinerList = document.querySelector('.conteiner-list');
const items = document.querySelector('.items');
const button = document.querySelector('.button-submit');
const buttonSearch = document.querySelector('.button-input');
const email = document.querySelector('.email');
const pass = document.querySelector('.password');
let dadosAPI;

window.onload = conteinerList.style.display = 'none';

// evento de click do botão de submit
button.addEventListener('click', (event) => {
  event.preventDefault()
  items.innerHTML = ''
  if(validateLogin()) {
    conteinerList.style.display = 'block';
    fetchRepo();
  } else {
    conteinerList.style.display = 'none';
    alert('login and password invalid, try again!')
  } 
}); 

// valida login e atualiza o input
function validateLogin() {
  const inputemail = email.value;
  const emailFormate = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(inputemail);
  if (!emailFormate || pass.value !== '123456') {
    email.value = '';
    pass.valu = '';
     return false;
  } else {
     return true;
  }
}

// cria itens da lista no tamplate desejado 
function createItemList({ language, description, updated_at, ssh_url }) {
  const conteinerList = document.querySelector('.items');
  const li = document.createElement('li');
  li.className = 'item-list';
  li.innerText = `Project: ${description} | Tech: ${language}`;
  li.addEventListener('click', (event) => createAppendList(event, updated_at, ssh_url));
  conteinerList.appendChild(li);
  return li;
}

//cria informações no projeto listado 
function createAppendList(event, updated_at, ssh_url) {
  const local = event.target 
  const appendList = document.createElement('li');
  appendList.addEventListener('click', (event) => removeAppendList(event));
  appendList.className = 'append-list'
  appendList.innerText = `Update: ${updated_at}  |  ssh_url: ${ssh_url}`;
  local.appendChild(appendList);
  return appendList;
}

// cria função remove appendList caso seja clicada novamente
function removeAppendList(event) { 
  const local = event.target;
  local.parentNode.removeChild(local)
}

// valida  o input  de pesquisa
function validadeSearch(line) {
  const input = document.querySelector('.input-search');
  return (line.language && line.language.includes(input.value))|| (line.description && line.description.includes(input.value));
}

// cria nova lista filtrada pela pesquisa
function createListSearch() {
  dadosAPI.filter(validadeSearch)
    .forEach((obj) => createItemList(obj));
}

// evento de click no botão de pesquisa
buttonSearch.addEventListener('click', (event) => {
  event.preventDefault()
  items.innerHTML = ''
  createListSearch()
});

// realiza ordenação alfabética do objeto retornado 
function sorted(a,b) {
  if (a.description < b.description) {
    return -1;
  }
  if (b.description < a.description) {
    return 1;
  }
  // são idênticos
  return 0;
}

// realiza a fech da API - GitHub
function fetchRepo() {
  const endpoint = 'https://api.github.com/users/oryange/repos';
  fetch(endpoint)
  .then((response) => response.json())
  .then((data) => { console.log(data)
    dadosAPI = data.map(({ language, description, updated_at, ssh_url }) => ({ language, description, updated_at, ssh_url }))
    .sort(sorted);
    dadosAPI.forEach((obj) => createItemList(obj));
  });
}

// -- paginação:

// 1 - guardar dados API;
// 2 - criar variavel que mostre quantos itens quero por página;
// 3 - criar próximo e anterior
// 4 - lógica: se não tiver anterior ou próximo, não faça nada;


