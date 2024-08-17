<script setup lang="ts">
import type {
  ICaseInfo,
  ICaseList,
  ICaseCriteria,
  ICaseChallenge,
  ICaseOutcome,
} from '../../types/caseIntro'
import SpotlightCard from '../components/SpotlightCard.vue'

const props = withDefaults(
  defineProps<{
    caseIntro: ICaseInfo
    caseLists: ICaseList[]
    criteriaDescription: string
    caseCriteria: ICaseCriteria[]
    caseChallenge: ICaseChallenge[]
    caseOutcome?: ICaseOutcome[]
  }>(),
  {},
)
</script>

<template>
  <div
    class="px-6 pt-10 flex flex-col gap-10 md:(px-10 pt-5 gap-15) lg:(mx-auto pt-10 max-w-330 gap-20)"
  >
    <!-- Case Head -->
    <div class="py-5 md:max-w-200 lg:max-w-250">
      <div
        class="text-(title-lg-lighter gray-90)"
        v-text="props.caseIntro.title"
      ></div>
      <p
        class="mt-2.5 text-(headline-xl gray-90)"
        v-text="props.caseIntro.description"
      ></p>
      <p
        class="mt-10 text-(title-lg-lighter gray-70)"
        v-text="props.caseIntro.effect"
      ></p>
    </div>
    <!-- Case Lists -->
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="p-5 bg-white rounded-2"
        v-for="list in props.caseLists"
        :key="list.title"
      >
        <div class="text-(title-xl-lighter gray-90)" v-text="list.title"></div>
        <ul class="mt-2.5">
          <li class="py-1" v-for="item in list.list" :key="item">
            <span class="text-(content-sm gray-70)" v-text="item"></span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Case Criteria -->
    <div>
      <div class="mb-5 text-(headline-md gray-90)">Development Criteria</div>
      <p
        class="text-(content-md gray-70) md:max-w-200 lg:max-w-250"
        v-text="props.criteriaDescription"
      ></p>
      <div class="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <SpotlightCard
          v-for="item in props.caseCriteria"
          :key="item.title"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>
    <!-- Case Challenges -->
    <div>
      <div class="text-(headline-md gray-90)">Development Challenges</div>
      <div
        class="mt-5 md:max-w-200 lg:max-w-250"
        v-for="item in props.caseChallenge"
        :key="item.title"
      >
        <p class="text-(title-lg-lighter gray-70)" v-text="item.title"></p>
        <p class="text-(content-sm gray-70)" v-text="item.description"></p>
      </div>
    </div>
    <!-- Case Outcome -->
    <div>
      <div v-if="props.caseOutcome">
        <div class="mb-5 text-(headline-md gray-90)">Outcome</div>
        <div class="flex flex-col gap-15">
          <div v-for="item in props.caseOutcome" :key="item.title">
            <p class="text-(content-sm gray-70)" v-text="item.title"></p>
            <img
              class="mt-3 w-full rounded-2 md:max-w-200"
              :src="item.image"
              alt="case-outcome-image"
            />
          </div>
        </div>
      </div>
      <!-- For Slot -->
      <div>
        <slot />
      </div>
      <!-- Works Link -->
      <router-link
        to="/works"
        class="mt-10 px-5 py-2 w-fit block text-(content-md-bolder gray-90) border-(solid 1.5px gray-90) rounded-10 trans-200 hover:(bg-gray-90 text-white)"
      >
        View More Works
      </router-link>
    </div>
  </div>
</template>
