import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {markdownSchema} from 'sanity-plugin-markdown'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {tags} from 'sanity-plugin-tags'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'thistle-goldfish',

  projectId: 'rv9flsof',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    markdownSchema(),
    unsplashImageAsset(),
    tags({}),
  ],

  schema: {
    types: schemaTypes,
  },
})
