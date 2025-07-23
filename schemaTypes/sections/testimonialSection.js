import {defineType} from 'sanity'

export const testimonialSection = defineType({
  name: 'testimonialSection',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Testimonial Section',
      }
    },
  },
})
