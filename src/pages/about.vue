<script setup lang="ts">
interface IPhilosophyItems {
  image: string
  ait: string
  title: string
  description: string
}

const philosophyItems: IPhilosophyItems[] = [
  {
    image: 'https://img.icons8.com/sf-black/400/2d2d2d/circle-thin.png',
    ait: 'image-circle',
    title: 'Efficiency through Simplicity',
    description:
      'Believing that less is more, I focus on creating streamlined, maintainable solutions that maximize impact while minimizing complexity.',
  },
  {
    image: 'https://img.icons8.com/sf-regular-filled/400/2d2d2d/infinity.png',
    ait: 'image-infinity',
    title: 'Reusability',
    description:
      'Crafting versatile features that can be reused across various projects, ensuring long-term value and adaptability in every solution.',
  },
  {
    image: 'https://img.icons8.com/ios/400/2d2d2d/puzzle-matching.png',
    ait: 'image-puzzle',
    title: 'Empowerment through Integration',
    description:
      'Integrating external controls to make functionalities accessible to non-technical users, reducing maintenance and enhancing usability across the board.',
  },
]
</script>

<template>
  <div class="px-20 flex flex-col gap-20">
    <div class="flex gap-5 max-h-screen">
      <div class="pt-20 max-w-200">
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
      <div class="flex flex-center overflow-hidden">
        <img
          class="w-auto h-full object-cover"
          src="https://fakeimg.pl/1000x750/"
          alt="photo"
        />
      </div>
    </div>
    <div>
      <p class="text-(content-md-denser gray-70)">
        Willis’s Development Philosophy
      </p>
      <div class="mt-5 grid grid-cols-3 gap-5 max-w-300">
        <div v-for="item in philosophyItems" class="p-5 bg-white rounded-2">
          <img class="max-w-20" :src="item.image" :alt="item.ait" />
          <div>
            <p class="text-title-xl-lighter" v-text="item.title"></p>
            <p class="mt-2 text-content-sm" v-text="item.description"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-40">
      <p class="text-(content-md-denser gray-70)">Education</p>
      <p class="mt-5 text-(headline-sm-lighter gray-90)">
        B.Sc. in Information Management
      </p>
      <p class="text-(content-sm gray-70)">
        National Chin-Yi University of Technology
      </p>
    </div>
  </div>
</template>
