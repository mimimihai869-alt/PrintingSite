<script setup>
import { businessInfo, getLocalBusinessSchema } from '~/utils/businessInfo'

// Add LocalBusiness structured data
useHead({
  title: `Contact - ${businessInfo.name}`,
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(getLocalBusinessSchema())
    }
  ]
})
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- Contact Hero -->
      <section
        class="mx-auto max-w-page px-6 md:px-8 py-16"
        style="background-color: var(--color-bg-main)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Contactează-ne
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto mb-16"
          style="color: var(--color-text-muted)"
        >
          Suntem aici să te ajutăm cu orice proiect de printare. Sună-ne, scrie-ne sau vizitează-ne!
        </p>
      </section>

      <!-- Contact Information -->
      <section class="mx-auto max-w-page px-6 md:px-8 py-12">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Details -->
          <div>
            <h2 class="font-heading text-h3 mb-8" style="color: var(--color-text-main)">
              Detalii Contact
            </h2>

            <div class="space-y-6">
              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: var(--color-accent-soft)"
                >
                  <span class="text-2xl">📞</span>
                </div>
                <div>
                  <h3 class="font-heading text-h6 mb-2" style="color: var(--color-text-main)">
                    Telefon
                  </h3>
                  <a
                    :href="`tel:${businessInfo.phone}`"
                    class="font-body text-p1 hover:underline"
                    style="color: var(--color-accent-green)"
                  >
                    {{ businessInfo.phone }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: var(--color-accent-soft)"
                >
                  <span class="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 class="font-heading text-h6 mb-2" style="color: var(--color-text-main)">
                    Email
                  </h3>
                  <a
                    :href="`mailto:${businessInfo.email}`"
                    class="font-body text-p1 hover:underline"
                    style="color: var(--color-accent-green)"
                  >
                    {{ businessInfo.email }}
                  </a>
                </div>
              </div>

              <!-- Address -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: var(--color-accent-soft)"
                >
                  <span class="text-2xl">📍</span>
                </div>
                <div>
                  <h3 class="font-heading text-h6 mb-2" style="color: var(--color-text-main)">
                    Adresă
                  </h3>
                  <address
                    class="font-body text-p1 not-italic"
                    style="color: var(--color-text-muted)"
                  >
                    {{ businessInfo.address.street }}<br>
                    {{ businessInfo.address.sector }}, {{ businessInfo.address.city }}<br>
                    {{ businessInfo.address.country }}, {{ businessInfo.address.postalCode }}
                  </address>
                  <a
                    :href="businessInfo.googleMapsUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-body text-p2 hover:underline inline-block mt-2"
                    style="color: var(--color-accent-green)"
                  >
                    Deschide în Google Maps →
                  </a>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: var(--color-accent-soft)"
                >
                  <span class="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 class="font-heading text-h6 mb-2" style="color: var(--color-text-main)">
                    Program
                  </h3>
                  <div class="font-body text-p2 space-y-1" style="color: var(--color-text-muted)">
                    <p v-for="schedule in businessInfo.openingHours" :key="schedule.displayRO">
                      {{ schedule.displayRO }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="font-heading text-h3 mb-8" style="color: var(--color-text-main)">
              Trimite-ne un mesaj
            </h2>

            <form class="space-y-6">
              <!-- Name -->
              <div>
                <label
                  for="name"
                  class="font-body text-p2 block mb-2"
                  style="color: var(--color-text-main)"
                >
                  Nume complet *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg font-body text-p1 border-2 focus:outline-none focus:border-[var(--color-accent-green)]"
                  style="
                    background-color: var(--color-bg-alt);
                    border-color: var(--color-border);
                    color: var(--color-text-main);
                  "
                  placeholder="Ion Popescu"
                >
              </div>

              <!-- Email -->
              <div>
                <label
                  for="email"
                  class="font-body text-p2 block mb-2"
                  style="color: var(--color-text-main)"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg font-body text-p1 border-2 focus:outline-none focus:border-[var(--color-accent-green)]"
                  style="
                    background-color: var(--color-bg-alt);
                    border-color: var(--color-border);
                    color: var(--color-text-main);
                  "
                  placeholder="ion@exemplu.ro"
                >
              </div>

              <!-- Phone -->
              <div>
                <label
                  for="phone"
                  class="font-body text-p2 block mb-2"
                  style="color: var(--color-text-main)"
                >
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  class="w-full px-4 py-3 rounded-lg font-body text-p1 border-2 focus:outline-none focus:border-[var(--color-accent-green)]"
                  style="
                    background-color: var(--color-bg-alt);
                    border-color: var(--color-border);
                    color: var(--color-text-main);
                  "
                  placeholder="+40 123 456 789"
                >
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="font-body text-p2 block mb-2"
                  style="color: var(--color-text-main)"
                >
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 rounded-lg font-body text-p1 border-2 focus:outline-none focus:border-[var(--color-accent-green)] resize-none"
                  style="
                    background-color: var(--color-bg-alt);
                    border-color: var(--color-border);
                    color: var(--color-text-main);
                  "
                  placeholder="Descrie-ne proiectul tău..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <BaseButton
                label="Trimite mesaj"
                size="large"
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>

      <!-- Map Placeholder -->
      <section class="w-full h-96 mt-16" style="background-color: var(--color-bg-alt)">
        <div class="w-full h-full flex items-center justify-center">
          <p class="font-body text-p1" style="color: var(--color-text-muted)">
            [Google Maps Embed - Va fi adăugat mai târziu]
          </p>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
