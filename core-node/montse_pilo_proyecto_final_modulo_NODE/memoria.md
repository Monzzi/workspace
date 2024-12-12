# Memoria del Proyecto: Calculadora de Huella de Carbono Turística

## Situación inicial

Llegadas a la mitad del programa "Albañiles Digitales 3" y como proyecto final del módulo Node.js, he creado una calculadora de huella de carbono e hídrica en el ámbito del turismo. El desarrollo del programa me ha permitido poner en práctica lo aprendido durante el módulo.

La temática de la aplicación nace de mi interés por la ecología unido a mi experiencia profesional en la industria turística.

## Descripción Técnica

### Arquitectura del Proyecto

La aplicación sigue una arquitectura cliente-servidor sencilla pero funcional:

#### Backend (Node.js)
- Servidor HTTPS para garantizar seguridad. En esta primera fase con certificado autofirmado.
- Manejo de solicitudes y servicio de archivos estáticos.
- Endpoint `/api/data` para servir datos de configuración.
- Gestión de errores.

#### Frontend
- Interfaz HTML con diseño por pestañas.
- Cálculos y lógica en JavaScript.
- Validación de inputs del usuario.
- Generación dinámica de recomendaciones.

### Flujo de Trabajo de la Aplicación

1. **Entrada de Datos**
   - El usuario introduce información sobre su viaje en 4 categorías:
     * Transporte (desde el origen al destino y los desplazamientos en destino).
     * Alojamiento.
     * Actividades en destino.
     * Alimentación.

2. **Validación de Inputs**
   - Función `validateInputs()` verifica:
     * Valores numéricos.
     * Datos positivos.
     * Previene cálculos erróneos.

3. **Cálculo de Emisiones**
   - Función `calculateEmissions()` procesa:
     * Emisiones de transporte (hasta y en el destino).
     * Consumo de agua según tipología de alojamiento.
     * Emisiones de CO2 según actividades turísticas realizadas.
     * Consumo de agua en función del tipo de dieta.

4. **Generación de Recomendaciones**
   - Algoritmo que:
     * Analiza resultados de emisiones y consumo de agua.
     * Genera consejos personalizados y aporta feedback positivo en consumos eficientes.
     * Incluye enlaces a recursos externos para ampliar conocimientos.

5. **Visualización de Resultados**
   - Muestra:
     * Emisiones totales de CO2.
     * Consumo total de agua.
     * Recomendaciones específicas según resultados.

### Tecnologías Clave

#### Backend
- Node.js
- Módulo HTTPS
- Gestión de archivos con `fs`
- Manejo de rutas con `path`

#### Frontend
- HTML.
- CSS.
- JavaScript.
- Fetch API para solicitudes.
- Manipulación del DOM.

#### Herramientas Adicionales
- Imágenes de https://unsplash.com/.
- Google Fonts.
- Utilizo de IA generativa como asistente colaborativa (ChatGPT, v0 by Vergel y Claude). Hago referencia tambié, al siguiente libro: COINTELIGENCIA. Vivir y trabajar con la IA de ETHAN MOLLICK. Su lectura me ha permitido cambiar mi perspectiva de uso de la IA. Este cambio de mirada también se ha visto reforzado gracias a lo aprendido durante el Módulo Core-Node.

## Desafíos y Soluciones Técnicas

### 1. Consumo de API Simulada
- **Desafío**: Entender cómo estructurar y consumir datos en local.
- **Solución**: Implementé `fetchData()` con manejo de errores usando `async/await`.

### 2. Validación de Datos
- **Desafío**: Prevenir errores de cálculo con inputs inválidos.
- **Solución**: Función `validateInputs()` con verificaciones.

### 3. Diseño Responsive
- **Desafío**: Crear una interfaz sencilla y funcional.
- **Solución**: CSS con variables y diseño flexible.


## Próximos Pasos: mejoras potenciales en una segunda fase:
- Integrar API externa (https://www.climatiq.io/) para cálculos más precisos y actualizados.
- Añadir descarga de resultados en PDF.
- Implementar gráficos dinámicos con API externa: https://www.chartjs.org/.
- Convertirlo en una app móvil que posibilite su monetización.

## Guía de Instalación y Ejecución

### Requisitos Previos
- Node.js.
- npm.
- Navegador web moderno.

### Pasos de Instalación

1. **Descomprimir el Proyecto**
   ```bash
   # Descomprima el archivo .zip en su ubicación deseada
   unzip calculadora-huella-carbono.zip
   cd calculadora-huella-carbono
   ```

2. **Preparar el Entorno**
   ```bash
   # Verificar que se tiene instalado Node.js y npm
   node --version
   npm --version

   ```

### Estructura de Archivos de la Aplicación
```
montse_pilo_proyecto_final_modulo_NODE/
│
├── server.js         # Servidor principal de Node.js
├── key.pem           # Clave privada para HTTPS (ya incluida)
├── cert.pem          # Certificado para HTTPS (ya incluida)
├── data.json         # Datos de configuración de emisiones - API simulada
├── package.json      # Datos de configuración general del proyecto
├── memoria.md        # Descripción técnica y ejecución del proyecto
│
└── public/
    ├── src/
    │   ├── footprint.jpg
    │   └── sombrillas_playa.jpg
    ├── index.html    # Página principal
    ├── script.js     # Lógica del cliente
    └── styles.css    # Estilos de la aplicación
```

### Ejecución del Proyecto

1. **Iniciar el Servidor**
   ```bash
   # Ejecutar directamente con Node.js
   node server.js
   ```

2. **Acceder a la Aplicación**
   - Abra su navegador
   - Navegue a `https://localhost:3443`
   - NOTA: Aparecerá una advertencia de seguridad debido al certificado autofirmado.
     Hacer clic en "Avanzado" y "Continuar de todos modos".

### Verificación Rápida

1. El servidor debe iniciar sin errores
2. Puede acceder a `https://localhost:3443`
3. Pruebe a calcular diferentes escenarios de viaje
4. Verifique que se generen recomendaciones personalizadas

## Notas Finales

Este proyecto está listo para ser ejecutado inmediatamente.
No requiere instalación adicional de dependencias.

**¡Espero que sea agradeble utilizar la calculadora de huella de carbono turística! **
