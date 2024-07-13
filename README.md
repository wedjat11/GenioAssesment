Genio Assessment Blog
=====================

 El objetivo es desarrollar un sitio web tipo blog utilizando Next.js, integrando la API pública de WordPress. El sitio incluye una página principal con una lista de posts y una vista de detalle para cada post al hacer clic. Se ha optimizado el código en componentes reutilizables y se han añadido funcionalidades adicionales para mejorar la experiencia de usuario.

Características
---------------

-   **Carga de posts**: Los posts se cargan desde una API de WordPress y se muestran en una lista.
-   **Vista de detalle del post**: Al hacer clic en un post, se muestra una vista detallada del mismo.
-   **Navbar**: Un navbar fijo con enlaces a la página principal del blog y al repositorio de código en GitHub.
-   **Metricas de Google**: se realizo la integracion de google analytics al sitio, con el cual se detectaran los siguientes eventos: Vistas de pagina, Vistas de una página cuando el historial del navegador cambia, Desplazamientos, Clics de salida, Interacciones con vídeos, Descargas de archivos

Componentes
-----------

El código se ha organizado en varios componentes para mejorar su organización y legibilidad:

### `components/Layout.js`

Este componente se encarga de la estructura general de la página, incluyendo el navbar.

### `components/Navbar.js`

El componente del navbar incluye enlaces a la página principal y al repositorio de GitHub.

### `components/PostList.js`

Este componente muestra la lista de posts.

### `components/PostContent.js`

Este componente muestra el contenido detallado de un post.

### `pages/index.js`

La página principal que muestra la lista de posts.

### `pages/post/[id].js`

La página de detalle del post.

Decisiones de Implementación
----------------------------

### División en Componentes

Se decidió dividir el código en componentes reutilizables en lugar de tener un código espagueti por varias razones:

1.  **Modularidad**: La división en componentes permite desarrollar, probar y mantener cada parte del código de forma independiente, mejorando la modularidad del proyecto.
2.  **Reusabilidad**: Los componentes pueden ser reutilizados en diferentes partes de la aplicación, reduciendo la duplicación de código y facilitando futuras expansiones.
3.  **Legibilidad**: Un código bien estructurado y dividido en componentes es más fácil de leer y entender, lo que facilita la colaboración y el mantenimiento del proyecto.
4.  **Mantenimiento**: Los cambios en el código son más fáciles de gestionar cuando cada componente tiene una única responsabilidad, facilitando la localización y corrección de errores.

### Seguridad Adicional

Para mejorar la seguridad del sitio, se decidió remover el uso de `dangerouslySetInnerHTML` y utilizar `DOMPurify` y `html-react-parser`:

1.  **Evitar XSS**: `dangerouslySetInnerHTML` puede exponer la aplicación a ataques de Cross-Site Scripting (XSS). Al usar `DOMPurify`, se sanitiza el contenido HTML, eliminando posibles scripts maliciosos.
2.  **Seguridad Mejorada**: `DOMPurify` asegura que el HTML que se renderiza sea seguro, manteniendo la integridad del sitio y protegiendo a los usuarios.
3.  **Uso de `html-react-parser`**: Este paquete permite convertir el HTML en elementos React de manera segura y controlada, mejorando la seguridad y manteniendo la funcionalidad.

Funcionalidades Adicionales
---------------------------

### Loader

Se ha añadido un indicador de carga (ClipLoader de react-spinners) que se muestra mientras se carga la vista del post.

### Navbar

El navbar incluye enlaces a la página principal del blog y al repositorio de GitHub, y se muestra en todas las vistas.

### Estilos Profesionales

Se han utilizado estilos de Tailwind CSS para lograr una apariencia moderna y profesional usando la pagina de coolors 

Instalación
-----------

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/wedjat11/GenioAssesment.git

2. Navega al directorio del proyecto:
   ```bash
   cd GenioAssesment
3. Instala las dependencias:
    ```bash
    npm install
4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev


### Links
## Vercel 
https://genio-assesment.vercel.app



