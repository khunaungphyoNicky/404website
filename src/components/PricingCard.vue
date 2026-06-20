<template>
  <div
    :class="[
      'relative rounded-2xl border bg-white p-6 flex flex-col transition-all duration-300',
      featured
        ? 'border-brand-500 shadow-card-hover scale-[1.02] z-10'
        : 'border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1',
    ]"
  >
    <div
      v-if="featured"
      class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-500 text-white text-xs font-bold uppercase tracking-wide"
    >
      Most Popular
    </div>

    <div class="mb-6">
      <h3 class="text-lg font-bold text-slate-900">{{ name }}</h3>
      <p class="text-sm text-slate-500 mt-1">{{ description }}</p>
      <p class="mt-5">
        <span class="text-4xl font-bold text-slate-900 tracking-tight">{{ price }}</span>
        <span class="text-base font-medium text-slate-500 ml-1">{{ period }}</span>
      </p>
    </div>

    <ul class="space-y-3 flex-1 mb-8">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3">
        <i class="fa-solid fa-circle-check text-brand-500 mt-0.5 text-sm"></i>
        <span class="text-sm text-slate-600">{{ feature }}</span>
      </li>
    </ul>

    <a
      href="#contact"
      :class="featured ? 'btn-primary w-full text-center' : 'btn-outline w-full text-center'"
    >
      Get Started
    </a>
  </div>
</template>

<script>
export default {
  name: 'PricingCard',
  props: {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: String, required: true },
    period: { type: String, required: true },
    features: { type: Array, required: true },
    featured: { type: Boolean, default: false },
  },
}
</script>
