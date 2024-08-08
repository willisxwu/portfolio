<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logo.svg'
import { useRouter } from 'vue-router'

interface INavigationItem {
  path: string
  name: string
}

const { currentRoute } = useRouter()
const navigationItems: INavigationItem[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/works',
    name: 'Works',
  },
]
const isHidden = ref(false)

let lastScrollTop = 0

const handleScroll = () => {
  const currentScrollTop = document.documentElement.scrollTop
  if (currentScrollTop > lastScrollTop) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
}

const getHeight = () => {
  const element = document.querySelector('.nav-container')
  return element ? element.clientHeight + 30 : 0
}

const emit = defineEmits<{
  (e: 'navigationHeight', value: number): void
}>()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  emit('navigationHeight', getHeight())
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="nav-container flex flex-center z-high"
    :class="[
      'fixed top-0 left-0 right-0 transition-transform',
      { 'translate-y-[-100%]': isHidden },
    ]"
  >
    <div
      class="mt-5 px-10 py-2.5 flex flex-center w-fit rounded-10 text-title-xl-lighter bg-white"
    >
      <router-link to="/" class="flex flex-center">
        <img :src="logo" class="w-10" alt="logo" />
      </router-link>
      <div
        class="mx-20 flex flex-center gap-10 text-black text-title-lg-lighter"
      >
        <router-link
          v-for="item in navigationItems"
          :to="item.path"
          class="trans-300 hover:scale-110"
          :class="{ 'text-bold ': currentRoute.path === item.path }"
          v-text="item.name"
        >
        </router-link>
        <div class="trans-300 hover:scale-110">Contact</div>
      </div>
    </div>
  </div>
</template>
