export default async function getGitUser() {
  const endpoint = 'https://api.github.com/users/MarcelaSouza1995/repos';
  const resultado = await fetch(endpoint);
  const resultadoJson = await resultado.json();
  return resultadoJson;
}
