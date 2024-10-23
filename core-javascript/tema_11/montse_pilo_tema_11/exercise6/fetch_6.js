function fetchPost() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
      console.log('Status:', response.status);
      return response.json();
    })
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('content').textContent = data.body;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('article').innerHTML = 'Error al cargar el artículo';
    });
}

/* istanbul ignore if */
if (typeof jest === 'undefined') {
  fetchPost();
}

module.exports = {
  fetchPost,
};
