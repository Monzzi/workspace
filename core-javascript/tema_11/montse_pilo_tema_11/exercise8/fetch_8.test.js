const { fetchAllPosts, initializeEventListeners } = require('./fetch_8.js');

global.fetch = jest.fn();

const mockPosts = [
  { id: 1, title: "Post 1", body: "Content 1" },
  { id: 2, title: "Post 2", body: "Content 2" },
  { id: 3, title: "Post 3", body: "Content 3" }
];

beforeEach(() => {
  jest.clearAllMocks();
  document.body.innerHTML = `
    <div class="container">
      <div class="input-section">
        <button id="fetchButton">Cargar Artículos</button>
      </div>
      <div class="stats-section">
        <p>Total de artículos: <span id="totalPosts">0</span></p>
      </div>
      <div class="titles-section">
        <h2>Lista de Títulos</h2>
        <ol id="titlesList"></ol>
      </div>
      <div class="table-section">
        <h2>Tabla de Artículos</h2>
        <table id="postsTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Contenido</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  `;
});

describe('Fetch All Posts Tests', () => {
  test('should fetch all posts successfully and update DOM', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockPosts),
    });

    await fetchAllPosts();

    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    expect(document.getElementById('totalPosts').textContent).toBe('3');

    const titleItems = document.querySelectorAll('#titlesList li');
    expect(titleItems).toHaveLength(3);
    expect(titleItems[0].textContent).toBe('Post 1');

    const tableRows = document.querySelectorAll('#postsTable tbody tr');
    expect(tableRows).toHaveLength(3);
    expect(tableRows[0].cells[1].textContent).toBe('Post 1');
  });

  test('should handle fetch error correctly', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchAllPosts();

    expect(consoleSpy).toHaveBeenCalled();
    expect(document.querySelector('.container').innerHTML).toBe('Error al cargar los artículos');

    consoleSpy.mockRestore();
  });

  test('should handle network error correctly', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await fetchAllPosts();

    expect(consoleSpy).toHaveBeenCalled();
    expect(document.querySelector('.container').innerHTML).toBe('Error al cargar los artículos');

    consoleSpy.mockRestore();
  });

  test('should trigger fetch when button is clicked', async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockPosts),
    });

    initializeEventListeners();
    document.getElementById('fetchButton').click();

    await new Promise((r) => { setTimeout(r, 0) });

    // Verificación de la llamada a fetch
    expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  });
});
