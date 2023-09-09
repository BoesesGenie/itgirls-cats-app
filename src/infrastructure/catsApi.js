export async function getFact() {
  const response = await fetch('https://meowfacts.herokuapp.com/');

  const result = await response.json();

  return result.data[0];
}
