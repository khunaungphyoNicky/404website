<template>
  <Transition name="toast">
    <div
      v-if="visible"
      class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-medium shadow-2xl"
    >
      <i class="fa-solid fa-circle-check text-brand-500"></i>
      {{ message }}
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    message: { type: String, default: 'Done!' },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showToast() {
      this.visible = true
      setTimeout(() => {
        this.visible = false
      }, 2500)
    },
  },
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 16px);
}
</style>
