import {defineType} from 'sanity'

export const modalSection = defineType({
  name: 'modalSection',
  title: 'Pop-up Modal',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'text',
    },
    {name: 'image', type: 'image', title: 'Image'},
    {
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Pop-up Modal',
      }
    },
  },
})
