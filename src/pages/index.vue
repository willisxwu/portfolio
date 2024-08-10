<script setup lang="ts">
import linkedIn from '../assets/linkedIn.svg'
import Card from '../components/CaseCard.vue'
import { cases } from '../constant/cases'
</script>

<template>
  <div class="pl-20">
    <div class="flex gap-5 max-h-150">
      <div class="w-50% text-gray-90">
        <div class="mt-50 text-banner-sm-denser">Full-Stack Developer</div>
        <p class="text-banner-lg-denser">Willis Wu</p>
        <p class="text-(content-md gray-70)">
          Dedicated to crafting exceptional front-end and back-end experiences,
          I excel at delivering high-quality results with a creative approach to
          functionality and a keen eye for process improvement and optimization.
        </p>
        <div class="mt-5 flex items-center gap-5">
          <a
            class="flex flex-center"
            href="https://www.linkedin.com/in/willisxwu/"
          >
            <img :src="linkedIn" class="w-11" alt="linkedIn" />
          </a>
          <router-link
            to="/about"
            class="px-4 py-2 border-(solid 1.5px gray-70) rounded-2 trans-200 hover:(bg-gray-70 text-white)"
          >
            About Me
          </router-link>
        </div>
      </div>
      <div class="w-50% flex flex-center overflow-hidden">
        <img
          class="w-auto h-full object-cover"
          src="https://fakeimg.pl/1000x750/"
          alt="photo"
        />
      </div>
    </div>
    <div class="mt-20 grid grid-cols-3 max-w-300">
      <div>
        <p class="text-(headline-xl-lighter gray-90)">5+ years</p>
        <p class="text-(content-md gray-70)">Full-Stack Development</p>
      </div>
      <div>
        <p class="text-(headline-xl-lighter gray-90)">Specialist</p>
        <p class="text-(content-md gray-70)">
          in Front-End and Back-End Solutions
        </p>
      </div>
      <div>
        <p class="text-(headline-xl-lighter gray-90)">Focused</p>
        <p class="text-(content-md gray-70)">
          on Efficient Workflows and Innovative Solutions
        </p>
      </div>
    </div>
    <div class="mt-20">
      <div class="text-(headline-xl-lighter gray-90)">Featured Works</div>
      <p class="max-w-150 text-(content-md gray-70)">
        Experience in in-house development and creating successful
        consumer-facing (B2C) solutions, including e-commerce.
      </p>
      <div class="mt-10 pr-20 flex flex-wrap gap-10">
        <Card
          v-for="item in cases.slice(0, 2)"
          :key="item.handle"
          class="max-w-200"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :path="`/works/${item.handle}`"
        />
      </div>
      <div class="mt-10">
        <router-link
          to="/works"
          class="px-4 py-2 border-(solid 1.5px gray-70) rounded-2 trans-200 hover:(bg-gray-70 text-white)"
        >
          View More Works
        </router-link>
      </div>
    </div>
  </div>
</template>
