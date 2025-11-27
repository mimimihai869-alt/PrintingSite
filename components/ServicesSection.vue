<script setup>
import { ref } from 'vue'

const sectionRef = ref(null)

// Extended services list - supports up to 11 different services
const services = [
  {
    id: 'business-cards',
    title: 'Cărți de Vizită',
    description: 'Print de calitate superioară pe diverse materiale și finisaje premium',
    image: '/images/business-cards.jpg'
  },
  {
    id: 'flyers',
    title: 'Flyere & Pliante',
    description: 'De la A6 la A3, diverse finisaje și tipuri de hârtie',
    image: '/images/flyers.jpg'
  },
  {
    id: 'brochures',
    title: 'Broșuri & Cataloage',
    description: 'Legătorie profesională, laminare și finisare de calitate',
    image: '/images/brochures.jpg'
  },
  {
    id: 'posters',
    title: 'Postere & Afișe',
    description: 'Format mare până la A0+, culori vibrante și rezistente',
    image: '/images/posters.jpg'
  },
  {
    id: 'banners',
    title: 'Bannere Outdoor',
    description: 'Print pe vinyl, mesh și materiale rezistente pentru exterior',
    image: '/images/banners.jpg'
  },
  {
    id: 'cad-plotting',
    title: 'Plotare CAD',
    description: 'A3 până la A0+, precizie maximă pentru proiecte tehnice',
    image: '/images/cad.jpg'
  },
  {
    id: 'stickers',
    title: 'Autocolante & Etichete',
    description: 'Diverse forme, dimensiuni și materiale - interior și exterior',
    image: '/images/stickers.jpg'
  },
  {
    id: 'rollups',
    title: 'Roll-up & Sisteme Expunere',
    description: 'Sisteme portabile pentru evenimente, târguri și prezentări',
    image: '/images/rollup.jpg'
  },
  {
    id: 'canvas',
    title: 'Tablouri Canvas',
    description: 'Print pe pânză pentru decorațiuni interioare premium',
    image: '/images/canvas.jpg'
  },
  {
    id: 'packaging',
    title: 'Ambalaje Personalizate',
    description: 'Cutii, pungi și soluții de ambalare cu design personalizat',
    image: '/images/packaging.jpg'
  },
  {
    id: 'clothing',
    title: 'Textile & Îmbrăcăminte',
    description: 'Print pe tricouri, șepci și alte textile personalizate',
    image: '/images/clothing.jpg'
  }
]

const navigateToService = (serviceId) => {
  // Navigate to services page with anchor to specific service
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
    <div class="px-8 md:px-16">
      <CarouselComponent :items="services" :visible-count="5" item-width="280px">
        <template #item="{ item }">
          <article
            class="group cursor-pointer h-full px-3"
            @click="navigateToService(item.id)"
          >
            <div
              class="aspect-[3/4] rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:brightness-105 group-hover:-translate-y-1"
              style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
            >
              <div class="w-full h-full flex items-center justify-center relative">
                <span
                  class="font-heading text-h4 text-center px-4"
                  style="color: var(--color-text-main)"
                >
                  {{ item.title }}
                </span>

                <!-- Hover Overlay -->
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-6 rounded-lg"
                  style="background-color: var(--color-accent-green)"
                >
                  <p
                    class="font-body text-p1 text-center font-semibold"
                    style="color: var(--color-bg-main)"
                  >
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </article>
        </template>
      </CarouselComponent>
    </div>
  </section>
</template>
