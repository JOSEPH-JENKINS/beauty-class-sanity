import {defineType} from 'sanity'

export const blogPost = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'excerpt', type: 'string', title: 'Short description.'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {name: 'body', type: 'text', title: 'Body'},
    {name: 'category', type: 'reference', to: [{type: 'category'}]},
    {name: 'coverImage', type: 'image', title: 'Cover Image'},
    {name: 'publishedAt', type: 'datetime', title: 'Published At'},
  ],
})
