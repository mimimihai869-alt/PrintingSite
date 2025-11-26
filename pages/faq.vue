<script setup>
import { ref } from 'vue'

useHead({
  title: 'Întrebări Frecvente - PrintCo'
})

const faqs = ref([
  {
    id: 1,
    question: 'Care este timpul de execuție pentru comenzi?',
    answer: 'Timpul de execuție standard este de 24-48 ore pentru majoritatea printurilor (cărți de vizită, flyere, pliante). Pentru comenzi urgente oferim servicii accelerate în 24 ore. Proiecte complexe precum broșuri, cataloage sau comenzi de volum mare pot necesita 3-5 zile lucrătoare. Vă recomandăm să ne contactați pentru o estimare precisă în funcție de specificațiile proiectului dvs.',
    open: false
  },
  {
    id: 2,
    question: 'Ce formate de fișiere acceptați pentru print?',
    answer: 'Acceptăm PDF (recomandat pentru cea mai bună calitate), AI (Adobe Illustrator), TIFF, JPEG și PNG. Toate fișierele trebuie să aibă rezoluție minimă de 300 DPI, colorimetrie CMYK și bleed de 3mm. Pentru rezultate optime, trimiteți fișiere PDF cu fonturile încorporate și imaginile în CMYK. Oferim și suport tehnic pentru pregătirea fișierelor.',
    open: false
  },
  {
    id: 3,
    question: 'Oferiți servicii de design grafic?',
    answer: 'Da, oferim consultanță gratuită pentru pregătirea fișierelor și ajutor tehnic. Pentru proiecte care necesită design complet (logo, identitate vizuală, machete), putem recomanda designeri parteneri sau oferim servicii de bază de aliniere și ajustări. Contactați-ne pentru detalii despre nevoile dvs. specifice de design.',
    open: false
  },
  {
    id: 4,
    question: 'Care sunt costurile și zonele de livrare?',
    answer: 'Livrăm în București, Ilfov și toată țara prin curier rapid. Livrare gratuită pentru comenzi peste 200 RON în București și Ilfov. Pentru alte zone, costul variază între 15-30 RON în funcție de destinație și greutate. Oferim și opțiunea de ridicare personală de la sediu în program de lucru Luni-Vineri 9:00-18:00.',
    open: false
  },
  {
    id: 5,
    question: 'Ce materiale și finisaje oferițipentru print?',
    answer: 'Lucrăm cu materiale premium: hârtie 80-350g/mp (mat, lucios, texturat), carton, pânză, vinyl, mesh pentru exterior. Finisaje disponibile: laminare (mat/lucios), UV spot, stanțare personalizată, colțuri rotunjite, embosare, hot foil. Fiecare material este selectat pentru durabilitate și impact vizual maxim.',
    open: false
  },
  {
    id: 6,
    question: 'Faceți print outdoor și bannere?',
    answer: 'Da, oferim print outdoor profesional: bannere mesh și vinyl rezistente la intemperii, autocolante pentru vitrină și vehicule, roll-up-uri, X-banner-uri și sisteme de expunere. Materialele sunt tratate UV pentru rezistență îndelungată la soare și vreme nefavorabilă. Dimensiuni de la 50x70cm până la 5x10m.',
    open: false
  },
  {
    id: 7,
    question: 'Puteți printa cantități mici sau doar comenzi mari?',
    answer: 'Printăm atât comenzi mici (chiar și 1 bucată) cât și tiraje mari de mii de exemplare. Nu avem comandă minimă. Prețurile sunt scalabile - cu cât cantitatea este mai mare, cu atât prețul pe unitate scade. Ideal pentru teste, evenimente, sau producție continuă pentru afacerea dvs.',
    open: false
  },
  {
    id: 8,
    question: 'Oferițigaranție pentru calitatea printului?',
    answer: 'Da, garantăm calitatea printului 100%. Dacă nu sunteți mulțumit de rezultat din vina noastră (erori de print, culori incorecte, defecte de material), refacem comanda gratuit sau returnăm banii. Verificăm fiecare comandă înainte de livrare pentru a asigura standarde înalte de calitate.',
    open: false
  },
  {
    id: 9,
    question: 'Pot vedea o mostră înainte de a printa întreaga comandă?',
    answer: 'Pentru comenzi mari (peste 500 bucăți) sau proiecte speciale, oferim proof digital gratuit. Pentru proof fizic (mostră printată), aplicăm un cost nominal care se deduce din comanda finală. Acest serviciu asigură că sunteți 100% mulțumit de culori, material și finisare înainte de producția completă.',
    open: false
  },
  {
    id: 10,
    question: 'Ce metode de plată acceptați?',
    answer: 'Acceptăm plata cash la ridicare, transfer bancar, card online prin procesator securizat, și pentru clienți corporativi oferim plată cu factură la 15-30 zile. Pentru comenzi mari acceptăm și plată în rate. Emitem factură fiscală pentru toate tranzacțiile.',
    open: false
  },
  {
    id: 11,
    question: 'Lucrați cu companii și oferițicontracte pe termen lung?',
    answer: 'Da, avem experiență vastă în colaborări B2B. Oferim contracte personalizate, prețuri preferențiale pentru volume mari, cont dedicat cu manager de cont, termene prioritare și facturare simplificată. Lucrăm cu agențiile de publicitate, firme, arhitecți, organizatori de evenimente și instituții.',
    open: false
  },
  {
    id: 12,
    question: 'Printați și pentru evenimente speciale (nunți, botezuri)?',
    answer: 'Absolut! Oferim pachete complete pentru evenimente: invitații personalizate, meniuri, numere de masă, place card-uri, bannere decorative, photo booth props și multe altele. Consultanță gratuită pentru alegerea materialelor și finisajelor potrivite temei evenimentului dvs.',
    open: false
  }
])

const toggleFaq = (id) => {
  const faq = faqs.value.find(f => f.id === id)
  if (faq) {
    faq.open = !faq.open
  }
}
</script>

<template>
  <div>
    <TheNavbar />

    <main class="pt-24">
      <!-- FAQ Hero -->
      <section
        class="mx-auto max-w-page px-4 py-16"
        style="background-color: var(--color-accent-soft)"
      >
        <h1
          class="font-heading text-h1 md:text-[60px] text-center mb-6"
          style="color: var(--color-text-main)"
        >
          Întrebări Frecvente
        </h1>
        <p
          class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
          style="color: var(--color-text-muted)"
        >
          Răspunsuri la cele mai comune întrebări
        </p>
      </section>

      <!-- FAQ List -->
      <section class="mx-auto max-w-page px-4 py-16">
        <div class="max-w-3xl mx-auto space-y-4">
          <article
            v-for="faq in faqs"
            :key="faq.id"
            class="rounded-lg overflow-hidden"
            style="background-color: var(--color-bg-alt); border: 1px solid var(--color-border)"
          >
            <button
              @click="toggleFaq(faq.id)"
              class="w-full text-left p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
            >
              <h3 class="font-heading text-h6" style="color: var(--color-text-main)">
                {{ faq.question }}
              </h3>
              <span
                class="text-2xl transform transition-transform"
                :class="{ 'rotate-45': faq.open }"
                style="color: var(--color-accent-green)"
              >
                +
              </span>
            </button>

            <Transition name="faq">
              <div
                v-if="faq.open"
                class="px-6 pb-6 font-body text-p1"
                style="color: var(--color-text-muted)"
              >
                {{ faq.answer }}
              </div>
            </Transition>
          </article>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
