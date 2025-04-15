import {defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'eventbriteLink', type: 'url', title: 'Eventbrite Link'},
    {name: 'date', type: 'datetime', title: 'Date'},
    {name: 'location', type: 'string', title: 'Location'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
})
