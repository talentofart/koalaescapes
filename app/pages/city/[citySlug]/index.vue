<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const citySlug = route.params.citySlug

const city = ref(null)
const hotels = ref([])
const loading = ref(true)
const error = ref(null)

async function loadCityData() {
  try {
    const cityRes = await fetch(`/data/cities/${citySlug}/overview.json`)
    if (!cityRes.ok) throw new Error('City not found')
    city.value = await cityRes.json()

    const hotelsRes = await fetch(`/data/cities/${citySlug}/hotels.json`)
    hotels.value = hotelsRes.ok ? await hotelsRes.json() : []
  } catch (e) {
    error.value = e.message
    router.push('/') // redirect home if city not found
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadCityData()
})
</script>

<template>
  <div class="max-w-5xl mx-auto p-4">
    <UNuxtUiLoader v-if="loading" label="Loading city info..." />

    <div v-else>
      <UCard v-if="city" rounded="lg" shadow="lg" class="mb-6">
        <UCardSection>
          <h1 class="text-4xl font-bold text-primary mb-4">{{ city.city }}</h1>
          <img
            :src="city.image"
            :alt="`${city.city} banner`"
            class="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <p class="mt-4 text-lg text-neutral/90">{{ city.intro }}</p>
        </UCardSection>
      </UCard>

      <h2 class="text-2xl font-semibold mb-6">Hotels in {{ city?.city }}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <UCard
          v-for="hotel in hotels"
          :key="hotel.slug"
          rounded="lg"
          shadow="md"
          class="cursor-pointer hover:shadow-lg transition"
          @click="router.push(`/city/${citySlug}/hotel/${hotel.slug}`)"
        >
          <UCardSection>
            <img
              :src="hotel.image"
              :alt="hotel.name"
              class="w-full h-40 object-cover rounded-t-lg"
              loading="lazy"
            />
          </UCardSection>
          <UCardSection>
            <h3 class="text-xl font-semibold">{{ hotel.name }}</h3>
            <p class="text-neutral mt-2 line-clamp-3">{{ hotel.description }}</p>
            <UButton
              color="primary"
              size="sm"
              class="mt-4 rounded"
              @click.stop="window.open(hotel.affiliateUrl, '_blank')"
            >
              Book Now
            </UButton>
          </UCardSection>
        </UCard>
      </div>
    </div>
  </div>
</template>
