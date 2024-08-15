<script setup lang="ts">
import SpotlightCard from '../components/SpotlightCard.vue'
import photo from '../assets/about-intro-photo.jpg'

interface IPhilosophyItems {
  image: string
  title: string
  description: string
}

const philosophyItems: IPhilosophyItems[] = [
  {
    image: 'https://img.icons8.com/sf-black/400/2d2d2d/circle-thin.png',
    title: 'Efficiency through Simplicity',
    description:
      'Believing that less is more, I focus on creating streamlined, maintainable solutions that maximize impact while minimizing complexity.',
  },
  {
    image: 'https://img.icons8.com/sf-regular-filled/400/2d2d2d/infinity.png',
    title: 'Reusability',
    description:
      'Crafting versatile features that can be reused across various projects, ensuring long-term value and adaptability in every solution.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/puzzle-matching.png',
    title: 'Empowerment through Integration',
    description:
      'Integrating external controls to make functionalities accessible to non-technical users, reducing maintenance and enhancing usability across the board.',
  },
]
</script>

<template>
  <div class="flex flex-col gap-20 md:px-10 lg:px-20">
    <!-- About Intro and Image -->
    <div class="flex flex-col-reverse gap-15 md:flex-row">
      <div class="px-6 md:(px-0 w-full) lg:(pt-20 w-60%)">
        <div class="flex justify-start items-center gap-5">
          <img
            class="hidden md:(block w-30 rounded-99 border-(solid 6px white) opacity-90 shadow) lg:hidden"
            :src="photo"
            alt="photo"
          />
          <div>
            <p class="text-banner-lg-denser text-gray-90">Willis Wu</p>
            <p class="mt-5 text-(headline-lg-lighter gray-90)">
              A Streamlined-Approach Developer
            </p>
          </div>
        </div>
        <p class="mt-10 text-(content-md-denser gray-70) lg:text-content-md">
          With over five years of experience in development, I champion the
          philosophy of <strong>"less is more"</strong>, believing that
          simplicity leads to powerful, maintainable code. I focus on creating
          reusable features that enhance versatility and integrating external
          controls to empower non-technical users, all while reducing the
          complexity and maintenance required.<br /><br />
          My approach is rooted in the art of reduction—streamlining processes
          to ensure smoother workflows and minimizing costs. I have a sharp eye
          for visual detail and user communication, enabling me to collaborate
          effectively with UI/UX designers and contribute valuable insights.<br /><br />
          Experienced in agile methodologies, I excel in cross-departmental
          collaboration, bringing both a macro and micro perspective to
          projects. My work is driven by a commitment to efficiency,
          effectiveness, and the seamless integration of form and function.
        </p>
      </div>
      <div
        class="flex flex-center overflow-hidden md:hidden lg:(mt-10 p-5 w-40% flex items-start bg-white rounded-2 shadow)"
      >
        <img
          class="w-full h-auto opacity-90 lg:rounded-2"
          :src="photo"
          alt="photo"
        />
      </div>
    </div>
    <!-- Philosophy -->
    <div class="px-6 md:px-0">
      <p class="text-(headline-md-lighter gray-90) md:text-content-md-denser">
        Willis’s Development Philosophy
      </p>
      <div class="mt-5 grid gap-5 md:grid-cols-2 lg:(max-w-330 grid-cols-3)">
        <SpotlightCard
          v-for="item in philosophyItems"
          :key="item.title"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
    <!-- Education -->
    <div class="px-6 md:px-0">
      <p class="text-(headline-md-lighter gray-90) md:text-content-md-denser">
        Education
      </p>
      <p class="mt-5 text-(headline-sm-lighter gray-90)">
        B.Sc. in Information Management
      </p>
      <p class="text-(content-sm gray-70)">
        National Chin-Yi University of Technology
      </p>
    </div>
  </div>
</template>
