global.fetch = jest.fn();

const mockPostData = {
  title: 'Test Title',
  body: 'Test Content',
};

beforeEach(() => {
  jest.clearAllMocks();
  document.body.innerHTML = `
    <div id="article">
      <h1 id="title"></h1>
      <p id="content"></p>
    </div>
  `;
});

const { fetchPost } = require('./fetch_6.js');

describe('Fetch Post Tests', () => {
  

  test('should handle fetch error correctly', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Fetch failed'));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchPost();


    expect(document.getElementById('article').innerHTML).toBe('Error al cargar el artículo');

    consoleSpy.mockRestore();
  });

  test('should handle bad status request', async () => {
    global.fetch.mockResolvedValueOnce({
      status: 404,
      json: () => Promise.resolve({}),
    });

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await fetchPost();

    expect(consoleSpy).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });

  test('should handle network error correctly', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const consoleSpy = jest.spyOn(console, 'error');

    await fetchPost();

    expect(document.getElementById('article').innerHTML).toBe('Error al cargar el artículo');

    consoleSpy.mockRestore();
  });
});
