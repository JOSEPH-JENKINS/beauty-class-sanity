import {defineType, defineField} from 'sanity'

export const softCta = defineType({
  name: 'softCtaSection',
  title: 'Soft CTA Section',
  type: 'object',
  fields: [
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      description: 'The internal page to link to (e.g., /about, /blog).',
    }),
  ],
})
