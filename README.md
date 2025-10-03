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

## Project Structure

Most relevant folders and files:

- index.html — HTML entry point.
- src/main.js — App entry point.
- src/App.vue — Root component.
- src/components/ — Reusable Vue components (Header, Footer, Sidebar).
- src/views/ — Views/pages (Dashboard, Settings).
- src/router/ — Route definitions (Vue Router).
- src/stores/ — Pinia stores.
- src/utils/ — Utilities (e.g., localStorage.js).

## Environment Requirements

### Node.js Version

-To ensure compatibility and correct functioning of the build tools and project dependencies, the Node.js version must be greater than or equal to 20 (≥20).
-It's recommended to use nvm (Node Version Manager) to easily manage and switch the Node.js version in your local environment.

## Project Setup

```sh
yarn install
# o
npm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
# o
npm run dev
```

### Compile and Minify for Production

```sh
pnpm build
# o
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
# o
npm run lint
```
