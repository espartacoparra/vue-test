<template>
  <div>
    <footer class="bg-white p-4 border-t border-gray-200 text-center">
      <p class="text-sm" :style="getGlobalTextClass">
        &copy; {{ new Date().getFullYear() }} Dashboard. Creado con Vue y Tailwind CSS.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()
const { getGlobalTextClass } = storeToRefs(themeStore)
</script>

<style lang="scss" scoped></style>
