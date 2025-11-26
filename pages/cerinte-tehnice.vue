<script setup>
useHead({
  title: 'Cerințe Tehnice - PrintCo'
})
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- Technical Requirements Hero -->
      <section
        class="mx-auto max-w-page px-4 py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Cerințe Tehnice
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
          style="color: var(--color-text-muted)"
        >
          Specificații pentru fișiere și detalii de livrare
        </p>
      </section>

      <!-- Technical Details -->
      <section class="mx-auto max-w-page px-4 py-16">
        <div class="max-w-4xl mx-auto space-y-8">
          <article
            class="p-8 rounded-lg"
            style="background-color: var(--color-bg-alt)"
          >
            <h2 class="font-heading text-h3 mb-6" style="color: var(--color-text-main)">
              Fișiere Acceptate
            </h2>
            <ul class="font-body text-p1 space-y-2" style="color: var(--color-text-muted)">
              <li>• PDF (recomandat)</li>
              <li>• TIFF</li>
              <li>• JPEG</li>
              <li>• PNG</li>
            </ul>
          </article>

          <article
            class="p-8 rounded-lg"
            style="background-color: var(--color-bg-alt)"
          >
            <h2 class="font-heading text-h3 mb-6" style="color: var(--color-text-main)">
              Specificații Tehnice
            </h2>
            <div class="space-y-4 font-body text-p1" style="color: var(--color-text-muted)">
              <p><strong style="color: var(--color-text-main)">Rezoluție:</strong> Minim 300 DPI</p>
              <p><strong style="color: var(--color-text-main)">Bleed:</strong> 3mm obligatoriu</p>
              <p><strong style="color: var(--color-text-main)">Colorimetrie:</strong> CMYK 100%</p>
            </div>
          </article>

          <article
            class="p-8 rounded-lg"
            style="background-color: var(--color-bg-alt)"
          >
            <h2 class="font-heading text-h3 mb-6" style="color: var(--color-text-main)">
              Modalități de Trimitere
            </h2>
            <ul class="font-body text-p1 space-y-2" style="color: var(--color-text-muted)">
              <li>• Email</li>
              <li>• Formular de pe site</li>
              <li>• WhatsApp</li>
              <li>• WeTransfer / Google Drive</li>
              <li>• Stick USB la sediu</li>
            </ul>
          </article>

          <article
            class="p-8 rounded-lg border-l-4"
            style="background-color: var(--color-bg-alt); border-left-color: var(--color-accent-green)"
          >
            <h2 class="font-heading text-h3 mb-6" style="color: var(--color-text-main)">
              Livrare
            </h2>
            <p class="font-body text-p1 mb-4" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Zone de livrare:</strong> București, Ilfov, toată țara
            </p>
            <p class="font-body text-p1 mb-4" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Modalități:</strong> Curier, Livrare proprie, Ridicare din magazin
            </p>
            <p class="font-body text-p1" style="color: var(--color-text-muted)">
              <strong style="color: var(--color-text-main)">Livrare gratuită</strong> peste [X] RON
            </p>
          </article>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
