import {defineType, defineField} from 'sanity'

export const shopPage = defineType({
  name: 'shopPage',
  title: 'Shop Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Shop Page',
      readOnly: true,
    }),
    defineField({
      name: 'heading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Our Products',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
