<script setup lang="ts">
import CaseCard from '../components/CaseCard.vue'
import { cases } from '../constant/cases'
import photoWithTransparent from '../assets/home-intro-photo.png'

interface IExperience {
  title: string
  description: string
}

const experienceList: IExperience[] = [
  {
    title: '5+ years',
    description: 'Full-Stack Development',
  },
  {
    title: 'Specialist',
    description: 'in Front-End and Back-End Solutions',
  },
  {
    title: 'Focused',
    description: 'on Efficient Workflows and Innovative Solutions',
  },
]
</script>

<template>
  <div class="flex flex-col gap-20 lg:px-20">
    <!-- Intro and Image -->
    <div class="flex flex-col-reverse gap-15 lg:(flex-row gap-5 max-h-80vh)">
      <div
        class="px-6 text-gray-90 md:(absolute w-full px-10 py-10 bg-cream-10/50 z-medium) lg:(relative p-0 w-50% bg-transparent)"
      >
        <div class="text-banner-sm-denser lg:mt-50">Full-Stack Developer</div>
        <p class="text-banner-lg-denser">Willis Wu</p>
        <p class="max-w-150 text-(content-md gray-70) lg:max-w-unset">
          Dedicated to crafting exceptional front-end and back-end experiences,
          I excel at delivering high-quality results with a creative approach to
          functionality and a keen eye for process improvement and optimization.
        </p>
        <div class="mt-5 flex items-center gap-5">
          <a
            class="flex flex-center"
            href="https://www.linkedin.com/in/willisxwu/"
            target="_blank"
          >
            <img
              src="https://img.icons8.com/ios-filled/200/585858/linkedin.png"
              class="w-11"
              alt="linkedIn"
            />
          </a>
          <router-link
            to="/about"
            class="px-4 py-1 bg-gray-70 text-brown-10 text-content-md-bolder rounded-1.5 trans-200 hover:(bg-gray-40)"
          >
            About Me
          </router-link>
        </div>
      </div>
      <div
        class="relative w-full flex flex-center aspect-1/1 overflow-hidden lg:(m-0 w-50% rounded-2)"
      >
        <div
          class="w-full h-full z-low bg-gradient-to-tl from-transparent via-gray-20 to-transparent"
        ></div>
        <img
          class="absolute w-full h-auto z-low opacity-90 md:(w-auto h-full opacity-100)"
          :src="photoWithTransparent"
          alt="photo"
        />
      </div>
    </div>
    <!-- Experience -->
    <div
      class="px-6 grid grid-cols-1 gap-5 md:(px-10 grid-cols-3 max-w-300) lg:px-0"
    >
      <div v-for="item in experienceList" :key="item.title">
        <p class="text-(headline-xl gray-90)" v-text="item.title"></p>
        <p class="text-(content-md gray-70)" v-text="item.description"></p>
      </div>
    </div>
    <!-- Featured Works -->
    <div class="px-6 md:px-10 lg:px-0">
      <div class="text-(headline-xl gray-90)">Featured Works</div>
      <p class="max-w-150 text-(content-md gray-70)">
        Experience in in-house development and creating successful
        consumer-facing (B2C) solutions, including e-commerce.
      </p>
      <div
        class="mt-6 grid grid-cols-1 gap-2 md:(mt-8 gap-8) lg:(mt-10 grid-cols-2)"
      >
        <CaseCard
          v-for="item in cases.slice(0, 2)"
          :key="item.handle"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :path="`/works/${item.handle}`"
        />
      </div>
      <router-link
        to="/works"
        class="mt-10 px-5 py-2 w-fit block text-(content-md-bolder gray-90) border-(solid 1.5px gray-90) rounded-10 trans-200 hover:(bg-gray-90 text-white)"
      >
        View More Works
      </router-link>
    </div>
  </div>
</template>
