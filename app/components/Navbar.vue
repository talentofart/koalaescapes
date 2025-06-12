<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const citySlugs = ['amsterdam', 'paris', 'new-york']
const cities = ref<any[]>([])

async function loadCities() {
  const data = await Promise.all(
    citySlugs.map(async (slug) => {
      const res = await fetch(`/data/cities/${slug}/overview.json`)
      if (!res.ok) return null
      return await res.json()
    })
  )
  cities.value = data.filter(Boolean)
}

onMounted(() => {
  loadCities()
})

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Cities',
    slot: 'cities' as const,
    children: cities.value.map(city => ({
      label: city.city,
      description: city.tagline || city.intro,
      image: city.image,
      slug: city.city.toLowerCase().replace(/\s+/g, '-')
    }))
  },
  {
    label: 'About Us',
    to: '/about'
  }
])

function goToCity(slug: string) {
  router.push(`/city/${slug}`)
}
</script>


<template>
    <nav class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <!-- Logo Left -->
    <div class="flex items-center cursor-pointer" @click="router.push('/')">
      <img src="/images/logo.svg" alt="Koala Escapes Logo" class="h-20 w-auto" />
      <!-- Or use text instead:
      <span class="text-2xl font-bold text-primary ml-2">Koala Escapes</span>
      -->
    </div>

    <!-- Navigation menu Right -->
    <UNavigationMenu :items="items" class="w-full justify-end">
    <template #cities-content>
      <ul class="grid grid-cols-3 gap-4 p-4">
        <UCard
          v-for="city in cities"
          :key="city.city"
          rounded="lg"
          shadow="md"
          class="cursor-pointer hover:shadow-xl transition"
          @click="goToCity(city.city.toLowerCase().replace(/\s+/g, '-'))"
        >
          <template #header>
            <img
              :src="city.image"
              :alt="city.city + ' image'"
              class="rounded-t-2xl w-full h-33 object-cover"
              loading="lazy"
            />
          </template>
          <template #default>
            <div class="p-3">
              <h3 class="text-lg font-semibold">{{ city.city }}</h3>
              <p class="text-sm text-neutral-600 line-clamp-3">{{ city.tagline || city.intro }}</p>
            </div>
          </template>
        </UCard>
      </ul>
    </template>
  </UNavigationMenu>
  </nav>

  
</template>

