export default defineAppConfig({
  myProject: {
    name: 'Sean Nuxt Layer Components'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myProject?: {
      /** Project name */
      name?: string
    }
  }
}
