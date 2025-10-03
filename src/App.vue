<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SiderBarComponent from './components/SiderBarComponent.vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from './stores/themeStore'
import { getLocalStore } from './utils/localStorage'

const themeStore = useThemeStore()
const { getGlobalBgClass } = storeToRefs(themeStore)
const localStore = getLocalStore()
themeStore.init(localStore)
</script>

<template>
  <div class="flex h-screen" :style="getGlobalBgClass">
    <SiderBarComponent />

    <div class="flex flex-col flex-1 overflow-y-auto">
      <HeaderComponent />
      <RouterView class="h-full" />
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped></style>
