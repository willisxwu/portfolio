import membershipBonusImage from '../assets/membership-bonus.jpg'
import cmsImage from '../assets/cms.jpg'
import themedGameImage from '../assets/themed-game.jpg'
import landingPageImage from '../assets/landingPages.jpg'
import shippingRestrictionsImage from '../assets/shipping-restrictions.jpg'

interface ICaseItem {
  handle: string
  image: string
  title: string
  description: string
}

export const cases: ICaseItem[] = [
  {
    handle: 'membership-registration-bonus',
    image: membershipBonusImage,
    title: 'Membership Registration Bonus',
    description: 'Developed a registration bonus feature for an online shopping website, offering a discount code to encourage first-time purchases.'
  },
  {
    handle: 'cms-for-content-management',
    image: cmsImage,
    title: 'CMS for Content Management',
    description: 'Created a CMS feature for an online shopping website, enabling real-time content and asset adjustments.'
  },
  {
    handle: 'themed-interactive-game-page',
    image: themedGameImage,
    title: 'Themed Interactive Game Page',
    description: 'Developed a themed interactive game for a UK online shopping website, boosting product exposure and guiding new customer registrations.'
  },
  {
    handle: 'responsive-product-landing-pages',
    image: landingPageImage,
    title: 'Responsive Product Landing Pages',
    description: 'Created responsive product landing pages for an online shopping website, effectively showcasing products.'
  },
  {
    handle: 'region-specific-shipping-restrictions',
    image: shippingRestrictionsImage,
    title: 'Region-Specific Shipping Restrictions',
    description: 'Implemented shipping restrictions for specific regions, ensuring compliance with authorized shipping areas.'
  }
]