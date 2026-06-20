<template>
  <section class="section-padding bg-slate-50">
    <div class="section-container">
      <SectionHeader
        label="About"
        title="Reliable VPN Security"
        subtitle="Free and premium plans designed to keep your browsing private, fast, and unrestricted."
        centered
      />

      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="feature-card">
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
            <i class="fa-solid fa-lock text-brand-500 text-xl"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-900 mb-2">Strong Encryption</h3>
          <p class="font-body text-slate-500 text-sm leading-relaxed">
            Your data stays protected with industry-standard encryption on every connection.
          </p>
        </div>
        <div class="feature-card">
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
            <i class="fa-solid fa-gauge-high text-brand-500 text-xl"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-900 mb-2">High-Speed Servers</h3>
          <p class="font-body text-slate-500 text-sm leading-relaxed">
            Premium plans unlock faster servers for streaming, gaming, and everyday browsing.
          </p>
        </div>
        <div class="feature-card">
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
            <i class="fa-solid fa-server text-brand-500 text-xl"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-900 mb-2">Global Server Network</h3>
          <p class="font-body text-slate-500 text-sm leading-relaxed">
            Access servers worldwide. Free plan includes essential locations; premium unlocks them all.
          </p>
        </div>
        <div class="feature-card">
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
            <i class="fa-solid fa-headset text-brand-500 text-xl"></i>
          </div>
          <h3 class="font-bold text-lg text-slate-900 mb-2">Priority Support</h3>
          <p class="font-body text-slate-500 text-sm leading-relaxed">
            Premium users get 24/7 priority support whenever you need help.
          </p>
        </div>
      </div>

      <div class="rounded-2xl bg-white border border-slate-100 p-8 md:p-10 shadow-card">
        <p class="font-body text-slate-600 text-base leading-relaxed about-content">
          As a versatile VPN, we offer both free and premium plans designed to meet your browsing needs.
          Our free plan provides essential features including unlimited bandwidth and access to a selection
          of global servers. The premium plan unlocks advanced options like high-speed servers, enhanced
          encryption, and 24/7 priority support — delivering a superior experience you can trust.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'AboutPage',
  components: { SectionHeader },
}
</script>
