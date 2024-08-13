<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import logo from '../assets/logo.svg'
import { useRouter } from 'vue-router'
import { useBreakpoints } from '../hooks/useBreakpoints'

interface INavigationItem {
  path: string
  name: string
  mobileTitle: string
}

const navigationItems: INavigationItem[] = [
  {
    path: '/',
    name: 'Home',
    mobileTitle: "Willis's Portfolio",
  },
  {
    path: '/about',
    name: 'About',
    mobileTitle: 'About Willis',
  },
  {
    path: '/works',
    name: 'Works',
    mobileTitle: "Willis's Previous Works",
  },
]
const { currentRoute } = useRouter()
const { isMobile } = useBreakpoints()

const isActive = (path: string): boolean => {
  if (path === '/works') {
    return currentRoute.value.path.startsWith('/works')
  }
  return currentRoute.value.path === path
}
const isHidden = ref(false)

let lastScrollTop = 0

const handleScroll = () => {
  if (isMenuOpen.value) {
    return
  }

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
  const additionalHeight = isMobile.value ? 0 : 35

  return element ? element.clientHeight + additionalHeight : 0
}

const emit = defineEmits<{
  (e: 'navigationHeight', value: number): void
}>()
const updateNavigationHeight = () => {
  if (isMenuOpen.value) {
    return
  }

  emit('navigationHeight', getHeight())
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateNavigationHeight)
  updateNavigationHeight() // initial navigation height
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateNavigationHeight)
})

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(isMobile, (value: boolean) => {
  if (!value) {
    isMenuOpen.value = false
  }
})

const currentMobileTitle = computed(() => {
  const currentPath = currentRoute.value.path
  const matchedItem = navigationItems.find((item) => {
    if (item.path === '/works') {
      return currentPath.startsWith('/works')
    }
    return item.path === currentPath
  })
  return matchedItem ? matchedItem.mobileTitle : ''
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
    <!-- for tablet, desktop -->
    <div
      v-show="!isMobile"
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
          :key="item.path"
          :to="item.path"
          class="trans-300 hover:scale-120"
          :class="{ 'text-bold': isActive(item.path) }"
          v-text="item.name"
        >
        </router-link>
      </div>
    </div>
    <!-- for mobile -->
    <div v-show="isMobile" class="w-full">
      <div
        class="flex justify-between w-full bg-white border-b-(solid 1.5px gray-10)"
      >
        <router-link to="/" class="p-4 flex flex-center">
          <img :src="logo" class="w-6 aspect-ratio-1/1" alt="logo" />
        </router-link>
        <div class="flex justify-start items-center w-full">
          <span
            class="pl-4 text-(title-md gray-90) border-l-(solid 1.5px gray-10)"
            v-text="currentMobileTitle"
          ></span>
        </div>
        <img
          class="p-4 w-8 aspect-ratio-1/1"
          src="https://img.icons8.com/forma-regular-filled/100/2d2d2d/menu.png"
          alt="menu-icon"
          @click="toggleMenu"
        />
      </div>
      <div
        :class="[
          'relative w-full bg-white text-(banner-md gray-90) bg-opacity-50 backdrop-blur-2xl overflow-hidden transition-[max-height] duration-250 ease-in-out	z-high',
          isMenuOpen ? 'max-h-100vh' : 'max-h-0',
        ]"
      >
        <div class="px-19 pt-20 flex flex-col gap-10 h-100vh">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            v-text="item.name"
            @click="toggleMenu"
          >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
