<script setup lang="ts">
import { cases } from '../../constant/cases'
import CaseIntro from '../../components/CaseIntro.vue'
import {
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
  ICaseOutcome,
} from '../../../types/caseIntro'
import cmsOutcomeBuyingImage from '../../assets/cms-outcome-buying.png'
import cmsOutcomeNavigationImage from '../../assets/cms-outcome-navigation.png'

const caseIntroData = cases.find(
  (item) => item.handle === 'cms-for-content-management',
)!
const caseLists: ICaseList[] = [
  {
    title: 'Role',
    list: ['Front-End Developer', 'Back-End Developer'],
  },
  {
    title: 'Deliverables',
    list: [
      'Promotional and notice message UI for the product buying page',
      'Webhook API to synchronize all product types',
      'Custom CMS API for managing promotional and notice messages',
      'Integration of the message with the CMS custom API on the product buying page',
      'Strapi CMS interface for non-developers to manage promotional messages',
      'Function documentation',
    ],
  },
  {
    title: 'Specifications',
    list: [
      '2-week duration',
      'Utilized Strapi CMS',
      'Collaborated with the product data team',
    ],
  },
]
const criteriaDescription =
  'The implementation of the CMS for content management must prioritize usability for non-technical users, ensure real-time synchronization of product data, and allow for easy maintenance and future expansion.'
const criteriaItems: ICaseCriteria[] = [
  {
    image:
      'https://img.icons8.com/external-outline-lafs/400/2d2d2d/external-ic_scale-crosschain-outline-lafs.png',
    title: 'Scalability',
    description:
      'Design the CMS to support future expansions with minimal rework.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/accessibility2.png',
    title: 'User Accessibility',
    description:
      'Make the CMS intuitive for non-developers to manage content easily.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/time--v1.png',
    title: 'Real-Time Sync',
    description:
      'Enable immediate updates and synchronization of product data.',
  },
]
const challenges: ICaseChallenge[] = [
  {
    title: 'Data Field Configuration',
    description:
      'Ensuring that foundational data fields, like product types in Strapi CMS, are set up to support future expansions and other applications seamlessly.',
  },
  {
    title: 'Customization for Non-Developers',
    description:
      'Creating a user-friendly Strapi CMS interface that allows non-technical users to manage complex promotional content without compromising functionality or system integrity.',
  },
]
const outcome: ICaseOutcome[] = [
  {
    title:
      'Implemented promotional and notice message features on product purchase pages.',
    image: cmsOutcomeBuyingImage,
  },
  {
    title:
      "Expanded CMS applications to include a featured event section in the website's navigation.",
    image: cmsOutcomeNavigationImage,
  },
]
</script>

<template>
  <CaseIntro
    :case-intro="caseIntroData"
    :case-lists="caseLists"
    :criteria-description="criteriaDescription"
    :case-criteria="criteriaItems"
    :case-challenge="challenges"
    :case-outcome="outcome"
  />
</template>
