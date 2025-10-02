<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SiderBarComponent from './components/SiderBarComponent.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <SiderBarComponent :is-open="isSidebarOpen" @close="closeSidebar" />

    <div class="flex flex-col flex-1 overflow-y-auto">
      <HeaderComponent />
      <RouterView />
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped></style>
