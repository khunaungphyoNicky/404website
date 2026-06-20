<template>
  <section class="section-padding bg-slate-50">
    <div class="section-container">
      <SectionHeader
        label="Contact"
        title="Get in Touch"
        subtitle="Reach out to our team for support, plan activation, or general inquiries."
        centered
      />

      <div class="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div class="contact-card">
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
            <i class="fa-solid fa-map-location-dot text-brand-500 text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 mb-1">Location</h3>
            <p class="font-body text-slate-500 contact-box">Bangkok, Thailand</p>
          </div>
        </div>


        <a
          href="https://web.facebook.com/profile.php?id=61574606755793"
          target="_blank"
          class="contact-card group sm:col-span-2"
        >
          <div class="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
            <i class="fa-brands fa-facebook text-brand-500 text-xl"></i>
          </div>
          <div>
            <h3 class="font-bold text-slate-900 mb-1">Facebook</h3>
            <p class="font-body text-brand-500 contact-box group-hover:underline">Message us on Facebook for quick support</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'ContactPage',
  components: { SectionHeader },
}
</script>
