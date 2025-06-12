<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, useHead } from '#imports'

// Route params
const route = useRoute()
const router = useRouter()
const citySlug = route.params.citySlug
const hotelSlug = route.params.hotelSlug

// Data refs
const city = ref(null)
const hotel = ref(null)
const loading = ref(true)
const error = ref(null)

async function loadData() {
  try {
    // Load city data
    const cityRes = await fetch(`/data/cities/${citySlug}/overview.json`)
    if (!cityRes.ok) throw new Error('City not found')
    city.value = await cityRes.json()

    // Load hotels list for city
    const hotelsRes = await fetch(`/data/cities/${citySlug}/hotels.json`)
    if (!hotelsRes.ok) throw new Error('Hotels not found')
    const hotelsList = await hotelsRes.json()

    // Find specific hotel by slug
    const foundHotel = hotelsList.find(h => h.slug === hotelSlug)
    if (!foundHotel) throw new Error('Hotel not found')
    hotel.value = foundHotel

    // Set SEO head tags
    useHead({
      title: `${hotel.value.name} – Hotels in ${city.value.city} | Koala Escapes`,
      meta: [
        { name: 'description', content: hotel.value.description },
        { property: 'og:title', content: hotel.value.name },
        { property: 'og:description', content: hotel.value.description },
        { property: 'og:image', content: hotel.value.image }
      ]
    })
  } catch (e) {
    error.value = e.message
    // Redirect or handle error here
    // router.push('/')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <UNuxtUiLoader v-if="loading" label="Loading hotel details..." />

    <div v-else-if="error" class="text-center text-red-600 font-semibold">
      {{ error }}
    </div>

    <div v-else>
      <UCard rounded="xl" shadow="lg" class="overflow-hidden">
        <UCardSection>
          <img
            :src="hotel.image"
            :alt="hotel.name"
            class="w-full h-64 object-cover rounded-xl"
            loading="lazy"
          />
        </UCardSection>

        <UCardSection>
          <h1 class="text-3xl font-bold mb-2 text-primary">{{ hotel.name }}</h1>
          <p class="text-neutral-600 mb-4">Located in {{ city.city }}</p>
          <p class="mb-6 leading-relaxed">{{ hotel.description }}</p>

          <UButton
            color="primary"
            size="lg"
            rounded="xl"
            :href="hotel.affiliateUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </UButton>
        </UCardSection>
      </UCard>
    </div>
  </div>
</template>
