function fetchPost() {
  return fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
           if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('title').textContent = data.title;
      document.getElementById('content').textContent = data.body;
    })
    .catch(error => {
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

