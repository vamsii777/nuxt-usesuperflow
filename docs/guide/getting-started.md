# Getting Started

## Introduction

Nuxt UseSuperflow is a module that integrates [UseSuperflow](https://usesuperflow.com) with your Nuxt.js application. This module provides a seamless way to add UseSuperflow's functionality to your Nuxt project.

## Installation

1. Install the module using your preferred package manager:

::: code-group
```bash [npm]
npm install nuxt-usesuperflow
```

```bash [yarn]
yarn add nuxt-usesuperflow
```

```bash [pnpm]
pnpm add nuxt-usesuperflow
```

```bash [bun]
bun add nuxt-usesuperflow
```
:::

2. Add the module to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: {
    projectId: 'your-project-id', // Required
    apiKey: 'your-api-key' // Required
  }
})
```

Alternatively, you can use environment variables:

```env
USESUPERFLOW_PROJECT_ID=your-project-id
USESUPERFLOW_API_KEY=your-api-key
```

## Requirements

- Nuxt.js version 3.0 or higher
- Node.js version as specified in your package.json engines field

## Basic Usage

After installation, you can use the module in your Nuxt application:

```vue
<script setup>
const { superflow } = useSuperflow()

// Your UseSuperflow logic here
</script>

<template>
  <div>
    <!-- Your UseSuperflow components here -->
  </div>
</template>
```

## Configuration

The module can be configured through the `usesuperflow` property in your `nuxt.config.ts`. See the [configuration reference](/config/introduction) for all available options.

## Next Steps

- Check out the [Configuration](/config/introduction) section for detailed setup options
- View the [API Reference](/api/reference) for technical details
- Visit our [GitHub repository](https://github.com/vamsii777/nuxt-usesuperflow) for source code and contributions
