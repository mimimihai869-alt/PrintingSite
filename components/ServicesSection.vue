<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)

// Use the same services as hero slideshow with images
const services = [
  {
    id: 'business-cards',
    title: 'Cărți de Vizită',
    description: 'Print de calitate superioară pe diverse materiale și finisaje premium',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=1000&fit=crop'
  },
  {
    id: 'flyers',
    title: 'Flyere & Pliante',
    description: 'De la A6 la A3, diverse finisaje și tipuri de hârtie',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1000&fit=crop'
  },
  {
    id: 'brochures',
    title: 'Broșuri & Cataloage',
    description: 'Legătorie profesională, laminare și finisare de calitate',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=1000&fit=crop'
  },
  {
    id: 'posters',
    title: 'Postere & Afișe',
    description: 'Format mare până la A0+, culori vibrante și rezistente',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop'
  },
  {
    id: 'banners',
    title: 'Bannere Outdoor',
    description: 'Print pe vinyl, mesh și materiale rezistente pentru exterior',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=1000&fit=crop'
  },
  {
    id: 'cad-plotting',
    title: 'Plotare CAD',
    description: 'A3 până la A0+, precizie maximă pentru proiecte tehnice',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=1000&fit=crop'
  },
  {
    id: 'stickers',
    title: 'Autocolante & Etichete',
    description: 'Diverse forme, dimensiuni și materiale - interior și exterior',
    image: 'https://images.unsplash.com/photo-1533003021-f1642856f0a9?w=800&h=1000&fit=crop'
  },
  {
    id: 'rollups',
    title: 'Roll-up & Sisteme Expunere',
    description: 'Sisteme portabile pentru evenimente, târguri și prezentări',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1000&fit=crop'
  },
  {
    id: 'canvas',
    title: 'Tablouri Canvas',
    description: 'Print pe pânză pentru decorațiuni interioare premium',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&h=1000&fit=crop'
  },
  {
    id: 'packaging',
    title: 'Ambalaje Personalizate',
    description: 'Cutii, pungi și soluții de ambalare cu design personalizat',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=1000&fit=crop'
  }
]

const navigateToService = (serviceId) => {
  navigateTo(`/servicii#${serviceId}`)
}

</script>

<template>
  <section
    id="services"
    ref="sectionRef"
    class="w-full py-16 md:py-24"
    style="background-color: var(--color-bg-main)"
  >
    <div class="mx-auto max-w-page px-6 md:px-8 mb-12">
      <h2
        class="font-heading text-h2 md:text-h1 text-center mb-4"
        style="color: var(--color-text-main)"
      >
        Serviciile Noastre
      </h2>
      <p
        class="font-body text-p1 md:text-[18px] text-center max-w-2xl mx-auto"
        style="color: var(--color-text-muted)"
      >
        Soluții complete de printare pentru orice nevoie - de la materiale promoționale la proiecte tehnice
      </p>
    </div>

    <!-- Services Carousel -->
    <div class="px-4 md:px-12 lg:px-16">
      <CarouselComponent :items="services" :visible-count="5" item-width="320px">
        <template #item="{ item }">
          <article
            class="group cursor-pointer h-full px-4"
            @click="navigateToService(item.id)"
          >
            <!-- Card with image background - bigger and cleaner -->
            <div class="service-card aspect-[3/4] rounded-xl overflow-hidden relative transition-all duration-500 group-hover:scale-105">
              <!-- Background Image -->
              <img
                :src="item.image"
                :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 rounded-xl"
              />

              <!-- Hover Overlay with Text -->
              <div
                class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center rounded-xl"
                style="background: linear-gradient(135deg, rgba(122, 143, 116, 0.95) 0%, rgba(122, 143, 116, 0.85) 100%)"
              >
                <h3
                  class="font-heading text-h4 mb-3 font-bold"
                  style="color: var(--color-bg-main)"
                >
                  {{ item.title }}
                </h3>
                <p
                  class="font-body text-p1"
                  style="color: var(--color-bg-main)"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </article>
        </template>
      </CarouselComponent>
    </div>
  </section>
</template>

<style scoped>
.service-card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.group:hover .service-card {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
