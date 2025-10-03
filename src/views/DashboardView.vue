<template>
  <section class="p-4 md:p-6 lg:p-8 flex-1" :style="getGlobalTextClass">
    <h2 class="text-2xl font-bold mb-6" :style="titleStyles">Resumen General</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.id"
        :class="stat.bg"
        class="p-5 rounded-xl shadow-lg transition duration-300 hover:shadow-xl border border-gray-100"
      >
        <div class="flex justify-between items-start">
          <span :class="stat.color" class="text-4xl mr-3">{{ stat.icon }}</span>
          <h3 class="text-md font-medium" :style="getGlobalTextClass">
            {{ stat.title }}
          </h3>
        </div>
        <p class="text-3xl font-extrabold mt-2" :style="getGlobalTextClass">
          {{ stat.value }}
        </p>
        <p class="text-sm mt-1" :style="getGlobalTextClass">Comparado con el mes pasado</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg">
        <h3 class="text-xl font-semibold mb-4" :style="titleStyles">Métricas de Rendimiento</h3>
        <div class="placeholder h-80"></div>
      </div>

      <div class="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg">
        <h3 class="text-xl font-semibold mb-4" :style="titleStyles">Actividad Reciente</h3>
        <div class="placeholder h-80"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/themeStore'

const themeStore = useThemeStore()
const { getGlobalTextClass, getContentTitleClass } = storeToRefs(themeStore)
const titleStyles = computed(() => {
  return getContentTitleClass.value ? getContentTitleClass.value : getGlobalTextClass.value
})
const stats = ref([
  {
    id: 1,
    title: 'Usuarios Activos',
    value: '4,502',
    icon: '👤',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    id: 2,
    title: 'Ventas Hoy',
    value: '$1,250',
    icon: '💰',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    id: 3,
    title: 'Proyectos Pendientes',
    value: '14',
    icon: '📝',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    id: 4,
    title: 'Tasa de Éxito',
    value: '98%',
    icon: '✅',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
])
</script>

<style lang="scss" scoped></style>
