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
        <h1 class="text-xl font-semibold text-gray-800 hidden md:block">Dashboard Principal</h1>

        <div class="flex items-center space-x-4 ml-auto">
          <button class="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-bell"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.32 21a1.94 1.94 0 0 0 3.36 0" />
            </svg>
          </button>
          <img
            class="h-10 w-10 rounded-full object-cover cursor-pointer"
            src="https://placehold.co/100x100/A5B4FC/3730A3?text=JL"
            alt="Avatar de Usuario"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
