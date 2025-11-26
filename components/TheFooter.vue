<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="px-4 py-12"
    style="background-color: var(--color-text-main); color: var(--color-bg-main)"
  >
    <div class="mx-auto max-w-page">
      <div class="grid md:grid-cols-3 gap-12 mb-8">
        <!-- Company Info -->
        <div>
          <h3 class="font-heading text-h5 mb-4" style="color: var(--color-bg-main)">
            PrintCo
          </h3>
          <p class="font-body text-p2 opacity-80">
            Servicii profesionale de printare<br>
            pentru afaceri și evenimente
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-heading text-h6 mb-4" style="color: var(--color-bg-main)">
            Link-uri Rapide
          </h3>
          <ul class="space-y-2 font-body text-p2">
            <li><a href="#services" class="hover:opacity-70 transition-opacity">Servicii</a></li>
            <li><a href="#about" class="hover:opacity-70 transition-opacity">Despre Noi</a></li>
            <li><a href="#work" class="hover:opacity-70 transition-opacity">Portofoliu</a></li>
            <li><a href="#contact" class="hover:opacity-70 transition-opacity">Contact</a></li>
          </ul>
        </div>

        <!-- Legal Info -->
        <div>
          <h3 class="font-heading text-h6 mb-4" style="color: var(--color-bg-main)">
            Informații Legale
          </h3>
          <p class="font-body text-p3 opacity-80">
            SC PrintCo SRL<br>
            CUI: RO XXXXXXXX<br>
            J40/XXX/2024<br>
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t pt-8 text-center font-body text-p3 opacity-70" style="border-color: var(--color-border)">
        <p>&copy; {{ currentYear }} PrintCo. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
</template>
