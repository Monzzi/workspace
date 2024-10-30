function fetchPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => {
      console.log('Status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('content').textContent = data.body;
    })
    .catch(error => {
      console.log('Error:', error);
      document.getElementById('article').innerHTML = 'Error al cargar el artículo';
    });
}

function initializeEventListeners() {
  const button = document.getElementById('fetchButton');
  if (button) {
    button.addEventListener('click', () => {
      const postId = document.getElementById('postId').value;
      fetchPost(postId);
    });
  }
}

if (typeof jest === 'undefined') {
  initializeEventListeners();
  fetchPost(1);
}

module.exports = {
  fetchPost,
  initializeEventListeners,
};
