<script setup>
useHead({
  title: 'Servicii - PrintCo'
})
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- Services Hero -->
      <section
        class="w-full py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <div class="mx-auto max-w-page px-4">
          <h1
            class="font-heading text-h1 md:text-[60px] text-center mb-6"
            style="color: var(--color-text-main)"
          >
            Serviciile Noastre Complete
          </h1>
          <p
            class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
            style="color: var(--color-text-muted)"
          >
            Gamă completă de soluții de printare profesională pentru orice nevoie
          </p>
        </div>
      </section>

      <!-- Detailed Services List -->
      <section class="mx-auto max-w-page px-4 py-16">
        <div class="space-y-12">
          <!-- Service Item Template -->
          <article
            class="group p-8 rounded-lg border-l-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            style="background-color: var(--color-bg-alt); border-left-color: var(--color-accent-green)"
          >
            <h2 class="font-heading text-h3 mb-4" style="color: var(--color-text-main)">
              Cărți de Vizită
            </h2>
            <p class="font-body text-p1 mb-6" style="color: var(--color-text-muted)">
              Print de calitate superioară pe diverse tipuri de materiale și finisaje.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 class="font-heading text-h6 mb-3" style="color: var(--color-text-main)">
                  Materiale Disponibile
                </h3>
                <ul class="font-body text-p2 space-y-2" style="color: var(--color-text-muted)">
                  <li>• Hârtie 300g/mp</li>
                  <li>• Hârtie texturată</li>
                  <li>• Carton plastifiat</li>
                </ul>
              </div>

              <div>
                <h3 class="font-heading text-h6 mb-3" style="color: var(--color-text-main)">
                  Finisaje
                </h3>
                <ul class="font-body text-p2 space-y-2" style="color: var(--color-text-muted)">
                  <li>• Mat sau lucios</li>
                  <li>• UV spot</li>
                  <li>• Laminare</li>
                </ul>
              </div>
            </div>

            <BaseButton label="Solicită Ofertă" />
          </article>

          <!-- More service items will be added with real data -->
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
