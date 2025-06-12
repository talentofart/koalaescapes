<script setup lang="ts">
import { ref } from 'vue'

const destination = ref('')
const date = ref<[Date, Date]>()
</script>

<template>
  <section class="relative bg-cover bg-center h-[80vh] flex items-center justify-center" style="background-image: url('/images/hero/cover.jpg')">
    <div class="bg-black/50 backdrop-blur-sm rounded-xl p-6 text-center text-white max-w-xl w-full">
      <h1 class="text-3xl md:text-5xl font-bold mb-4">Find Your Dream Hotel with Koala Escapes 🐨</h1>
      <p class="mb-6 text-lg text-white/80">Explore the most beautiful cities in the world — one cozy escape at a time.</p>

      <!-- Booking Engine -->
      <div class="grid md:grid-cols-3 gap-2 bg-white text-black rounded-xl p-4 shadow-lg">
        <UInput
          v-model="destination"
          icon="i-lucide-map-pin"
          placeholder="Enter destination"
          size="lg"
          class="md:col-span-1"
        />
        <UInputDateRange
          v-model="date"
          icon="i-lucide-calendar"
          placeholder="Select dates"
          size="lg"
          class="md:col-span-1"
        />
        <UButton
          size="lg"
          icon="i-lucide-search"
          class="md:col-span-1 w-full"
          color="primary"
        >
          Find Stays
        </UButton>
      </div>
    </div>
  </section>
</template>
