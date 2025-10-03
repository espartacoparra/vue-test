import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { setlocalStore } from '../utils/localStorage'

const hexRegex = /^#?([0-9A-F]{3}){1,2}$/i

const isValidHexColor = (colorString) => {
  return hexRegex.test(colorString)
}

const defaultValues = {
  globalBgClass: 'background :#C0BFBC',
  globalTextClass: 'color :#3D3846',
  contentTitleClassa: 'color :#613583',
}

export const useThemeStore = defineStore('theme', () => {
  const globalBgClass = ref(defaultValues.globalBgClass)
  const globalTextClass = ref(defaultValues.globalTextClass)
  const contentTitleClass = ref(defaultValues.contentTitleClass)

  const getGlobalBgClass = computed(() => globalBgClass.value)
  const getGlobalTextClass = computed(() => globalTextClass.value)
  const getContentTitleClass = computed(() => contentTitleClass.value)

  function setGlobalBgClass(value) {
    console.log(value)

    globalBgClass.value = `background :${isValidHexColor(value) ? value : globalBgClass.value}`
  }
  function setGlobalTextClass(value) {
    globalTextClass.value = `color :${isValidHexColor(value) ? value : globalTextClass.value}`
  }
  function setContentTitleClass(value) {
    if (value) {
      contentTitleClass.value = `color :${isValidHexColor(value) ? value : contentTitleClass.value}`
      return
    }
    contentTitleClass.value = null
  }

  function init(data) {
    if (data) {
      const {
        localGlobalBgClass = defaultValues.globalBgClass,
        localGlobalTextClass = defaultValues.globalTextClass,
        localContentTitleClass = defaultValues.contentTitleClass,
      } = data
      globalBgClass.value = localGlobalBgClass
      globalTextClass.value = localGlobalTextClass
      contentTitleClass.value = localContentTitleClass
    }
  }
  watch([globalBgClass, globalTextClass, contentTitleClass], () => {
    setlocalStore({
      localGlobalBgClass: globalBgClass.value,
      localGlobalTextClass: globalTextClass.value,
      localContentTitleClass: contentTitleClass.value,
    })
  })
  return {
    init,
    getGlobalBgClass,
    getGlobalTextClass,
    getContentTitleClass,
    setGlobalBgClass,
    setGlobalTextClass,
    setContentTitleClass,
  }
})
