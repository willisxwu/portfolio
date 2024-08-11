<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <div class="pt-50 pb-5 flex flex-center gap-5 text-gray-70">
    <div>CHANG-FENG WU © {{ year }}</div>
    <a href="mailto:willisxwu@gmail.com">Contact</a>
    <a
      class="flex flex-center"
      href="https://www.linkedin.com/in/willisxwu/"
      target="_blank"
    >
      <img
        src="https://img.icons8.com/ios-filled/100/585858/linkedin.png"
        class="w-5"
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
        class="w-5"
        alt="github-icon"
      />
    </a>
  </div>
</template>
