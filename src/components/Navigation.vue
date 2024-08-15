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
        <router-link
          to="/"
          class="p-4 flex flex-center"
          @click="isMenuOpen = false"
        >
          <img :src="logo" class="w-6 aspect-ratio-1/1" alt="logo" />
        </router-link>
        <div class="flex justify-start items-center w-full">
          <span
            class="pl-4 text-(title-md gray-90) border-l-(solid 1.5px gray-10)"
            v-text="currentMobileTitle"
          ></span>
        </div>
        <div class="p-4 flex items-center">
          <div @click="toggleMenu" class="cursor-pointer flex flex-col gap-1.5">
            <div
              :class="[
                'w-8 h-0.5 bg-gray-90 rounded transition-transform duration-300 ease-in-out',
                isMenuOpen ? 'transform rotate-45 translate-y-2' : '',
              ]"
            ></div>
            <div
              :class="[
                'w-8 h-0.5 bg-gray-90 rounded transition-opacity duration-250 ease-in-out',
                isMenuOpen ? 'opacity-0' : '',
              ]"
            ></div>
            <div
              :class="[
                'w-8 h-0.5 bg-gray-90 rounded transition-transform duration-250 ease-in-out',
                isMenuOpen ? 'transform -rotate-45 -translate-y-2' : '',
              ]"
            ></div>
          </div>
        </div>
      </div>
      <div
        :class="[
          'w-full bg-white text-(banner-md gray-70) overflow-hidden transition-[max-height] duration-250 ease-in-out',
          isMenuOpen ? 'max-h-100vh' : 'max-h-0',
        ]"
      >
        <div class="px-15 py-20 h-100vh w-full flex flex-col gap-10">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            v-text="item.name"
            @click="toggleMenu"
          >
          </router-link>
          <a href="mailto:willisxwu@gmail.com">Contact</a>
          <div class="mt-10 flex gap-8">
            <a
              class="flex flex-center"
              href="https://www.linkedin.com/in/willisxwu/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/ios-filled/100/585858/linkedin.png"
                class="w-10"
                alt="linkedIn"
              />
            </a>
            <a
              class="flex flex-center"
              href="https://github.com/willisxwu"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/ios-filled/100/585858/github.png"
                class="w-10"
                alt="github-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
