<script setup>
import { FooterComponent, HeaderComponent, SiderBarComponent } from '@/components'
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
