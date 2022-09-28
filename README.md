# LAN.DA

Is a free and open-source starter-kit to make your website using **Astro**. Ready to start a new project and designed taking into account best practices.

## Features

- **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)).
- **SEO friendly** ([@astrojs/rss](https://docs.astro.build/en/guides/rss/)).
- **Image optimization** ([@astrojs/images](https://docs.astro.build/en/guides/integrations-guide/image/)).
- **Open Graph tags** for social media sharing
- **Fonts optimization** at build time ([subfont](https://www.npmjs.com/package/subfont)).


<details>
<summary>Table of Contents</summary>

- [Demo](#demo)
- [Getting started](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Contributing](#contributing)
- [License](#license)

</details>

<br>

## Demo

[🌀 lan-da.vercel.app](https://lan-da.vercel.app/) 

<br>


## Getting started

### Project structure

Inside LAN.DA template, you'll see the following folders and files:

```
/
├── data/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── core/
|   |   └── general/
|   |       ├── Welcome.astro
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   |── PageLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── index.astro
|   |   ├── 404.astro
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: "Example",

  origin: "https://example.com",
  basePathname: "/", // Change this if you need to deploy to Github Pages

  title: "Example title",
  description: "Example description",
};


```

<br>

### Deploy

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

## Contributing

If you have any idea, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request. 
That would be very useful for all of us and we would be happy to listen and take action.

## License

MIT
