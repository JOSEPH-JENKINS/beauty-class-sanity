import {defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
    {name: 'mainImage', type: 'image', title: 'Main Image'},
    {name: 'secondaryImage', type: 'image', title: 'Secondary Image'},
  ],
})
