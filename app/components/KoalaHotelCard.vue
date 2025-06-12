<script setup lang="ts">
const hotel = {
  name: 'Hotel Okura Amsterdam',
  location: 'Ferdinand Bolstraat 333, Amsterdam',
  tags: ['rooftop pool', 'family-friendly', 'luxury'],
  featuredImage: '/images/hotel-with-pool.jpg',
  koalaPick: true,
  link: '/hotels/hotel-okura-amsterdam'
}
</script>

<template>
  <div class="rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-lg dark:bg-white/10 transition-all">
    <NuxtLink :to="hotel.link" class="block">
      <div class="relative">
        <img
          :src="hotel.featuredImage"
          alt="Hotel Image"
          class="w-full h-64 object-cover"
        />
        <div v-if="hotel.koalaPick" class="absolute top-2 left-2 bg-white dark:bg-black text-xs text-black dark:text-white px-3 py-1 rounded-full shadow flex items-center gap-1">
          <img src="/images/icon.svg" alt="Koala Icon" class="w-4 h-4" />
          Koala Pick
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-semibold text-highlighted">{{ hotel.name }}</h3>
        <p class="text-muted text-sm">{{ hotel.location }}</p>
        <div class="mt-2 flex flex-wrap gap-2">
          <span
            v-for="tag in hotel.tags"
            :key="tag"
            class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Optional: additional transitions or styles */
</style>