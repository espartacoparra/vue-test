<template>
  <div
    :class="{ 'translate-x-0': isOpen, '-translate-x-full': !isOpen }"
    class="fixed inset-y-0 left-0 transform transition duration-300 ease-in-out z-30 md:relative md:translate-x-0 md:flex md:flex-col w-64 bg-gray-800 text-white shadow-xl p-4"
  >
    <div class="flex justify-between items-center mb-6 pt-2">
      <h2 class="text-xl font-bold text-indigo-400">Admin Panel</h2>
      <button
        @click="closeSidebar"
        class="md:hidden text-white p-1 rounded-md hover:bg-gray-700 transition duration-150"
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
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>

    <nav class="flex flex-col space-y-2">
      <a
        v-for="item in navItems"
        :key="item.name"
        href="#"
        :class="{
          'bg-indigo-600 text-white shadow-md': item.active,
          'hover:bg-gray-700 text-gray-300': !item.active,
        }"
        class="flex items-center space-x-3 p-3 rounded-lg font-medium transition duration-150"
      >
        <span class="text-xl">{{ item.icon }}</span>
        <span>{{ item.name }}</span>
      </a>
    </nav>

    <div class="mt-auto">
      <p class="text-xs text-gray-500 mt-4">v1.0.0</p>
    </div>
  </div>

  <div
    v-if="isOpen"
    @click="closeSidebar"
    class="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
  ></div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
