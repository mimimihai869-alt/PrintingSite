<script setup>
useHead({
  title: 'Despre Noi - PrintCo'
})
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- Company Hero -->
      <section
        class="mx-auto max-w-page px-4 py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Despre PrintCo
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
          style="color: var(--color-text-muted)"
        >
          Print de calitate, livrat rapid
        </p>
      </section>

      <!-- Company Information -->
      <section class="mx-auto max-w-page px-4 py-16">
        <div class="max-w-4xl mx-auto space-y-12">
          <article>
            <h2 class="font-heading text-h2 mb-6" style="color: var(--color-text-main)">
              Povestea Noastră
            </h2>
            <p class="font-body text-p1 mb-4" style="color: var(--color-text-muted)">
              [Când a fost fondată compania și de ce]
            </p>
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              [Servicii principale oferite]
            </p>
          </article>

          <article>
            <h2 class="font-heading text-h2 mb-6" style="color: var(--color-text-main)">
              Ce Ne Diferențiază
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div
                class="p-6 rounded-lg"
                style="background-color: var(--color-bg-alt)"
              >
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-accent-green)">
                  Timp de Execuție Rapid
                </h3>
                <p class="font-body text-p2" style="color: var(--color-text-muted)">
                  Livrăm majoritatea proiectelor în 24-48 ore
                </p>
              </div>

              <div
                class="p-6 rounded-lg"
                style="background-color: var(--color-bg-alt)"
              >
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-accent-green)">
                  Calitate Superioară
                </h3>
                <p class="font-body text-p2" style="color: var(--color-text-muted)">
                  Echipamente moderne și control strict al calității
                </p>
              </div>

              <div
                class="p-6 rounded-lg"
                style="background-color: var(--color-bg-alt)"
              >
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-accent-green)">
                  Experiență de X Ani
                </h3>
                <p class="font-body text-p2" style="color: var(--color-text-muted)">
                  Mii de proiecte realizate cu succes
                </p>
              </div>

              <div
                class="p-6 rounded-lg"
                style="background-color: var(--color-bg-alt)"
              >
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-accent-green)">
                  Echipamente Moderne
                </h3>
                <p class="font-body text-p2" style="color: var(--color-text-muted)">
                  Tehnologie de ultimă generație
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
