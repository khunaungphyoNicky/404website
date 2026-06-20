<template>
  <div class="download-badges flex gap-4 items-center">
    <a
      href="https://play.google.com/store/apps/details?id=com.boostvpn.net"
      target="_blank"
      class="hover:-translate-y-1 transition-transform duration-200"
      @click="showPlayToast"
    >
      <img class="w-[180px] sm:w-[200px]" src="../assets/testt.webp" alt="Get it on Google Play" />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.boostvpn.net"
      target="_blank"
      class="hover:-translate-y-1 transition-transform duration-200"
      @click="showApkToast"
    >
      <img class="w-[180px] sm:w-[200px]" src="../assets/apk-direct-download.png" alt="Direct APK download" />
    </a>
    <ToastMine ref="playToast" message="Opening download..." />
    <ToastMine ref="apkToast" message="Opening download..." />
  </div>
</template>

<script>
import ToastMine from '@/components/ToastMine.vue'

export default {
  name: 'SkillPage',
  components: { ToastMine },
  methods: {
    showPlayToast() {
      this.$refs.playToast.showToast()
    },
    showApkToast() {
      this.$refs.apkToast.showToast()
    },
  },
}
</script>
