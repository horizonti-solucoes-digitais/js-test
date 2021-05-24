export async function getGitUser() {
  const endpoint = 'https://api.github.com/users/tryber/repos';
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}


export async function getlanguages(repo){
  const endpoint = `https://api.github.com/repos/${repo}/languages`;
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}


export async function getCommits(repo){
  const endpoint = `https://api.github.com/repos/${repo}/commits?per_page=100`;
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}

export async function getLastUpdate(repo){
  const endpoint = `https://api.github.com/repos/${repo}`;
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson.updated_at;
}

export async function getBranches(repo){
  const endpoint = `https://api.github.com/repos/${repo}/branches?per_page=100`;
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}
