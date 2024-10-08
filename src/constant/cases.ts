import membershipBonusImage from '../assets/membership-bonus.jpg'
import cmsImage from '../assets/cms.jpg'
import themedGameImage from '../assets/themed-game.jpg'
import landingPageImage from '../assets/landingPages.jpg'
import shippingRestrictionsImage from '../assets/shipping-restrictions.jpg'
import type { ICaseInfo } from '../../types/caseIntro'

export const cases: ICaseInfo[] = [
  {
    handle: 'responsive-product-landing-pages',
    image: landingPageImage,
    title: 'Responsive Product Landing Pages',
    description:
      'Created responsive product landing pages for an online shopping website, effectively showcasing products.',
    effect:
      'The development of responsive product landing pages ensured a consistent and optimized user experience across devices, which contributed to improved product presentations and potentially higher conversion rates.',
  },
  {
    handle: 'themed-interactive-game-page',
    image: themedGameImage,
    title: 'Themed Interactive Game Page',
    description:
      'Developed an interactive game for a UK shopping website, boosting product exposure and guiding customer registrations.',
    effect:
      'The creation of the themed interactive game page enhanced product visibility and attracted new customers by engaging them in a fun and interactive way, ultimately driving traffic and registrations to the website.',
  },
  {
    handle: 'cms-for-content-management',
    image: cmsImage,
    title: 'CMS for Content Management',
    description:
      'Created a CMS feature for an online shopping website, enabling real-time content and asset adjustments.',
    effect:
      'By implementing the CMS feature, we empowered non-developers to make real-time content updates, enhancing the website’s agility in responding to marketing needs and improving the overall efficiency of content management.',
  },
  {
    handle: 'membership-registration-bonus',
    image: membershipBonusImage,
    title: 'Membership Registration Bonus',
    description:
      'Developed a registration bonus feature for an online shopping website, offering a discount code to encourage first-time purchases.',
    effect:
      'Through the development of the registration bonus feature, we provided an incentive for new customers, thereby increasing the likelihood of initial purchases and fostering customer engagement right from the start.',
  },
  {
    handle: 'region-specific-shipping-restrictions',
    image: shippingRestrictionsImage,
    title: 'Region-Specific Shipping Restrictions',
    description:
      'Implemented shipping restrictions for specific regions, ensuring compliance with authorized shipping areas.',
    effect:
      'By implementing region-specific shipping restrictions, we ensured compliance with authorized shipping areas, mitigating the risk of unauthorized sales and maintaining strong relationships with designer collaborators.',
  },
]
