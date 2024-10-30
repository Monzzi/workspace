function fetchAllPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log('Status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(posts => {
      // Actualizar el contador de posts
      document.getElementById('totalPosts').textContent = posts.length;

      // Actualizar la lista de títulos
      const titlesList = document.getElementById('titlesList');
      titlesList.innerHTML = '';
      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        titlesList.appendChild(li);
      });

      const tableBody = document.querySelector('#postsTable tbody');
      tableBody.innerHTML = '';
      posts.forEach(post => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.body}</td>
                `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.log('Error:', error);
      document.querySelector('.container').innerHTML = 'Error al cargar los artículos';
    });
}

function initializeEventListeners() {
  const button = document.getElementById('fetchButton');
  if (button) {
    button.addEventListener('click', fetchAllPosts);
  }
}

/* istanbul ignore if */
if (typeof jest === 'undefined') {
  initializeEventListeners();
  fetchAllPosts();
}

module.exports = {
  fetchAllPosts,
  initializeEventListeners,
};
