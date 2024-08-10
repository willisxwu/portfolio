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
    caseOutcome: ICaseOutcome[]
  }>(),
  {},
)
</script>

<template>
  <div class="px-50 pt-20">
    <div class="py-5 max-w-250">
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

    <div class="mt-20 flex flex-wrap gap-10">
      <div
        class="p-5 w-100 bg-white rounded-2"
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

    <div class="mt-20">
      <div class="text-(headline-md-lighter gray-90)">Development Criteria</div>
      <p
        class="max-w-250 text-(content-md gray-70)"
        v-text="props.criteriaDescription"
      ></p>
      <div class="mt-5 flex flex-wrap gap-5">
        <SpotlightCard
          v-for="item in props.caseCriteria"
          :key="item.title"
          class="max-w-85"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        />
      </div>
    </div>

    <div class="mt-20">
      <div class="mb-5 text-(headline-md-lighter gray-90)">
        Development Challenges
      </div>
      <div
        class="mt-5 max-w-250"
        v-for="item in props.caseChallenge"
        :key="item.title"
      >
        <p class="text-(title-lg-lighter gray-70)" v-text="item.title"></p>
        <p class="text-(content-sm gray-70)" v-text="item.description"></p>
      </div>
    </div>

    <div class="mt-20">
      <div class="text-(headline-md-lighter gray-90)">Outcome</div>
      <div v-for="item in props.caseOutcome" :key="item.title">
        <p class="max text-(content-md gray-70)" v-text="item.title"></p>
        <img
          class="mt-5 max-w-200 rounded-2"
          :src="item.image"
          alt="case-outcome-image"
        />
      </div>
    </div>

    <div class="mt-20">
      <router-link
        to="/works"
        class="px-4 py-2 border-(solid 1.5px gray-70) rounded-2 trans-200 hover:(bg-gray-70 text-white)"
      >
        View More Works
      </router-link>
    </div>
  </div>
</template>
