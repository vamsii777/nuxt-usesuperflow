# nuxt-usesuperflow

[![npm](https://img.shields.io/npm/v/nuxt?style=flat-square)](https://www.npmjs.com/package/nuxt)
[![npm](https://img.shields.io/npm/v/nuxt-usesuperflow?style=flat-square)](https://www.npmjs.com/package/nuxt-usesuperflow)
[![bun](https://img.shields.io/badge/bun-0.0.1-blue?style=flat-square)](https://www.npmjs.com/package/bun)

A Nuxt 3 module for integrating useSuperflow into your Nuxt application.

## Quick Setup

1. Add `nuxt-usesuperflow` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-usesuperflow

# Using yarn
yarn add --dev nuxt-usesuperflow

# Using npm
npm install --save-dev nuxt-usesuperflow

# Using bun
bun add -D nuxt-usesuperflow
```

2. Add `nuxt-usesuperflow` to the `buildModules` section of `nuxt.config.js`

```js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  modules: [
    'nuxt-usesuperflow'
  ]
})
```

3. Configure it in `nuxt.config.js`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-usesuperflow'
  ],
  usesuperflow: {
    projectId: 'YOUR_PROJECT_ID',
    apiKey: 'YOUR_API_KEY'
  },
})
```

That's it! You can now use useSuperflow in your Nuxt 3 app ✨
