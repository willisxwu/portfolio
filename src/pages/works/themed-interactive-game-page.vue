<script setup lang="ts">
import { cases } from '../../constant/cases'
import CaseIntro from '../../components/CaseIntro.vue'
import {
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
} from '../../../types/caseIntro'

const caseIntroData = cases.find(
  (item) => item.handle === 'themed-interactive-game-page',
)!
const caseLists: ICaseList[] = [
  {
    title: 'Role',
    list: ['Front-End Developer'],
  },
  {
    title: 'Deliverables',
    list: [
      'An interactive themed game page (mobile-only)',
      'Guessing game scene with Google Sheets integration to record players and answers',
      'Product exposure scene within the game',
      'Scene guiding players to register on the official website',
    ],
  },
  {
    title: 'Specifications',
    list: ['3-week duration', 'Collaborated with the UI/UX and Motion teams'],
  },
]
const criteriaDescription =
  'The themed interactive game page must deliver a smooth, engaging mobile experience, seamlessly integrate with Google Sheets, and effectively showcase products to encourage user interaction and registration.'
const criteriaItems: ICaseCriteria[] = [
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/iphone14-pro.png',
    title: 'Mobile Optimization',
    description:
      'Ensure the game is fully optimized for mobile devices, providing a seamless and responsive user experience.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/merge-docunemts.png',
    title: 'Data Integration',
    description:
      'Implement smooth integration with Google Sheets to accurately track player participation and answers.',
  },
  {
    image:
      'https://img.icons8.com/fluency-systems-regular/400/2d2d2d/visible--v1.png',
    title: 'Effective Product Exposure',
    description:
      'Design the game to naturally highlight products, encouraging user interest and interaction with the brand.',
  },
]
const challenges: ICaseChallenge[] = [
  {
    title: 'Visual Module Creation',
    description:
      'Designing visual modules that accommodate game content descriptions and extend seamlessly onto the game screen, requiring a combination of split and extended assets.',
  },
  {
    title: 'Smooth Scene Transitions',
    description:
      'Ensuring that transitions between game scenes are fluid and maintain the overall user experience.',
  },
]
const outcomeTitle: string =
  'An actual screen recording of the themed interactive game.'
</script>

<template>
  <CaseIntro
    :case-intro="caseIntroData"
    :case-lists="caseLists"
    :criteria-description="criteriaDescription"
    :case-criteria="criteriaItems"
    :case-challenge="challenges"
  >
    <div>
      <div class="mt-20 mb-5 text-(headline-md-lighter gray-90)">Outcome</div>
      <div class="flex flex-wrap gap-30">
        <div>
          <p class="text-(content-sm gray-70)" v-text="outcomeTitle"></p>
          <iframe
            src="https://www.youtube.com/embed/44lmf7sJvbg?mute=1&fs=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
            class="mt-3 w-80 aspect-ratio-9/16"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen="false"
            muted
          ></iframe>
        </div>
        <div class="flex flex-center flex-col gap-5">
          <img
            class="p-2 max-w-50 bg-white rounded-2"
            src="https://cdn.shopify.com/s/files/1/0274/8717/files/star_wars_event_qr_code_400x@2x.png"
            alt="themed-game-qr-code"
          />
          <a
            class="px-4 py-2 bg-black text-(content-sm white) rounded-2 trans-200 hover:(bg-blue-100 text-white)"
            href="https://shop.rhinoshield.uk/event/star-wars2023"
            target="_blank"
            >Play - Mobile Only</a
          >
        </div>
      </div>
    </div>
  </CaseIntro>
</template>
