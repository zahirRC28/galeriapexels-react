# Galería Pexels (React + Vite)

Proyecto de galería que consume la API de Pexels con React + Vite. Incluye búsqueda por categoría, paginación, manejo de errores y estilos básicos.

**Inicio rápido (clonar, instalar, .env) con Yarn:**

```bash
# Clonar el repositorio
git clone https://github.com/zahirRC28/galeriapexels-react.git
cd galeria-pexels

# Instalar dependencias con Yarn
yarn install

# Configurar variables de entorno
# Crea un archivo .env en la raíz con:
echo VITE_API_KEY=tu_token_de_pexels > .env
```

La clave `VITE_API_KEY` se usa en el archivo `src/Hooks/fech.js` para autorizar las solicitudes a la API de Pexels.

## Scripts útiles (Yarn)

```bash
yarn dev
yarn build
yarn preview
yarn lint
```

## Características

- **Búsqueda por categoría:** formulario que agrega categorías y muestra sus resultados.
- **Paginación:** navegación entre páginas (primero, retroceder, avanzar, última) con límites correctos.
- **Manejo de errores:** mensajes claros para entrada vacía y ausencia de resultados; se limpian al buscar o paginar.
- **Estilos pedidos:** componentes con CSS básico.

## Estructura del proyecto

- `src/components`: componentes como `Formulario`, `Galeria`, `GridGaleria`, `Paginacion`, `Cards`, `Errores`.
- `src/Hooks/fech.js`: llamada a la API de Pexels usando `VITE_API_KEY`.

