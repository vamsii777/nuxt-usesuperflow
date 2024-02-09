export default defineNuxtConfig({
  modules: ['../src/module'],
  usesuperflow: {
    projectId: process.env.USESUPERFLOW_PROJECT_ID as string,
    apiKey: process.env.USESUPERFLOW_API_KEY as string
  },
  devtools: { enabled: true }
})
