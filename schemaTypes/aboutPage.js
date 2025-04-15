import {defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'content', type: 'text', title: 'Content'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
})
