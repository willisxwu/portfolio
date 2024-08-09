<script setup lang="ts">
import Card from '../../components/CaseCard.vue'
import { cases } from '../../constant/cases'
</script>

<template>
  <div class="px-20 pt-20 pb-40">
    <div class="text-(headline-xl-lighter gray-90)">Previous Works</div>
    <p class="max-w-150 text-(content-md gray-70)">
      Experience in in-house development and creating successful consumer-facing
      (B2C) solutions, including Shopify e-commerce.
    </p>
    <div class="mt-10 flex flex-wrap gap-10">
      <Card
        v-for="item in cases"
        :key="item.path"
        class="w-200"
        :title="item.title"
        :description="item.description"
        :image="item.image"
        :path="item.path"
      />
    </div>
  </div>
</template>
