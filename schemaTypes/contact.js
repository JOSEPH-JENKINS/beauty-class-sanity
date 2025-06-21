import {defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {name: 'heading', type: 'string', title: 'Heading'},
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'block'}],
    },
  ],
})
