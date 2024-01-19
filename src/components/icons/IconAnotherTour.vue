<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: 'w-6 h-6',
    },
  },
}
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    :class="iconClass"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.73748 4.5C5.73748 4.18934 5.98932 3.9375 6.29998 3.9375H13.5C13.8107 3.9375 14.0625 4.18934 14.0625 4.5V11.7C14.0625 12.0107 13.8107 12.2625 13.5 12.2625C13.1893 12.2625 12.9375 12.0107 12.9375 11.7V5.858L4.89775 13.8977C4.67808 14.1174 4.32192 14.1174 4.10225 13.8977C3.88258 13.6781 3.88258 13.3219 4.10225 13.1023L12.142 5.0625H6.29998C5.98932 5.0625 5.73748 4.81066 5.73748 4.5Z"
      fill="white"
    />
  </svg>
</template>
