import {defineType} from 'sanity'
import {heroSection} from './sections/heroSection'
import {softCta} from './sections/softCtaSection'
import {testimonialSection} from './sections/testimonialSection'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [{type: 'heroSection'}, {type: 'testimonialSection'}, {type: 'softCtaSection'}],
    },
  ],
  options: {
    disableNew: true,
  },
})
