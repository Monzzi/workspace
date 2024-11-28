export class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (this.shadowRoot) {
      // Establecer el contenido HTML dentro del Shadow DOM
      this.shadowRoot.innerHTML = `
        <style>
          /* Aquí puedes agregar tus estilos */
          div {
            text-align: center;
            padding: 20px;
            background-color: #f0f0f0;
          }
          h1 {
            color: #333;
            font-family: Arial, sans-serif;
          }
        </style>
        <div>
          <h1>Hola, Web Component!</h1>
        </div>
      `;
    }
  }
}

// Definir el custom element si no ha sido definido previamente
if (!window.customElements.get('app-element')) {
  window.customElements.define('app-element', AppElement);
}
