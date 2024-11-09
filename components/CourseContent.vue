<template>
    <div class="flex gap-4">
      <i :class="iconClass"></i>
      <p>{{ text }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      iconClass: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }

    }
  }
  </script>
  