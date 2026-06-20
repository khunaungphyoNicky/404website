<template>
  <div class="scroll-smooth bg-white">
    <!-- Mobile menu overlay -->
    <Transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-30 md:hidden"
        @click="closeMenu"
      />
    </Transition>

    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="mobile-menu fixed top-0 right-0 h-full w-[min(320px,85vw)] bg-white z-40 flex flex-col shadow-2xl md:hidden"
      >
        <div class="flex items-center justify-between p-6 border-b border-slate-100">
          <span class="font-bold text-lg text-slate-900 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-brand-500"></i>
            Boost VPN
          </span>
          <button class="text-2xl text-slate-500 hover:text-brand-500 transition-colors" @click="closeMenu">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav class="flex flex-col gap-1 p-4 flex-1">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            :class="['px-4 py-3 rounded-xl text-lg font-medium transition-colors', activeSection === link.id ? 'bg-brand-50 text-brand-500' : 'text-slate-700 hover:bg-slate-50']"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </nav>
        <div class="p-6 border-t border-slate-100">
          <a
            href="https://play.google.com/store/apps/details?id=com.boostvpn.net"
            target="_blank"
            class="btn-primary w-full text-center"
            @click="closeMenu"
          >
            <i class="fa-brands fa-google-play"></i>
            Download App
          </a>
        </div>
      </div>
    </Transition>

    <!-- Navbar -->
    <nav class="nav-bar fixed top-0 w-full z-20 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-6xl mx-auto h-[72px] px-6 flex items-center justify-between">
        <a href="#home" class="flex items-center gap-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-shield-halved text-white text-sm"></i>
          </div>
          <span class="font-bold text-lg text-slate-900">Boost VPN</span>
        </a>

        <div class="menu hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.href"
            :class="['nav-link', activeSection === link.id && 'nav-link-active']"
          >
            {{ link.label }}
          </a>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.boostvpn.net"
            target="_blank"
            class="nav-download btn-primary !py-2.5 !px-5 !text-sm hidden md:inline-flex"
          >
            <i class="fa-brands fa-google-play"></i>
            Download
          </a>
          <button class="bar md:hidden text-xl text-slate-700 hover:text-brand-500 transition-colors" @click="openMenu">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>

    <main>
      <HomePage id="home" />
      <AboutPage id="about" />
      <ProjectPage id="servers" />
      <ContactPage id="contact" />
    </main>

    <CopyRight />
  </div>
</template>

<script>
import HomePage from './views/HomePage.vue'
import AboutPage from './views/AboutPage.vue'
import ProjectPage from './views/ProjectPage.vue'
import ContactPage from './views/ContactPage.vue'
import CopyRight from './views/CopyRight.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    AboutPage,
    ProjectPage,
    ContactPage,
    CopyRight,
  },
  data() {
    return {
      menuOpen: false,
      activeSection: 'home',
      navLinks: [
        { id: 'home', href: '#home', label: 'Home' },
        { id: 'servers', href: '#servers', label: 'Pricing' },
        { id: 'about', href: '#about', label: 'About' },
        { id: 'contact', href: '#contact', label: 'Contact' },
      ],
    }
  },
  mounted() {
    const sections = ['home', 'about', 'servers', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  },
  methods: {
    openMenu() {
      this.menuOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeMenu() {
      this.menuOpen = false
      document.body.style.overflow = ''
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
