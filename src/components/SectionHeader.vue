<template>
  <div :class="['mb-12', centered ? 'text-center' : '']">
    <p class="text-brand-500 font-bold text-sm uppercase tracking-widest">{{ label }}</p>
    <h2 class="font-bold text-3xl md:text-4xl text-slate-900 mt-2">{{ title }}</h2>
    <p v-if="subtitle" class="font-body text-slate-500 text-lg mt-3 max-w-2xl" :class="centered ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: {
    label: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    centered: { type: Boolean, default: false },
  },
}
</script>
