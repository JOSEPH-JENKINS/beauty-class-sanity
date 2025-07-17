import {defineType} from 'sanity'

export const eventPage = defineType({
  name: 'eventPage',
  title: 'Event Page',
  type: 'document',
  fields: [
    {name: 'heading', type: 'string', title: 'Heading'},
    {name: 'image', type: 'image', title: 'Main Image', options: {hotspot: true}},
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {
        title: `${selection.title}`,
      }
    },
  },
})
