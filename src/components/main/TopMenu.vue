<template>
     <div>
          <TopMenuComponent :topMenu="topMenu" :tabView="tabAllIslandView" :languages="languages" :selectedLanguage="selectedLanguage" />
     </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/auth'
import { useLanguageStore } from '@/stores/language'
import TopMenuComponent from './TopMenu/TopMenuComponent.vue'
import { fetchData } from '@/utils/globalHelper'

interface Language {
     code: string
     name: string
}

interface Links {
     href: string
     id: number
     isExternal: boolean
     label: string
     target: string
}

interface TopMenuData {
     id: number
     links: Links[]
     title: string
}

const { locale } = useI18n()
const topMenu = ref<TopMenuData | any>([])
const languages = ref<Language[]>([])
const langStore = useLanguageStore()
const tabAllIslandView = ref([])
const userStore = useUserStore()
const selectedLanguage = ref(userStore.selectedLanguage)
const getTopMenu = async () => {
     try {
          const filters = {
               pageName: 'Home'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)

          if (res) {
               const data = res.data[0].layout
               topMenu.value = data.find((x: any) => x.__component === 'global.top-menu')
               languages.value = langStore.languages.map((item: { code: string; name: string }) => ({
                    code: item.code.toUpperCase(),
                    name: item.name.replace(/ \([^)]*\)/, '')
               }))
               tabAllIslandView.value = data.find((x: any) => x.__component === 'island-view.tab-all-island-view')?.TabDefinitions

               console.log('tabAllIslandView', tabAllIslandView.value)
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          getTopMenu()
     }
})

onMounted(() => {
     getTopMenu()
})

</script>
