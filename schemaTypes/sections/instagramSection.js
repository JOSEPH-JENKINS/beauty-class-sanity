import {defineType, defineField} from 'sanity'

export const instagramSection = defineType({
  name: 'instagramSection',
  title: 'Instagram Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'On the Gram',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Find us on Insta',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'Link to your Instagram page.',
    }),
    defineField({
      name: 'posts',
      title: 'Instagram Posts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({name: 'postUrl', title: 'Post URL', type: 'url'}),
          ],
        },
      ],
    }),
  ],
})
