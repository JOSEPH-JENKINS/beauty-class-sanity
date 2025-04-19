import {defineType} from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {name: 'heading', type: 'string', title: 'Heading'},
    {
      name: 'video',
      title: 'Hero Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    },
    {name: 'ctaLabel', title: 'CTA Label', type: 'string'},
    {name: 'ctaLink', title: 'CTA Link', type: 'url'},
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {
        title: `Hero: ${selection.title}`,
      }
    },
  },
})
