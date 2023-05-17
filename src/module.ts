import { defineNuxtModule, addPlugin, createResolver, installModule, addComponentsDir, addComponent } from '@nuxt/kit'

export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxtjs/vwind',
    configKey: 'vwind'
  },
  defaults: {
    preset: 'vwind.css'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponentsDir({
      path: resolver.resolve("./runtime/components"),
      prefix: 'V',
      pathPrefix: false,
      pattern: "**/*.vue",
      ignore: ["**/examples/*.vue"],
      transpile: 'auto'
    })
  }
})
