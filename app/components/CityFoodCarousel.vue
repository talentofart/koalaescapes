<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface FoodSpot {
  name: string
  slug: string
  story: string
  location: string
  featuredImage: string
  foodImage: string
  tags: string[]
}

const items = ref<FoodSpot[]>([])

async function loadFoodSpots() {
  try {
    const res = await fetch('/data/cities/amsterdam/food.json')
    if (!res.ok) throw new Error('Failed to load food spots')
    items.value = await res.json()
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  loadFoodSpots()
})
</script>

<template>
  <div class="max-w-7xl mx-auto p-4">
    <h2 class="text-3xl font-semibold mb-6">Top 10 Authentic Food Spots in Amsterdam</h2>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      arrows
      class="max-w-full"
      :ui="{
        item: 'basis-[22%] min-w-[220px] mx-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
      }"
    >
      <img
          :src="item.featuredImage"
          :alt="item.name + ' location'"
          class="w-full h-48 object-cover"
          loading="lazy"
        />
    </UCarousel>
  </div>
</template>