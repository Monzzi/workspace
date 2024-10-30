const { fetchPost, initializeEventListeners } = require('./fetch_7.js');

global.fetch = jest.fn();

const mockPostData = { title: 'Test Title', body: 'Test Content' };

beforeEach(() => {
  jest.clearAllMocks();
  document.body.innerHTML = `
    <div class="container">
      <div class="input-section">
        <input type="number" id="postId" min="1" value="1" />
        <button id="fetchButton">Buscar Artículo</button>
      </div>
      <div id="article">
        <h1 id="title"></h1>
        <p id="content"></p>
      </div>
    </div>
  `;
});

describe('Fetch Post Tests', () => {
  test('should fetch specific post successfully and update DOM', async () => {
    const postId = 5;
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockPostData),
    });

    await fetchPost(postId);

    expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    expect(document.getElementById('title').textContent).toBe(mockPostData.title);
    expect(document.getElementById('content').textContent).toBe(mockPostData.body);
  });

  test('should handle fetch error correctly', async () => {
    const postId = 999;
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchPost(postId);

    expect(document.getElementById('article').innerHTML).toBe('Error al cargar el artículo');

    consoleSpy.mockRestore();
  });

  test('should handle network error correctly', async () => {
    const postId = 1;
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchPost(postId);

    expect(document.getElementById('article').innerHTML).toBe('Error al cargar el artículo');

    consoleSpy.mockRestore();
  });

  test('should trigger fetch when button is clicked', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockPostData),
    });

    initializeEventListeners();

    document.getElementById('postId').value = '3';
    document.getElementById('fetchButton').click();

    await new Promise((r) => { setTimeout(r, 0) });

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/3');
  });
});
