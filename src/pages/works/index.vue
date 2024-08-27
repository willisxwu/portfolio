<script setup lang="ts">
import Card from '../../components/CaseCard.vue'
import { cases } from '../../constant/cases'
</script>

<template>
  <div class="px-6 pt-10 md:(px-10 pt-5) lg:(mx-auto pt-10 max-w-330)">
    <div class="text-(headline-xl gray-90)">Previous Works</div>
    <p class="max-w-150 text-(content-md gray-70)">
      Experience in in-house development and creating successful consumer-facing
      (B2C) solutions, including e-commerce.
    </p>
    <div
      class="mt-6 grid grid-cols-1 gap-2 md:(mt-8 gap-8) lg:(my-10 grid-cols-2)"
    >
      <Card
        v-for="item in cases"
        :key="item.handle"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :path="`/works/${item.handle}`"
      />
    </div>
  </div>
</template>
