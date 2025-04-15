import {defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'quote', type: 'text', title: 'Quote'},
    {name: 'role', type: 'string', title: 'Role'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
})
