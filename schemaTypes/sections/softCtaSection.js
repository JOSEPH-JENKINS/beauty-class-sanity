import {defineType} from 'sanity'

export const softCta = defineType({
  name: 'softCtaSection',
  title: 'Soft CTA Section',
  type: 'object',
  fields: [
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'paragraph', title: 'Paragraph', type: 'text'},
    {name: 'ctaLabel', title: 'CTA Label', type: 'string'},
    {name: 'ctaLink', title: 'CTA Link', type: 'url'},
  ],
  preview: {
    prepare() {
      return {
        title: 'Soft CTA Section',
      }
    },
  },
})
