import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import deskStructure from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Beauty Class',

  projectId: 'cc2xy89a',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    {
      name: 'custom-desk',
      title: 'Custom Desk',
      desk: {
        structure: deskStructure,
      },
    },
  ],

  schema: {
    types: schemaTypes,
  },
})
