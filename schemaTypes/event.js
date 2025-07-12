import {defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'excerpt', type: 'string', title: 'Short description.'},
    {name: 'slug', type: 'slug', title: 'Slug', options: {source: 'title'}},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'date', type: 'datetime', title: 'Date'},
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'In-Person', value: 'in-person'},
        ],
        layout: 'radio',
      },
    },
    {name: 'location', type: 'string', title: 'Location'},
    {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
    {name: 'price', type: 'number', title: 'Price'},
    {
      name: 'testimonials',
      title: 'Testimonials (Past Event)',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}],
          options: {filter: '*[_type == "testimonial"]'},
        },
      ],
      description: 'Testimonials specific to this event. Only used on past events.',
    },
  ],
})
