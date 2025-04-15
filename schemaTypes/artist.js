import {defineType} from 'sanity'

export const artist = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'subheading', type: 'string', title: 'Subheading'},
    {name: 'image', type: 'image', title: 'Image'},
    // {
    //   name: 'socialLinks',
    //   type: 'array',
    //   of: [{type: 'url'}],
    //   title: 'Social Links',
    // },
  ],
})
