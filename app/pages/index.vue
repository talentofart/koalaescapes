<script setup>
import { onMounted, ref } from 'vue'

const widgetRef = ref(null)

onMounted(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches

  const script = document.createElement('script')
  script.async = true
  script.src = isMobile
    ? 'https://c121.travelpayouts.com/content?trs=128430&shmarker=229948&lang=www&layout=S4279&powered_by=true&promo_id=4038'
    : 'https://c121.travelpayouts.com/content?trs=128430&shmarker=229948&lang=www&layout=S10391&powered_by=true&promo_id=4038'

  widgetRef.value.appendChild(script)
})
</script>

<template>
  <UContainer class="min-h-screen flex flex-col items-center justify-center text-center space-y-6">
    <div class="space-y-2">
      <img src="/images/logo.svg" class="block mx-auto w-70" />
      <!-- <h1 class="text-5xl font-bold text-primary-600">Koala Escapes</h1> -->
      <p class="mt-5 text-l text-neutral-700">
        Discover great places to stay — from cozy hotels to stunning villas, all around the world.
      </p>
      <p class="mt-5 text-l text-neutral-700">
        Coming soon..
      </p>
    </div>
    <UButton size="xl" color="primary" to="https://trip.tpk.ro/64BM1X9s" target="_blank" class="font-bold rounded-full text-white">
      Search Hotels
    </UButton>
    <img src="/images/icon.svg" class="block mx-auto w-18" />

    <!-- Startof Booking Engine -->
    <section class="w-full max-w-[320px] md:max-w-none mx-auto">
      <div ref="widgetRef" class="" />
    </section>
    <!-- Endof Booking Engine -->

    
    
  </UContainer>
</template>
