<template>
  <div>
    <header class="bg-white shadow-md p-4 sticky top-0 z-10">
      <div class="flex justify-between items-center">
        <button
          @click="toggleSidebar"
          class="md:hidden text-gray-600 hover:text-indigo-600 transition duration-150 p-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-800 hidden md:block">{{ pageName }}</h1>
      </div>
    </header>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const pageNames = [
  { name: 'Dashboard', icon: '📊', active: true, route: '/' },
  { name: 'Settings', icon: '⚙️', active: false, route: '/settings' },
]
const pageName = computed(() => {
  const path = route.path
  return pageNames.find((item) => item.route === path)?.name || 'Dashboard'
})
</script>

<style lang="scss" scoped></style>
