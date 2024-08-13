<script setup lang="ts">
import SpotlightCard from '../components/SpotlightCard.vue'

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
  <div class="flex flex-col gap-20 lg:px-20">
    <div class="flex flex-col-reverse gap-15 lg:(flex-row gap-5 max-h-90vh)">
      <div class="px-6 md:px-10 lg:(px-0 pt-20 w-50%)">
        <p class="text-banner-lg-denser text-gray-90">Willis Wu</p>
        <p class="my-5 text-(headline-lg-lighter gray-90)">
          A Streamlined-Approach Developer
        </p>
        <p class="text-(content-md-denser gray-70)">
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
        class="w-full flex flex-center aspect-1/1 overflow-hidden md:(mx-10 mb-10 w-unset rounded-2) lg:(m-0 items-end w-50% rounded-0 aspect-unset)"
      >
        <img
          class="w-full h-auto"
          src="https://fakeimg.pl/1000x1000/"
          alt="photo"
        />
      </div>
    </div>
    <div class="px-6 md:px-10 lg:px-0">
      <p class="text-(headline-md-lighter gray-70) md:text-content-md-denser">
        Willis’s Development Philosophy
      </p>
      <div class="mt-5 flex flex-wrap gap-5">
        <SpotlightCard
          v-for="item in philosophyItems"
          :key="item.title"
          class="md:max-w-65 lg:max-w-85"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
    <div class="px-6 md:px-10 lg:px-0">
      <p class="text-(headline-md-lighter gray-70) md:text-content-md-denser">
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
