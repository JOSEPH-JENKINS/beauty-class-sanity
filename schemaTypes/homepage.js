import {defineType} from 'sanity'
import {heroSection} from './sections/heroSection'
import {softCta} from './sections/softCtaSection'
import {testimonialSection} from './sections/testimonialSection'
import {brandsSection} from './sections/brandLogos'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        {type: 'heroSection'},
        {type: 'testimonialSection'},
        {type: 'softCtaSection'},
        {type: 'brandsSection'},
      ],
    },
  ],
  options: {
    disableNew: true,
  },
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
      }
    },
  },
})
