const githubUsername = 'gilbertouk';
const URL = `https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`;

async function fetchAllRepositories() {
  try {
    const response = await fetch(URL);
    const repositories = await response.json();
    return repositories;
  } catch (error) {
    return Promise.reject(new Error());
  }
}

export default fetchAllRepositories;
