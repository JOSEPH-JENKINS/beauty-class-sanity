import {defineType} from 'sanity'

export const products = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'image', type: 'image', title: 'Image'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {
      name: 'description',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    },
  ],
})
