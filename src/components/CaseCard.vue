<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    image: string
    path: string
    hint?: string
    isShowHint?: boolean
  }>(),
  {
    description: '',
    hint: 'Read Case',
    isShowHint: true,
  },
)
</script>

<template>
  <router-link :to="path">
    <div
      class="p-5 flex bg-white rounded-2 trans-300 hover:(shadow-lg scale-102)"
    >
      <div
        class="flex flex-center w-200 aspect-4/3 rounded-2 overflow-hidden bg-light-green-40"
      >
        <img class="w-auto h-full" :src="props.image" alt="case-image" />
      </div>
      <div class="px-5 pt-5 flex flex-col justify-between w-full">
        <div class="flex flex-col gap-2.5">
          <p class="text-(headline-md gray-90)" v-text="props.title"></p>
          <p class="text-(content-md gray-70)" v-text="props.description"></p>
        </div>
        <div v-if="isShowHint" class="flex justify-end items-center gap-2">
          <p
            class="text-(caption-md-bolder-sparser gray-90 right) hover:text-gray-80"
            v-text="hint"
          ></p>
          <img
            class="max-w-5"
            src="https://img.icons8.com/material-rounded/400/2d2d2d/circled-right-2.png"
            alt="circled-right-2"
          />
        </div>
      </div>
    </div>
  </router-link>
</template>
