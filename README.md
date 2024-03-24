# Build an app with SvelteKit and Bun

## Creating a project

Use bun create to scaffold your app with the svelte package. Answer the prompts to select a template and set up your development environment.

```bash
# create a new project in my-app
bun create svelte@latest my-app

# Once the project is initialized, cd into the new project and install dependencies.
cd my-app
bun install
```

## Developing

Then start the development server with `bun --bun run dev`.
To run the dev server with Node.js instead of Bun, you can omit the `--bun` flag.

```bash
bun --bun run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Visit `http://localhost:5173` in a browser to see the template app.

## Building

To build for production, you'll need to add the right SvelteKit adapter. Currently we recommend the:

```bash
bun add -D svelte-adapter-bun
```

Now, make the following changes to your `svelte.config.js`

```diff
- import adapter from "@sveltejs/adapter-auto";
+ import adapter from "svelte-adapter-bun";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: vitePreprocess(),
};

export default config;
```

To build a production bundle with `bun run build`:

Run `npm run preview` to preview your production build locally.

Start server with: `bun ./build/index.js`
