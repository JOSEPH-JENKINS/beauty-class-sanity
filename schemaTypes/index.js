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
import {aboutSection} from './sections/aboutSection'
import {contactPage} from './contact'
import {modalSection} from './modalSection'
import {siteSettings} from '../siteSettings'
import {products} from './products'
import {instagramSection} from './sections/instagramSection'

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
  products,

  //section types
  heroSection,
  instagramSection,
  testimonialSection,
  softCta,
  brandsSection,
  aboutSection,

  //other imports
  siteSettings,
]
