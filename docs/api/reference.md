# API Reference

## Plugin

The module provides a Nuxt plugin that automatically initializes UseSuperflow on the client side. The plugin:

1. Reads the configuration from your `nuxt.config.ts`
2. Validates the required configuration (projectId and apiKey)
3. Initializes UseSuperflow using `@usesuperflow/client`

## Configuration Interface

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

## Module Compatibility

The module is compatible with:
- Nuxt version: `^3.0.0`
- Node.js version: As specified in your package.json engines field

## Error Handling

The module includes built-in error handling:

- Missing Configuration: If projectId or apiKey is missing, the module will log an error message
- Initialization Failure: If UseSuperflow fails to initialize, the error will be logged to the console

## Runtime Config

The module automatically adds your UseSuperflow configuration to Nuxt's public runtime config:

```ts
nuxt.options.runtimeConfig.public.usesuperflow = {
  projectId: string
  apiKey: string
}
```

## Composables

### `useSuperflow`

The main composable to interact with UseSuperflow in your Nuxt application.

```ts
const { superflow, isReady, error } = useSuperflow()
```

#### Returns

- `superflow`: The main UseSuperflow instance
- `isReady`: Boolean indicating if UseSuperflow is initialized
- `error`: Error object if initialization failed

#### Example

```vue
<script setup>
const { superflow, isReady } = useSuperflow()

// Wait for initialization
watch(isReady, (ready) => {
  if (ready) {
    // UseSuperflow is ready to use
    superflow.initialize()
  }
})
</script>
```

## Runtime Config

### Types

```ts
interface UseSuperflowOptions {
  apiKey: string
  debug?: boolean
  defaults?: {
    [key: string]: any
  }
}
```

## Events

The module emits various events that you can listen to:

### `superflow:ready`

Emitted when UseSuperflow is initialized and ready to use.

```ts
const nuxtApp = useNuxtApp()

nuxtApp.hook('superflow:ready', () => {
  // UseSuperflow is ready
})
```

### `superflow:error`

Emitted when an error occurs during initialization.

```ts
nuxtApp.hook('superflow:error', (error) => {
  console.error('UseSuperflow error:', error)
})
```

## Utilities

### `defineUseSuperflowConfig`

Helper function to define type-safe configuration.

```ts
import { defineUseSuperflowConfig } from 'nuxt-usesuperflow'

export default defineNuxtConfig({
  modules: ['nuxt-usesuperflow'],
  usesuperflow: defineUseSuperflowConfig({
    apiKey: 'your-api-key',
    debug: true
  })
}) 