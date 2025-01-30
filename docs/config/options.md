# Configuration Options

## Module Options

Here are all the available options for configuring the Nuxt UseSuperflow module:

### Required Options

#### `projectId`

- Type: `string`
- Required: `true`
- Default: `process.env.USESUPERFLOW_PROJECT_ID`

Your UseSuperflow Project ID. You can obtain this from your [UseSuperflow dashboard](https://usesuperflow.com/dashboard).

```ts
export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: {
    projectId: 'your-project-id'
  }
})
```

#### `apiKey`

- Type: `string`
- Required: `true`
- Default: `process.env.USESUPERFLOW_API_KEY`

Your UseSuperflow API key. You can obtain this from your [UseSuperflow dashboard](https://usesuperflow.com/dashboard).

```ts
export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: {
    apiKey: 'your-api-key'
  }
})
```

## Environment Variables

You can also configure the module using environment variables in your `.env` file:

```env
USESUPERFLOW_PROJECT_ID=your-project-id
USESUPERFLOW_API_KEY=your-api-key
```

## TypeScript Interface

The module provides TypeScript definitions for all configuration options:

```ts
interface ModuleOptions {
  /**
   * Usesuperflow Project ID
   */
  projectId: string

  /**
   * Usesuperflow API Key
   */
  apiKey: string
}
```

## Complete Example

Here's a complete example of all available options:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: {
    projectId: 'your-project-id',
    apiKey: 'your-api-key'
  }
})
``` 