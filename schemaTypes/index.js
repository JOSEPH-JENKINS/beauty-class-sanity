import {testimonial} from './testimonial'
import {artist} from './artist'
import {category} from './category'
import {event} from './event'
import {founderPage} from './founderPage'
import {blogPost} from './post'
import {aboutPage} from './aboutPage'
import {homepage} from './homepage'
import {heroSection} from './sections/heroSection'
import {testimonialSection} from './sections/testimonialSection'
import {softCta} from './sections/softCtaSection'
import {siteSettings} from '../siteSettings'

export const schemaTypes = [
  testimonial,
  artist,
  category,
  event,
  founderPage,
  blogPost,
  aboutPage,
  homepage,

  //section types
  heroSection,
  testimonialSection,
  softCta,

  //other imports
  siteSettings,
]
