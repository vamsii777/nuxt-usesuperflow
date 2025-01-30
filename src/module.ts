/**
 * This module provides a Nuxt module for useSuperflow.
 * @module usesuperflow
 */

// Import the necessary dependencies
import { fileURLToPath } from 'node:url'
import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'

/**
 * TypeScript interface for the module options.
 * @interface ModuleOptions
 */
export interface ModuleOptions {
  /**
   * Usesuperflow Project ID
    @type string */
  projectId: string
  /**
   * Usesuperflow API Key
    @type string */
  apiKey: string
}

/**
 * This is the main export of the module, a Nuxt module named 'usesuperflow'.
 * The module's setup function checks for the necessary configuration values and initializes Superflow.
 * If the configuration is missing or incomplete, it logs a warning message and returns early.
 * If the initialization is successful, it adds the plugin to the Nuxt configuration.
 */
export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-usesuperflow',
    configKey: 'usesuperflow',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    projectId: process.env.USESUPERFLOW_PROJECT_ID as string,
    apiKey: process.env.USESUPERFLOW_API_KEY as string
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)

    /**
     * Merge the default options with the provided options.
     * The provided options take precedence over the default options.
     */
    const usesuperflowOptions = defu(options, {
      projectId: options.projectId,
      apiKey: options.apiKey,
    })

    /**
     * Set the usesuperflow configuration in the public runtime configuration.
     * This makes the configuration available to the client-side code.
     */
    nuxt.options.runtimeConfig.public.usesuperflow = {
      projectId: usesuperflowOptions.projectId,
      apiKey: usesuperflowOptions.apiKey
    }

    /**
     * Check if the usesuperflow configuration exists.
     * If not, log a warning message and return early.
     */
    if (!nuxt.options.runtimeConfig.public.usesuperflow) {
      console.warn('Missing usesuperflow project id or api key set it either in `nuxt.config.js` or via env variable')
    }

    /**
     * Add the usesuperflow client plugin to the Nuxt configuration.
     * The plugin will be transpiled from TypeScript to JavaScript during the build process.
     */
    addPlugin(resolve(runtimeDir, 'plugins', 'usesuperflow.client'))
  },
})
