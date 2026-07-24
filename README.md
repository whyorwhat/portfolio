# portfolio

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Vercel deployment

The rewrite in `vercel.json` serves `index.html` for every direct URL, allowing
React Router to handle client-side routes such as `/replyia` instead of Vercel
returning a `404: NOT_FOUND`.

Source: [Vercel — Why is my deployed project showing a 404 error?](https://vercel.com/kb/guide/why-is-my-deployed-project-giving-404)
