export async function getGitUser() {
  const endpoint = 'https://api.github.com/users/MarcelaSouza1995/repos';
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

export async function getBranches(repo){
  const endpoint = `https://api.github.com/repos/${repo}/branches?per_page=100`;
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}
