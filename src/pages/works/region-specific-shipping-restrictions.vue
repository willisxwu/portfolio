<script setup lang="ts">
import { cases } from '../../constant/cases'
import CaseIntro from '../../components/CaseIntro.vue'
import {
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
  ICaseOutcome,
} from '../../../types/caseIntro'
import shippingRestrictionsOutcomeImage from '../../assets/shipping-restrictions-outcome.png'

const caseIntroData = cases.find(
  (item) => item.handle === 'region-specific-shipping-restrictions',
)!
const caseLists: ICaseList[] = [
  {
    title: 'Role',
    list: ['Front-End Developer', 'Back-End Developer'],
  },
  {
    title: 'Deliverables',
    list: [
      'Webhook API for the authorization management system',
      'Formatting and storing updated authorization data as Config files for different shopping websites',
      'Logic in the shopping cart to check product design authorization for overseas shipping regions',
      'Warning popup UI for shipments to unauthorized regions',
    ],
  },
  {
    title: 'Specifications',
    list: ['3-week duration', 'Utilized AWS S3 and Serverless architecture'],
  },
]
const criteriaDescription =
  'The development of the region-specific shipping restrictions must ensure accurate enforcement of shipping permissions based on product design authorizations, provide clear user alerts for unauthorized regions, and maintain seamless updates across multiple language shopping sites.'
const criteriaItems: ICaseCriteria[] = [
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/goal--v1.png',
    title: 'Accurate Authorization Checks',
    description:
      'Implement precise logic to verify shipping permissions based on product design authorizations.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/siren.png',
    title: 'Real-Time Alerts',
    description:
      'Promptly notify users with clear popups if shipping to a selected region is unauthorized.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/align-cell-content-right.png',
    title: 'Standardized Formatting',
    description:
      'Establish a consistent format for authorization files, ensuring uniform standards across all language sites.',
  },
]
const challenges: ICaseChallenge[] = [
  {
    title: 'Complex Authorization Logic',
    description:
      'Developing and maintaining complex logic to accurately verify product shipping permissions across multiple regions and ensure compliance with varying design authorizations.',
  },
  {
    title: 'Strict Formatting Standards',
    description:
      'Establishing rigorous logic for formatting to prevent errors caused by unexpected data from the authorization management system, ensuring smooth processing and consistency.',
  },
]
const outcome: ICaseOutcome[] = [
  {
    title:
      'Implemented a warning popup on the shopping cart page for unauthorized shipping regions.',
    image: shippingRestrictionsOutcomeImage,
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
