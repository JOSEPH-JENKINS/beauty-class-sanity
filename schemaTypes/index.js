import {testimonial} from './testimonial'
import {artist} from './artist'
import {category} from './category'
import {event} from './event'
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
import {productType} from './productType'
import {shopPage} from './shop'
import {instagramSection} from './sections/instagramSection'
import {blogPage} from './blog'
import {eventPage} from './eventPage'

export const schemaTypes = [
  testimonial,
  blogPage,
  productType,
  eventPage,
  shopPage,
  artist,
  category,
  event,
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
