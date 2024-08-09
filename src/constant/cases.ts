import membershipBonusImage from '../assets/membership-bonus.jpg'
import cmsImage from '../assets/cms.jpg'
import themedGameImage from '../assets/themed-game.jpg'
import landingPageImage from '../assets/landingPages.jpg'
import shippingRestrictionsImage from '../assets/shipping-restrictions.jpg'

interface ICaseItem {
  image: string
  title: string
  description: string
  path: string
}

export const cases: ICaseItem[] = [
  {
    image: membershipBonusImage,
    title: 'Membership Registration Bonus',
    description: 'Developed a feature that provides customers with a shopping discount code upon completing their registration information.',
    path: '/works/membership-registration-bonus'
  },
  {
    image: cmsImage,
    title: 'CMS for Content Management',
    description: 'Developed a CMS that allows non-developers to manage promotional content and phone case design collections, seamlessly updating the website display.',
    path: '/works/cms-for-content-management'
  },
  {
    image: themedGameImage,
    title: 'Themed Interactive Game Page',
    description: 'Developed an interactive game page featuring name entry, a guessing game with prize opportunities, product viewing, sharing options, and a guided link to the registration site.',
    path: '/works/themed-interactive-game-page'
  },
  {
    image: landingPageImage,
    title: 'Responsive Product Landing Pages',
    description: 'Developed product landing pages in close collaboration with UI/UX teams, optimizing designs for desktop, tablet, and mobile to showcase products effectively.',
    path: '/works/responsive-product-landing-pages'
  },
  {
    image: shippingRestrictionsImage,
    title: 'Region-Specific Shipping Restrictions',
    description: 'Implemented a system to enforce shipping restrictions for designer collaboration products, with real-time data updates and alerts for unauthorized regions.',
    path: '/works/region-specific-shipping-restrictions'
  }
]