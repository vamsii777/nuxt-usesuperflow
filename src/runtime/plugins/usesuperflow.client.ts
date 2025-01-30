/**
 * This module imports the necessary dependencies and defines a Nuxt plugin for Superflow.
 * @module usesuperflow
 */

// Import the necessary dependencies
import { initSuperflow } from '@usesuperflow/client'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'
import type { ModuleOptions } from '../../module'

/**
 * This is the main export of the module, a Nuxt plugin named 'usesuperflow'.
 * The plugin's setup function checks for the necessary configuration values and initializes Superflow.
 * If the configuration is missing or incomplete, it logs an error message and returns early.
 * If the initialization is successful, it optionally logs a success message.
 * If the initialization fails, it logs the error.
 */
export default defineNuxtPlugin({
  name: 'usesuperflow',
  async setup() {
    // Get the runtime configuration
    const config = useRuntimeConfig()

    /**
     * Check if the usesuperflow config exists and has the required values.
     * If not, log an error message and return early.
     */
    if (!config.public.usesuperflow || !(config.public.usesuperflow as ModuleOptions).projectId || !(config.public.usesuperflow as ModuleOptions).apiKey) {
      console.error('Superflow configuration is missing or incomplete. Please ensure both projectId and apiKey are provided in the nuxt.config file.')
      return
    }

    // Destructure the projectId and apiKey from the usesuperflow config
    const { projectId, apiKey } = config.public.usesuperflow as ModuleOptions

    try {
      // Attempt to initialize Superflow with the provided apiKey and projectId
      await initSuperflow(apiKey, {
        projectId,
      })
      // Optionally, log a success message or perform additional setup
      // console.log('Superflow initialized successfully.');
    }
    catch (error) {
      // If the initialization fails, log the error
      console.error('Failed to initialize Superflow:', error)
    }
  },
})
