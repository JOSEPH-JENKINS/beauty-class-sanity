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
import {brandsSection} from './sections/brandLogos'
import {softCta} from './sections/softCtaSection'
import {contactPage} from './contact'
import {modalSection} from './modalSection'
import {siteSettings} from '../siteSettings'

export const schemaTypes = [
  testimonial,
  artist,
  category,
  event,
  founderPage,
  blogPost,
  aboutPage,
  contactPage,
  homepage,
  modalSection,

  //section types
  heroSection,
  testimonialSection,
  softCta,
  brandsSection,

  //other imports
  siteSettings,
]
