<template>
  <section class="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-slate-50"></div>
    <div class="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl"></div>

    <div class="section-container relative z-10 py-16 md:py-24 px-6">
      <div class="hero-grid flex items-center gap-12 lg:gap-20">
        <!-- Text -->
        <div class="flex-1 max-w-xl">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-sm font-medium mb-6">
            <i class="fa-solid fa-bolt text-xs"></i>
            Fast &amp; Secure VPN
          </div>

          <h1 class="font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight hero-title">
            Privacy Without
            <span class="text-brand-500"> Limits</span>
          </h1>

          <p class="font-body text-slate-500 text-lg mt-6 leading-relaxed hero-content">
            Boost VPN delivers high-speed performance and top-tier privacy protection.
            Browse freely with encrypted connections and global server access.
          </p>

          <div class="hero-ctas flex flex-wrap gap-4 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.boostvpn.net"
              target="_blank"
              class="btn-primary"
            >
              <i class="fa-brands fa-google-play text-lg"></i>
              Get on Google Play
            </a>
            <a href="#servers" class="btn-outline">
              View Plans
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          <div class="trust-badges flex flex-wrap gap-6 mt-10 pt-8 border-t border-slate-200">
            <div v-for="badge in trustBadges" :key="badge.label" class="flex items-center gap-2 text-sm text-slate-600">
              <i :class="['fa-solid', badge.icon, 'text-brand-500']"></i>
              <span>{{ badge.label }}</span>
            </div>
          </div>
        </div>

        <!-- App image -->
        <div class="flex-shrink-0 flex flex-col items-center gap-8">
          <div class="relative">
            <div class="absolute inset-0 bg-brand-500/10 rounded-full blur-2xl scale-110"></div>
            <div class="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] home-img">
              <img
                class="w-full h-full object-cover rounded-full hero_image shadow-2xl shadow-brand-500/20 ring-4 ring-white"
                src="../assets/maintest.png"
                alt="Boost VPN app"
              />
            </div>
          </div>

          <SkillPage />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillPage from '@/components/SkillPage.vue'

export default {
  name: 'HomePage',
  components: { SkillPage },
  data() {
    return {
      trustBadges: [
        { icon: 'fa-shield-halved', label: 'Military-grade encryption' },
        { icon: 'fa-gauge-high', label: 'Unlimited bandwidth' },
        { icon: 'fa-globe', label: 'Global servers' },
      ],
    }
  },
}
</script>
