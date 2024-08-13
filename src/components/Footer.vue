<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>

<template>
  <div
    class="pt-20 pb-5 flex flex-center flex-col-reverse gap-3 md:(pt-30 pb-10 flex-row gap-5) text-gray-70 lg:pt-50"
  >
    <div>CHANG-FENG WU © {{ year }}</div>
    <div class="flex gap-5">
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
  </div>
</template>
