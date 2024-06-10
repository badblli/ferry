<template>
     <div>
       <!-- Modal -->
       <transition
         enter-active-class="transition-opacity duration-200"
         leave-active-class="transition-opacity duration-200"
         enter-class="opacity-0"
         leave-class="opacity-100"
       >
         <div
           v-if="hasContent"
           class="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
         >
           <div class="fixed inset-0 bg-gray-500 opacity-75" aria-hidden="true" @click="closeModal"></div>
           <div
             @click.self="closeModal"
             class="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full flex"
           >
             <!-- Left Part: Image -->
             <div class="w-1/2">
               <img :src="getImage(content.image.url)" alt="Image" class="w-full h-full object-cover" />
             </div>
             <!-- Right Part: Text -->
             <div class="w-1/2 p-4">
               <div class="mr-5 flex justify-end cursor-pointer" @click="closeModal">
                 <div class="w-[65px] h-[65px] bg-neutral-100 rounded-full flex flex-row justify-center items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                     <g id="vuesax/outline/add">
                       <g id="add">
                         <path id="Vector" d="M20.7128 21.7726L12.2275 13.2873C11.9376 12.9974 11.9376 12.5165 12.2275 12.2266C12.5174 11.9367 12.9982 11.9367 13.2881 12.2266L21.7734 20.7119C22.0633 21.0018 22.0633 21.4826 21.7734 21.7726C21.4835 22.0625 21.0027 22.0625 20.7128 21.7726Z" fill="#2B2B33" />
                         <path id="Vector_2" d="M12.2266 21.7726C11.9367 21.4826 11.9367 21.0018 12.2266 20.7119L20.7119 12.2266C21.0018 11.9367 21.4826 11.9367 21.7725 12.2266C22.0624 12.5165 22.0624 12.9974 21.7725 13.2873L13.2872 21.7726C12.9973 22.0625 12.5165 22.0625 12.2266 21.7726Z" fill="#2B2B33" />
                       </g>
                     </g>
                   </svg>
                 </div>
               </div>
               <!-- Modal Header -->
               <div class="bg-gray-50 mb-4 px-4 py-3 sm:px-6">
                 <template v-for="titleItem in content.title">
                   <h3 v-if="titleItem.type === 'paragraph'" :key="titleItem.children[0].text" class="text-lg font-medium leading-6 text-gray-900">{{ titleItem.children[0].text }}</h3>
                 </template>
                 <template v-for="subtitleItem in content.subtitle">
                   <p v-if="subtitleItem.type === 'paragraph'" :key="subtitleItem.children[0].text" class="mt-1 text-sm text-gray-500">{{ subtitleItem.children[0].text }}</p>
                 </template>
               </div>
               <!-- Modal Body -->
               <div class="px-4 py-5 sm:p-6">
                 <div class="text-lg">
                   <template v-for="descriptionItem in content.description">
                     <p v-if="descriptionItem.type === 'paragraph'" :key="descriptionItem.children[0].text">{{ descriptionItem.children[0].text }}</p>
                   </template>
                 </div>
               </div>
               <!-- Modal Footer -->
               <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                   <button @click="closeModal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Kapat</button>
                 </div> -->
             </div>
           </div>
         </div>
       </transition>
     </div>
   </template>
   
   <script setup lang="ts">
   import { defineEmits, ref } from 'vue'
   import { getImage } from '../../utils/globalHelper'
   
   const props = defineProps<{
     content: any[]
   }>()
   console.log(props.content, 'content')
   
   const hasContent = ref(false)
   if (props.content) {
     hasContent.value = true
   }
   const closeModal = () => {
     console.log('closeModal')
     // Perform any necessary actions before closing the modal
     // Emit the 'closeModal' event to notify the parent component
     emit('closeModal')
   }
   
   const emit = defineEmits(['closeModal'])
   </script>
   