<template>
    <div v-if="visible" class="toast">
      {{ message }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['message'],
    data() {
      return {
        visible: false
      };
    },
    methods: {
      showToast() {
        this.visible = true;
        setTimeout(() => {
          this.visible = false;
        }, 3000); // 3 seconds duration
      }
    }
  };
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
  }
  </style>
  