import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { setlocalStore } from '../utils/localStorage'

const hexRegex = /^#?([0-9A-F]{3}){1,2}$/i

const isValidHexColor = (colorString) => {
  return hexRegex.test(colorString)
}

const DEFAULT_GLOBAL_BG_CLASS = 'background :#C0BFBC'
const DEFAULT_GLOBAL_TEXT_CLASS = 'color :#3D3846'
const DEFAULT_CONTENT_TITLE_CLASS = 'color :#613583'

export const useThemeStore = defineStore('theme', () => {
  const globalBgClass = ref(DEFAULT_GLOBAL_BG_CLASS)
  const globalTextClass = ref(DEFAULT_GLOBAL_TEXT_CLASS)
  const contentTitleClass = ref(DEFAULT_CONTENT_TITLE_CLASS)

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
        localGlobalBgClass = DEFAULT_GLOBAL_BG_CLASS,
        localGlobalTextClass = DEFAULT_GLOBAL_TEXT_CLASS,
        localContentTitleClass = DEFAULT_CONTENT_TITLE_CLASS,
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
