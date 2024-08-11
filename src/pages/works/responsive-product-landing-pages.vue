<script setup lang="ts">
import { cases } from '../../constant/cases'
import CaseIntro from '../../components/CaseIntro.vue'
import {
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
} from '../../../types/caseIntro'

const caseIntroData = cases.find(
  (item) => item.handle === 'responsive-product-landing-pages',
)!
const caseLists: ICaseList[] = [
  {
    title: 'Role',
    list: ['Front-End Developer'],
  },
  {
    title: 'Deliverables',
    list: [
      'Modular and reusable Product Landing Page components',
      'Responsive Product Landing Pages optimized for mobile, tablet, and desktop devices',
    ],
  },
  {
    title: 'Specifications',
    list: ['2-week duration', 'Collaborated with UI/UX team'],
  },
]
const criteriaDescription =
  'The creation of Product Landing Pages should prioritize modularity for ease of reuse, responsiveness across all device types, and a user-centric design to enhance product presentation and user experience.'
const criteriaItems: ICaseCriteria[] = [
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/code-blocks.png',
    title: 'Modularity',
    description:
      'Ensure the game is fully optimized for mobile devices, providing a seamless and responsive user experience.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/media-queries.png',
    title: 'Responsive Design',
    description:
      'Optimize the layout and functionality for mobile, tablet, and desktop devices to provide a consistent user experience.',
  },
  {
    image: 'https://img.icons8.com/small/400/2d2d2d/user.png',
    title: 'User-Centric Presentation',
    description:
      'Focus on clear and effective product presentation to engage users and improve conversion rates.',
  },
]
const challenges: ICaseChallenge[] = [
  {
    title: 'Balancing reusability with modular compatibility',
    description:
      'Ensuring that while modules are reusable, they also integrate seamlessly with each other.',
  },
  {
    title: 'Optimizing load times',
    description:
      'Balancing high-quality visuals with efficient load times, especially on mobile devices, to ensure a fast and smooth user experience.',
  },
]

const outcomeTitle: string =
  'Created an actual screen recording showcasing the Product Landing Page across different breakpoints.'
</script>

<template>
  <CaseIntro
    :case-intro="caseIntroData"
    :case-lists="caseLists"
    :criteria-description="criteriaDescription"
    :case-criteria="criteriaItems"
    :case-challenge="challenges"
  >
    <div class="mt-20 mb-5 text-(headline-md-lighter gray-90)">Outcome</div>
    <p class="text-(content-sm gray-70)" v-text="outcomeTitle"></p>
    <div class="mt-3 flex flex-wrap gap-10">
      <iframe
        src="https://www.youtube.com/embed/LyBQLOfd6Mg?mute=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
        class="w-110 h-75"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen="false"
        muted
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/SI-5W3v4RRs?mute=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
        class="w-110 h-75"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen="false"
        muted
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/pyhcNI8Mq6A?mute=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
        class="w-45 h-75"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen="false"
        muted
      ></iframe>
    </div>
  </CaseIntro>
</template>
