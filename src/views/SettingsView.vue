<template>
  <div>
    <section class="p-4 md:p-6 lg:p-8 flex-1">
      <div class="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-200">
        <h2 class="text-3xl font-bold mb-8" :style="titleStyles">
          Configuración Global de Estilos
        </h2>
        <div class="space-y-8">
          <div class="border-b pb-4 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-1" :style="titleStyles">Color de Fondo Global</h3>
              <p class="text-sm" :style="getGlobalTextClass">
                Afecta al área principal del dashboard.
              </p>
            </div>
            <input
              type="color"
              v-model="globalBgColor"
              class="w-16 h-10 p-1 border border-gray-300 rounded-lg cursor-pointer transition duration-150"
              @change="setGlobalBgClass"
            />
          </div>

          <div class="border-b pb-4 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-1" :style="titleStyles">Color de Texto Global</h3>
              <p class="text-sm" :style="getGlobalTextClass">
                Afecta al texto general de la aplicación.
              </p>
            </div>
            <input
              type="color"
              v-model="globalTextColor"
              class="w-16 h-10 p-1 border border-gray-300 rounded-lg cursor-pointer transition duration-150"
              @change="setGlobalTextClass"
            />
          </div>

          <div class="pb-4 flex items-center justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-1" :style="titleStyles">
                Color para los Títulos
              </h3>
              <p class="text-sm" :style="getGlobalTextClass">
                Sobrescribe el color de texto global en los títulos principales del contenido.
              </p>
            </div>
            <div class="flex justify-end space-x-4">
              <input
                type="color"
                v-model="contentTitleColor"
                class="w-16 h-10 p-1 border border-gray-300 rounded-lg cursor-pointer transition duration-150"
                @change="setContentTitleClass"
              />
              <button
                @click="clearTitle"
                class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out"
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/themeStore'

const spliter = (string) => {
  const elements = string.split(':')
  return elements[elements.length - 1]
}

const themeStore = useThemeStore()
const { getGlobalBgClass, getGlobalTextClass, getContentTitleClass } = storeToRefs(themeStore)

const titleStyles = computed(() => {
  return getContentTitleClass.value ? getContentTitleClass.value : getGlobalTextClass.value
})

const globalBgColor = ref(spliter(getGlobalBgClass.value))
const globalTextColor = ref(spliter(getGlobalTextClass.value))
const contentTitleColor = ref(
  getContentTitleClass.value ? spliter(getContentTitleClass.value) : '#FFFFFF',
)

const setGlobalBgClass = () => {
  themeStore.setGlobalBgClass(globalBgColor.value)
}

const setGlobalTextClass = () => {
  themeStore.setGlobalTextClass(globalTextColor.value)
}
const setContentTitleClass = () => {
  themeStore.setContentTitleClass(contentTitleColor.value)
}
const clearTitle = () => {
  themeStore.setContentTitleClass(null)
  contentTitleColor.value = '#FFFFFF'
}
</script>

<style lang="scss" scoped></style>
