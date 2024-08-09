<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    image: string
    title: string
    description: string
  }>(),
  {},
)
</script>

<template>
  <div class="p-5 bg-white rounded-2">
    <img
      class="max-w-20"
      :src="props.image"
      :alt="`${props.title.toLowerCase().replaceAll(' ', '-')}-icon`"
    />
    <div>
      <p class="text-title-xl-lighter" v-text="props.title"></p>
      <p class="mt-2 text-content-sm" v-text="props.description"></p>
    </div>
  </div>
</template>
