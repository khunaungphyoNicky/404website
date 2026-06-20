<template>
  <div>
    <!-- Pricing -->
    <section class="section-padding bg-white">
      <div class="section-container">
        <SectionHeader
          label="Pricing"
          title="Choose Your Plan"
          subtitle="Simple, transparent pricing. All plans include full server access and no ads."
          centered
        />

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8 items-start pt-4">
          <PricingCard
            v-for="plan in plans"
            :key="plan.name"
            v-bind="plan"
          />
        </div>
      </div>
    </section>

    <!-- Payment -->
    <section class="section-padding bg-slate-50">
      <div class="section-container">
        <SectionHeader
          label="Payment"
          title="Pay Easily with Thai Bank"
          subtitle="Transfer to our bank account and send us your receipt to activate your plan."
        />
        <div class="flex justify-center md:justify-start">
          <div class="rounded-2xl overflow-hidden shadow-card border border-slate-100 bg-white p-2">
            <img class="w-full max-w-[280px] rounded-xl" src="../assets/bank.jpg" alt="Thai bank payment details" />
          </div>
        </div>
      </div>
    </section>

    <!-- App screenshots -->
    <section class="section-padding bg-white">
      <div class="section-container">
        <SectionHeader
          label="App Interface"
          title="Simple, Clean Design"
          subtitle="Streamlined interface for quick connections and easy server switching."
          centered
        />
        <BoxPage />
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeader from '@/components/SectionHeader.vue'
import PricingCard from '@/components/PricingCard.vue'
import BoxPage from '@/components/BoxPage.vue'

const FEATURES = [
  'No Ads',
  'No need to add time',
  'Access to all servers',
  'Unlimited Bandwidth',
  'Reduced Battery Consumption',
]

export default {
  name: 'ProjectPage',
  components: { SectionHeader, PricingCard, BoxPage },
  data() {
    return {
      plans: [
        {
          name: 'Monthly',
          description: 'Flexible month-to-month access',
          price: '฿50',
          period: '/mo',
          features: FEATURES,
          featured: false,
        },
        {
          name: 'Quarterly',
          description: 'Best value for regular users',
          price: '฿150',
          period: '/3mo',
          features: FEATURES,
          featured: true,
        },
        {
          name: 'Semi-Annual',
          description: 'Maximum savings for power users',
          price: '฿250',
          period: '/6mo',
          features: FEATURES,
          featured: false,
        },
      ],
    }
  },
}
</script>
