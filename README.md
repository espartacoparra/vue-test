# vue-test

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Estructura del proyecto

Carpetas y archivos más relevantes:

- index.html — entrada HTML.
- src/main.js — punto de entrada de la app.
- src/App.vue — componente raíz.
- src/components/ — componentes Vue reutilizables (Header, Footer, Sidebar).
- src/views/ — vistas/ páginas (Dashboard, Settings).
- src/router/ — definición de rutas (Vue Router).
- src/stores/ — stores de Pinia.
- src/utils/ — utilidades (por ejemplo localStorage.js).

## Desarrollo y recomendaciones

- IDE: VS Code con la extensión oficial de Vue y configuración para ESLint + Prettier.
- Devtools: instala Vue.js Devtools para depuración.
- Formato y lint: ejecuta pnpm format y pnpm lint antes de hacer commits.

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
