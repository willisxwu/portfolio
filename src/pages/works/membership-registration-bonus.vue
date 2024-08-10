<script setup lang="ts">
import { cases } from '../../constant/cases'
import CaseIntro from '../../components/CaseIntro.vue'
import {
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
  ICaseOutcome,
} from '../../../types/caseIntro'
import membershipBonusOutcomeImage from '../../assets/membership-bonus-outcome.png'

const caseIntroData = cases.find(
  (item) => item.handle === 'membership-registration-bonus',
)!
const caseLists: ICaseList[] = [
  {
    title: 'Role',
    list: ['Front-End Developer', 'Back-End Developer'],
  },
  {
    title: 'Deliverables',
    list: [
      'Registration Bonus UI section on the membership information page',
      'Functionality for claiming the Registration Bonus',
      'Serverless API for managing Registration Bonus',
      'Registration Bonus records stored in DynamoDB',
      'Feature for customer service to view Registration Bonus records',
      'Function documentation',
    ],
  },
  {
    title: 'Specifications',
    list: [
      '3-week duration',
      'Utilized AWS DynamoDB and Serverless architecture',
      'Ensure that member profiles are fully completed and synchronized with Shopify',
    ],
  },
]
const criteriaDescription =
  'Given the complexity of managing real-time data and ensuring seamless integration across different parts of the system, the implementation of the Registration Bonus feature should meet the following criteria:'
const criteriaItems: ICaseCriteria[] = [
  {
    image:
      'https://img.icons8.com/external-outline-lafs/400/2d2d2d/external-ic_scale-crosschain-outline-lafs.png',
    title: 'Scalability',
    description:
      'Design the system to easily accommodate future enhancements or additional bonus types.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/data-arrived.png',
    title: 'Data Integrity',
    description:
      'Ensure that all bonus data is accurately processed and securely stored.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/wrench--v1.png',
    title: 'Maintainability',
    description:
      'Implement a clean and modular code structure for easier updates and troubleshooting.',
  },
]
const challenges: ICaseChallenge[] = [
  {
    title: 'Handling Discount Code Issues',
    description:
      'Address how to quickly reissue registration bonuses if discount codes encounter errors or anomalies.',
  },
  {
    title: 'Preventing Misuse',
    description:
      'Develop strategies to prevent unauthorized claims of registration bonuses and ensure compliance with the bonus criteria.',
  },
]
const outcome: ICaseOutcome[] = [
  {
    title: 'Registration Bonus function on the membership information page.',
    image: membershipBonusOutcomeImage,
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
