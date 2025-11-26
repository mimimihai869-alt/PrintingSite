<script setup>
import { ref, onMounted } from 'vue'

// Page meta
useHead({
  title: 'Printing Company - Professional Print Services'
})
</script>

<template>
  <div>
    <TheNavbar />
    <HeroSection />
    <main>
      <!-- Button Demo Section -->
      <section
        id="services"
        class="mx-auto max-w-page px-4 py-24"
        style="background-color: var(--color-bg-main)"
      >
        <h2
          class="font-heading text-h2 text-center mb-12"
          style="color: var(--color-text-main)"
        >
          Serviciile Noastre
        </h2>

        <div class="flex flex-wrap items-center justify-center gap-6">
          <BaseButton label="Cărți de vizită" @click="() => console.log('Clicked!')" />
          <BaseButton label="Flyere & Pliante" size="large" />
          <BaseButton label="Se încarcă..." :loading="true" />
          <BaseButton label="Dezactivat" :disabled="true" />
          <BaseButton size="small">
            <span>Contactează-ne</span>
          </BaseButton>
        </div>

        <div class="mt-16 text-center">
          <p
            class="font-body text-p1 mb-6"
            style="color: var(--color-text-muted)"
          >
            Explorează gama completă de servicii de printare
          </p>
          <BaseButton label="Vezi toate serviciile" size="large" />
        </div>
      </section>

      <!-- Service sections will go here -->
    </main>
  </div>
</template>
