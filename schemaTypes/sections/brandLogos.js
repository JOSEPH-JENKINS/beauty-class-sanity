import {defineType} from 'sanity'

export const brandsSection = defineType({
  name: 'brandsSection',
  title: 'Brands Carousel Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'logos',
      title: 'Brand Logos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Brands Carousel Section',
      }
    },
  },
})
