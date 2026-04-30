const input = document.querySelector('input');
const button = document.querySelector('button');
const card = document.querySelector('#card');
const image = document.querySelector('img');
const username = document.querySelector('#name');
const description = document.querySelector('#description');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');

async function getUser(user) {
  try {
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  };
};

button.addEventListener('click', async (event) => {
  event.preventDefault();

  const inputValue = input.value;

  try {
    const data = await getUser(inputValue);
    input.value = '';
    
    image.setAttribute('src', data.avatar_url);
    username.textContent = data.name;
    description.textContent = data.bio;
    followers.textContent = `Followers: ${data.followers}`;
    following.textContent = `Following: ${data.following}`;
    
    card.classList.add('active');
  } catch (error) {
    console.log(error);
  };
  
});