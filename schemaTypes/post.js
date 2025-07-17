import {defineType} from 'sanity'

export const blogPost = defineType({
  name: 'post',
  title: 'Article',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'writer', type: 'string', title: 'Name of the writer'},
    {name: 'excerpt', type: 'string', title: 'Short description.'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
        {
          type: 'socialPost',
        },
      ],
    },
    {name: 'category', type: 'reference', to: [{type: 'category'}]},
    {name: 'coverImage', type: 'image', title: 'Cover Image'},
    {name: 'publishedAt', type: 'datetime', title: 'Published At'},
  ],
})
