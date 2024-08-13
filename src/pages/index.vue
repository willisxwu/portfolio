<script setup lang="ts">
import CaseCard from '../components/CaseCard.vue'
import { cases } from '../constant/cases'

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
      <div class="px-6 text-gray-90 md:px-10 lg:(px-0 w-50%)">
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
            class="px-4 py-1 bg-gray-70 text-white text-content-md-bolder rounded-1.5 trans-200 hover:(bg-gray-50 text-white)"
          >
            About Me
          </router-link>
        </div>
      </div>
      <div
        class="w-full flex flex-center aspect-1/1 overflow-hidden md:(mx-10 mb-10 w-unset rounded-2) lg:(m-0 w-50% rounded-0 aspect-unset)"
      >
        <img
          class="w-full h-auto"
          src="https://fakeimg.pl/1000x1000/"
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
        class="mt-5 px-4 py-1 w-fit block bg-gray-70 text-white text-content-md-bolder rounded-1.5 trans-200 hover:(bg-gray-50 text-white)"
      >
        View More
      </router-link>
    </div>
  </div>
</template>
