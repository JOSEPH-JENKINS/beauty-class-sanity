import {defineType} from 'sanity'

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
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
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {
        title: `Blog: ${selection.title}`,
      }
    },
  },
})
