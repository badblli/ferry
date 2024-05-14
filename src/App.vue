<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>


<style>
input.appearance-none.bg-transparent.border-none.custom-placeholder.text-gray-700 {
  box-shadow: none;
  border: none;
}

input.appearance-none.bg-transparent.border-none.w-full.text-gray-700.mr-3.py-1.px-2.leading-tight {
  box-shadow: none;
}

.vue-tel-input{
  border:none;
  border-bottom: 1px solid #cccc;
  margin-bottom: 40px;
  flex-direction: row-reverse;
}

.vti__dropdown-list {
    z-index: 1;
    padding: 0;
    margin: 0;
    text-align: left;
    list-style: none;
    max-height: 200px;
    overflow-y: scroll;
    position: absolute;
    /* left: -1px; */
    right: 1px;
    background-color: #fff;
    border: 1px solid #ccc;
    width: 380px;
}

.vti__dropdown-list.below {
    top: 43px;
    left: revert-layer;
}

::-webkit-scrollbar {
  width: 3px;
  height: 52px;
  background-color: #E8E8E8;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #E8E8E8; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #2149D5; 
  border-radius: 10px;
  height: 52px;
}

.vti__dropdown-item.highlighted {
    background-color: #E4EEF3;
    border-radius: 10px;
}

.vti__dropdown-item {
    cursor: pointer;
    margin-left: 20px;
    margin-right: 10px;
    padding: 6px 14px;
    margin-top: 5px;
}

.vue-tel-input::placeholder {
  font-size: 36px; /* Placeholder font boyutunu yükselt */
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
} */

</style>