<script setup lang="ts">
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const navigationHeight = ref(0)
const handleNavigationHeight = (value: number) => {
  navigationHeight.value = value
}
</script>

<template>
  <Navigation @navigationHeight="handleNavigationHeight" />
  <main :style="{ marginTop: navigationHeight + 'px' }">
    <router-view />
  </main>
  <Footer />
</template>
