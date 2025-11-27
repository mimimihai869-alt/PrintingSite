<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from('.work-item', {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top 80%'
      }
    })
  }, sectionRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section
    id="work"
    ref="sectionRef"
    class="w-full py-16 md:py-24 relative overflow-hidden"
    style="background-color: var(--color-bg-alt)"
  >
    <!-- Subtle background pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, var(--color-accent-green) 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="mx-auto max-w-page px-4 relative z-10">
      <h2
        class="font-heading text-h2 md:text-h1 text-center mb-8"
        style="color: var(--color-text-main)"
      >
        Portofoliul Nostru
      </h2>
      <p class="font-body text-p1 text-center mb-12 max-w-2xl mx-auto" style="color: var(--color-text-muted)">
        Proiecte realizate cu pasiune și atenție la detalii
      </p>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
        <!-- Large card - spans 2x2 -->
        <article
          class="work-item group col-span-2 row-span-2 rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <!-- Animated Glow Border -->
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-8 min-h-[300px] md:min-h-[400px]">
            <span class="font-heading text-h3 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Proiect Principal
            </span>
          </div>
        </article>

        <!-- Medium card - spans 2x1 -->
        <article
          class="work-item group col-span-2 rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-6 min-h-[150px] md:min-h-[195px]">
            <span class="font-heading text-h4 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Bannere Exterior
            </span>
          </div>
        </article>

        <!-- Small cards - 1x1 -->
        <article
          class="work-item group rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-4 min-h-[150px] md:min-h-[195px]">
            <span class="font-heading text-h5 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Flyere
            </span>
          </div>
        </article>

        <article
          class="work-item group rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-4 min-h-[150px] md:min-h-[195px]">
            <span class="font-heading text-h5 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Cărți de Vizită
            </span>
          </div>
        </article>

        <!-- Tall card - 1x2 -->
        <article
          class="work-item group row-span-2 rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-6 min-h-[300px] md:min-h-[392px]">
            <span class="font-heading text-h4 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Roll-up Sisteme
            </span>
          </div>
        </article>

        <!-- Small card -->
        <article
          class="work-item group rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-4 min-h-[150px] md:min-h-[195px]">
            <span class="font-heading text-h5 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Ambalaje
            </span>
          </div>
        </article>

        <!-- Medium card - 2x1 -->
        <article
          class="work-item group col-span-2 rounded-2xl overflow-hidden cursor-pointer relative"
          style="background-color: var(--color-bg-main)"
        >
          <div class="portfolio-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative w-full h-full flex items-center justify-center p-6 min-h-[150px] md:min-h-[195px]">
            <span class="font-heading text-h4 text-center transition-all duration-300 group-hover:scale-110" style="color: var(--color-text-main)">
              Plotare CAD
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes portfolioGlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.portfolio-glow {
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-accent-green),
    #a8c99c,
    var(--color-accent-green),
    transparent
  );
  background-size: 200% 100%;
  filter: blur(10px);
  animation: portfolioGlow 3s linear infinite;
}

.work-item {
  position: relative;
  transition: all 0.3s ease;
}

.work-item::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-accent-green),
    #a8c99c,
    var(--color-accent-green),
    transparent
  );
  background-size: 200% 100%;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}

.group:hover.work-item::before {
  opacity: 1;
  animation: portfolioGlow 3s linear infinite;
}
</style>
