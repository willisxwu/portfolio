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
      class="p-3 flex gap-5 bg-white rounded-2 trans-300 md:p-5 lg:hover:(shadow-lg scale-102)"
    >
      <img
        class="w-40% aspect-4/3 rounded-2 md:w-40% lg:w-40%"
        :src="props.image"
        alt="case-image"
      />
      <div class="w-60% flex flex-col justify-center md:(pt-5 justify-between)">
        <div class="flex flex-col gap-2.5">
          <p
            class="text-(title-md gray-90) md:text-headline-md"
            v-text="props.title"
          ></p>
          <p
            class="hidden text-(content-md gray-70) md:block"
            v-text="props.description"
          ></p>
        </div>
        <div
          v-if="isShowHint"
          class="hidden md:(flex justify-end items-center gap-2)"
        >
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
