
function validateLogin() {
  const email = document.querySelector('.email');
  const inputemail = email.value;
  const emailFormate = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(inputemail);
  if (!emailFormate || pass.value !== '123456') {
    email.value = ''
    alert('Login ou senha inválidos. Tente novamente!');
    return false;
  } else {
    alert('Bem vindo, pesquise o projeto desejado!');
    return true;
  }
}

function createItemList({ language, description }) {
  const li = document.createElement('li');
  const conteinerList = document.querySelector('ol');
  li.className = 'item-list';
  li.innerText = `Projeto: ${description} | Tecnologia: ${language}`;
  conteinerList.appendChild(li);
  return li;
}

function renderPortfolio() {
  const fullForm = document.querySelector('form');

  fullForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(checkData() && validateEmail()) {
           
      const formelements = document.querySelectorAll('input');
        for (let index = 0; index < formelements.length; index +=1) {
        if (formelements[index].type === 'radio' && !formelements[index].checked) {
          continue;
        } 
        const inputUser = formelements[index].value;
        const formData = document.getElementById('form-attached');
        const fullForm = document.createElement('div');
        fullForm.id = 'div';
        fullForm.innerHTML = inputUser;
        formData.appendChild(fullForm);     
      } 
    } 
  })
}

function fetchRepo() {
  const endpoint = 'https://api.github.com/users/ORYANGE/repos';
  fetch(endpoint)
  .then((response) => response.json())
  .then((data) => data.forEach(({ language, description }) => {
    
    const conteinerList = document.querySelector('.conteiner-list');
    const button = document.querySelector('.button-subtmit');
    button.addEventListener('click', function(event) {
      event.preventDefault();
      conteinerList.appendChild(createItemList({language, description})); 
      });
  }));
}

// // - Tela inicial listando todos os projetos de um repositório no Github (pode ser o seu próprio), ordenados por ordem alfabética e permitindo filtro por tecnologia e nome. Para tal, será necessário puxar os dados via API do Github.
//   - A lista deve ter paginação
//   - Ao clicar em um dos projetos listados, abrir tela interna exibindo dados daquele repositório (também obtidos via API do Github) tais como: quantidade de commits, última atualização, quantidade de branches, etc.

// language":
// 
window.onload = () => {
  fetchRepo();
};