import {defineType, defineField} from 'sanity'

export const aboutSection = defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'object',
  fields: [
    defineField({
      name: 'post',
      title: 'Blog Post',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'Select a single blog post to feature in the about section.',
    }),
  ],
  preview: {
    select: {
      title: 'post.title',
      media: 'post.mainImage', // or whatever field your blog post uses
    },
  },
})
