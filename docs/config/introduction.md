# Configuration

## Overview

Nuxt UseSuperflow can be configured through the `usesuperflow` property in your `nuxt.config.ts` file. Here's a complete reference of all available options.

## Options Reference

```ts
export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: {
    // Required: Your UseSuperflow Project ID
    projectId: 'your-project-id',
    
    // Required: Your UseSuperflow API key
    apiKey: 'your-api-key'
  }
})
```

### Project ID

- Type: `string`
- Required: `true`

Your UseSuperflow Project ID. You can obtain this from your [UseSuperflow dashboard](https://usesuperflow.com/dashboard).

### API Key

- Type: `string`
- Required: `true`

Your UseSuperflow API key. You can obtain this from your [UseSuperflow dashboard](https://usesuperflow.com/dashboard).

## Environment Variables

You can also configure the module using environment variables:

```env
USESUPERFLOW_PROJECT_ID=your-project-id
USESUPERFLOW_API_KEY=your-api-key
```

## TypeScript Support

The module includes TypeScript definitions for all configuration options:

```ts
interface ModuleOptions {
  projectId: string
  apiKey: string
} 