<script setup>
import { onMounted } from 'vue'

// Page meta
useHead({
  title: 'PrintCo - Servicii Profesionale de Printare'
})

// Ensure page starts at top on load
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div>
    <!-- Header -->
    <TheNavbar />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Main Content -->
    <main>
      <!-- Welcome Section -->
      <WelcomeSection />

      <!-- About Us -->
      <AboutSection />

      <!-- Our Services -->
      <ServicesSection />

      <!-- Our Work -->
      <WorkSection />

      <!-- Testimonials -->
      <TestimonialsSection />

      <!-- Contact Us -->
      <ContactSection />
    </main>

    <!-- Footer -->
    <TheFooter />
  </div>
</template>
