export function setupButtonListener() {
  const button = document.getElementById('myButton');
  const userInfoDiv = document.getElementById('userInfo');

  button.addEventListener('click', async () => {
    userInfoDiv.textContent = 'Loading…';
    try {
      const response = await fetch('https://api.github.com/users/octocat');
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data = await response.json();
      userInfoDiv.innerHTML = `
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" class="w-24 h-24 rounded-full mx-auto mb-4" />
        <p class="text-xl font-semibold">${data.login}</p>
      `;
      console.log('Fetched user:', data);
    } catch (err) {
      userInfoDiv.innerHTML = `<p class="text-red-500">Error loading user data.</p>`;
      console.error(err);
    }
  });
}

setupButtonListener();
