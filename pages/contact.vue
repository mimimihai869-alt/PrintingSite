<script setup>
import { businessInfo, getLocalBusinessSchema, getContactMethods } from '~/utils/businessInfo'

const contactMethods = getContactMethods()
const primaryContacts = contactMethods.filter(m => m.primary)
const socialContacts = contactMethods.filter(m => !m.primary)

// Add LocalBusiness structured data for Google ranking
useHead({
  title: `Contact - ${businessInfo.name}`,
  meta: [
    { name: 'description', content: `Contactează ${businessInfo.name} pentru servicii profesionale de printare în ${businessInfo.address.city}. Program ${businessInfo.openingHours[0].displayRO}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(getLocalBusinessSchema())
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
        class="mx-auto max-w-page px-4 py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Contactează-ne
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
          style="color: var(--color-text-muted)"
        >
          Suntem aici să te ajutăm cu orice proiect de printare
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

            <div class="space-y-6 mb-8">
              <!-- Primary Contact Methods (Phone, Email) -->
              <div
                v-for="contact in primaryContacts"
                :key="contact.type"
                class="flex items-start gap-4"
              >
                <div
                  class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: var(--color-accent-soft)"
                >
                  <span class="text-2xl">{{ contact.icon }}</span>
                </div>
                <div>
                  <h3 class="font-heading text-h6 mb-2" style="color: var(--color-text-main)">
                    {{ contact.label }}
                  </h3>
                  <a
                    :href="contact.href"
                    class="font-body text-p1 hover:underline"
                    style="color: var(--color-accent-green)"
                  >
                    {{ contact.value }}
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

            <!-- Social Media & Other Contact Methods -->
            <div
              class="p-6 rounded-lg"
              style="background-color: var(--color-bg-alt); border-left: 4px solid var(--color-accent-green)"
            >
              <h3 class="font-heading text-h5 mb-4" style="color: var(--color-text-main)">
                Ne găsești și pe:
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <a
                  v-for="contact in socialContacts"
                  :key="contact.type"
                  :href="contact.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:scale-105"
                  style="background-color: var(--color-bg-main)"
                >
                  <span class="text-2xl">{{ contact.icon }}</span>
                  <div>
                    <p class="font-body text-p2 font-semibold" style="color: var(--color-text-main)">
                      {{ contact.label }}
                    </p>
                    <p class="font-body text-sm" style="color: var(--color-text-muted)">
                      {{ contact.value }}
                    </p>
                  </div>
                </a>
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

      <!-- Google Maps Section -->
      <section class="w-full mt-16">
        <div class="mx-auto max-w-page px-6 md:px-8 mb-6">
          <h2 class="font-heading text-h3 text-center" style="color: var(--color-text-main)">
            Locația Noastră
          </h2>
        </div>

        <!-- Map Container -->
        <div class="w-full h-96 relative" style="background-color: var(--color-bg-alt)">
          <!-- Replace this with actual Google Maps embed -->
          <!-- Example:
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          -->
          <div class="w-full h-full flex flex-col items-center justify-center p-8">
            <span class="text-6xl mb-4">🗺️</span>
            <p class="font-heading text-h5 text-center mb-2" style="color: var(--color-text-main)">
              Hartă Google Maps
            </p>
            <p class="font-body text-p2 text-center max-w-md mb-4" style="color: var(--color-text-muted)">
              Pentru a adăuga harta reală, înlocuiește acest placeholder cu un embed Google Maps
            </p>
            <a
              :href="businessInfo.googleMapsUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block"
            >
              <BaseButton
                label="Deschide în Google Maps"
                size="medium"
              />
            </a>
          </div>
        </div>

        <!-- Service Area Info -->
        <div class="mx-auto max-w-page px-6 md:px-8 mt-8">
          <div
            class="p-6 rounded-lg text-center"
            style="background-color: var(--color-accent-soft)"
          >
            <p class="font-body text-p1 mb-2" style="color: var(--color-text-main)">
              <strong>Zone de livrare:</strong> {{ businessInfo.serviceArea.primary }} și {{ businessInfo.serviceArea.secondary.join(', ') }}
            </p>
          </div>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
