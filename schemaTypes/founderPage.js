import {defineType} from 'sanity'

export const founderPage = defineType({
  name: 'founderPage',
  title: 'Founder Page',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Name'},
    {name: 'bio', type: 'text', title: 'Bio'},
    {name: 'image', type: 'image', title: 'Image'},
  ],
})
