import '@testing-library/jest-dom';
import { AppElement } from '../src/components/app.element';  // Ajusta la ruta según sea necesario

describe('AppElement', () => {
  test('renders and displays the correct content', () => {
    // Registramos el Web Component si no está registrado
    if (!window.customElements.get('app-element')) {
      window.customElements.define('app-element', AppElement);
    }

    // Crear el Web Component y añadirlo al DOM
    const element = document.createElement('app-element');

    // Agregarlo al DOM del test (por ejemplo, al body)
    document.body.appendChild(element);

    // Verificamos si el componente está presente en el DOM
    expect(element).toBeInTheDocument();

    // Verificamos que el contenido del h1 sea el esperado
    const title = element.shadowRoot?.querySelector('h1');
    expect(title).toHaveTextContent('Hola, Web Component!');
  });
});

