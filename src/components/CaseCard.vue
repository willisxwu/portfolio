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
    <div class="p-5 bg-white rounded-2 trans-300 hover:shadow-lg">
      <div
        class="flex flex-center max-w-100 max-h-75 rounded-2 overflow-hidden"
      >
        <img class="w-full h-auto" :src="props.image" alt="case-image" />
      </div>
      <p class="p-2.5 text-(headline-md gray-90)" v-text="props.title"></p>
      <p
        class="px-2.5 pb-2.5 text-(content-md gray-70)"
        v-text="props.description"
      ></p>
      <div v-if="isShowHint" class="flex justify-end items-center">
        <p
          class="px-2 text-(caption-md-bolder-sparser gray-90 right) hover:text-gray-80"
          v-text="hint"
        ></p>
        <img
          width="12"
          height="12"
          src="https://img.icons8.com/material-rounded/24/2d2d2d/circled-right-2.png"
          alt="circled-right-2"
        />
      </div>
    </div>
  </router-link>
</template>
