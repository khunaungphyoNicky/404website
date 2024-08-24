<template>
    <div>
        <div class="skills flex items-center gap-10 md:mt-20 mt-10 mb-10">
            <div class=" skills-box flex gap-3 items-center">
                <div @click="download" class="html flex cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                    <a href="https://www.dropbox.com/scl/fi/oab3q5ho0fiwbhhd9uza2/404VPN_1.1.3.apk?rlkey=8hogeu2jzwp5ltwgt7ez3nbmb&st=h9kczpia&dl=1">
                        <img class=" w-[200px] " src="../assets/apk-direct-download.png" alt="">
                    </a>
                </div>
                <ToastMine ref="toast" message="Downloading..." />
                <div @click="play" class="php flex cursor-pointer hover:translate-y-[-5px] duration-200 ease-in">
                    <a href="https://www.dropbox.com/scl/fi/oab3q5ho0fiwbhhd9uza2/404VPN_1.1.3.apk?rlkey=8hogeu2jzwp5ltwgt7ez3nbmb&st=h9kczpia&dl=1">
                        <img class=" w-[200px] " src="../assets/playstore.png" alt="">
                    </a>
                </div>
                <ToastMine ref="playstore" message="Currently 404 VPN is not available on playstore.Direct Downloading..." />
            </div>
        </div>
    </div>
</template>

<script>
import ToastMine from '@/components/ToastMine.vue'
export default {
    name: 'SkillPage',
    components: {
        ToastMine
    },
    methods: {
    download() {
      this.$refs.toast.showToast(); // Show toast on button click
    },
    play() {
      this.$refs.playstore.showToast(); // Show toast on button click
    }
  }
}
</script>

