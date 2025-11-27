<script setup>
useHead({
  title: 'Despre Noi - PrintCo'
})

const differentiators = [
  {
    title: 'Rapiditate',
    description: 'Livrăm majoritatea proiectelor în 24-48 ore. Comenzi urgente finalizate în aceeași zi.'
  },
  {
    title: 'Calitate Superioară',
    description: 'Echipamente moderne de ultimă generație și control strict al calității la fiecare proiect.'
  },
  {
    title: 'Experiență',
    description: 'Peste 10 ani în domeniu cu mii de proiecte realizate pentru clienți mulțumiți.'
  }
]
</script>

<template>
  <div>
    <TheNavbar />

    <!-- Full Green Background Main -->
    <main class="pt-24 pb-16" style="background-color: var(--color-accent-soft)">
      <!-- About Hero -->
      <section class="w-full py-12">
        <div class="mx-auto max-w-page px-4">
          <h1
            class="font-heading text-h1 md:text-[60px] text-center mb-6"
            style="color: var(--color-text-main)"
          >
            Despre Noi
          </h1>
          <p
            class="font-body text-p1 md:text-[18px] text-center max-w-3xl mx-auto"
            style="color: var(--color-text-muted)"
          >
            Povestea noastră și valorile care ne definesc
          </p>
        </div>
      </section>

      <!-- Story Section in White Container -->
      <section class="w-full pb-8">
        <div class="mx-auto max-w-page px-4 md:px-8">
          <div class="rounded-lg p-8 md:p-12" style="background-color: var(--color-bg-main)">
            <h2 class="font-heading text-h2 md:text-h1 text-center mb-8" style="color: var(--color-text-main)">
              Povestea Noastră
            </h2>
            <div class="space-y-6 font-body text-p1 max-w-3xl mx-auto" style="color: var(--color-text-muted)">
              <p>
                Fondată în [ANUL], PrintCo a pornit din pasiunea pentru tipărire de calitate și dorința de a oferi
                soluții complete pentru afaceri și particulari. De-a lungul anilor, am crescut alături de clienților
                noștri, investind constant în echipamente moderne și dezvoltarea echipei.
              </p>
              <p>
                Astăzi deservim sute de clienți din București și întreaga țară - de la freelanceri și startup-uri
                până la companii mari și agenții de publicitate. Fiecare proiect, indiferent de dimensiune, primește
                aceeași atenție la detalii și dedicare pentru rezultate impecabile.
              </p>
              <p>
                Valorile noastre fundamentale sunt calitatea, rapiditatea și transparența. Credem că fiecare client
                merită un partener de încredere care livrează exact ce promite, la timp și la cel mai înalt standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Three Card Highlights in White Container -->
      <section class="w-full pb-8">
        <div class="mx-auto max-w-page px-4 md:px-8">
          <div class="rounded-lg p-8 md:p-12" style="background-color: var(--color-bg-main)">
            <h2 class="font-heading text-h2 md:text-h1 text-center mb-12" style="color: var(--color-text-main)">
              De Ce PrintCo?
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
              <article
                v-for="(card, index) in differentiators"
                :key="index"
                class="group p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
              >
                <h3 class="font-heading text-h4 mb-4" style="color: var(--color-accent-green)">
                  {{ card.title }}
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  {{ card.description }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Equipment & Capabilities in White Container -->
      <section class="w-full pb-8">
        <div class="mx-auto max-w-page px-4 md:px-8">
          <div class="rounded-lg p-8 md:p-12" style="background-color: var(--color-bg-main)">
            <h2 class="font-heading text-h2 md:text-h1 text-center mb-12" style="color: var(--color-text-main)">
              Echipamente & Capacități
            </h2>
            <div class="space-y-8 max-w-4xl mx-auto">
              <div>
                <h3 class="font-heading text-h4 mb-3" style="color: var(--color-accent-green)">
                  Imprimante Digitale de Ultimă Generație
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Dotări complete pentru print color și monocrom, de la format mic (A6) până la format mare (A0+).
                  Rezoluție până la 1200 DPI pentru detalii impecabile.
                </p>
              </div>

              <div>
                <h3 class="font-heading text-h4 mb-3" style="color: var(--color-accent-green)">
                  Plottere CAD Profesionale
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Plotare tehnică de precizie pentru arhitecți, ingineri și designeri. Formate de la A3 la A0+,
                  lățime maximă 160cm. Ideal pentru planuri, schițe și proiecte tehnice.
                </p>
              </div>

              <div>
                <h3 class="font-heading text-h4 mb-3" style="color: var(--color-accent-green)">
                  Echipamente Outdoor
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Printare pe vinyl, mesh, și materiale rezistente pentru exterior. Bannere până la 5x10m,
                  autocolante, colantări vehicule și sisteme de expunere (roll-up, X-banner).
                </p>
              </div>

              <div>
                <h3 class="font-heading text-h4 mb-3" style="color: var(--color-accent-green)">
                  Finisare & Legătorie
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Laminare (mat/lucios), UV spot, stanțare, colțuri rotunjite, capsare, spirală, termolepiţe.
                  Transformăm printul simplu în produse finite premium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section in White Container -->
      <section class="w-full pb-8">
        <div class="mx-auto max-w-page px-4 md:px-8">
          <div class="rounded-lg p-8 md:p-12" style="background-color: var(--color-bg-main)">
            <h2 class="font-heading text-h2 md:text-h1 mb-12 text-center" style="color: var(--color-text-main)">
              Valorile Noastre
            </h2>

            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div class="group p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style="background-color: var(--color-bg-alt); border-left: 4px solid var(--color-accent-green)">
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-text-main)">
                  Calitate Fără Compromisuri
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Controlul calității la fiecare etapă, de la primirea fișierului până la livrarea finală.
                  Garantăm 100% satisfacție sau refacem gratuit.
                </p>
              </div>

              <div class="group p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style="background-color: var(--color-bg-alt); border-left: 4px solid var(--color-accent-green)">
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-text-main)">
                  Transparență Totală
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Prețuri clare, termene realiste, comunicare constantă. Știi exact ce primești, când și la ce cost.
                </p>
              </div>

              <div class="group p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style="background-color: var(--color-bg-alt); border-left: 4px solid var(--color-accent-green)">
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-text-main)">
                  Inovație Continuă
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Investim constant în tehnologie și training pentru a oferi cele mai bune soluții de pe piață.
                </p>
              </div>

              <div class="group p-6 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl" style="background-color: var(--color-bg-alt); border-left: 4px solid var(--color-accent-green)">
                <h3 class="font-heading text-h5 mb-3" style="color: var(--color-text-main)">
                  Relații Pe Termen Lung
                </h3>
                <p class="font-body text-p1" style="color: var(--color-text-muted)">
                  Nu căutăm tranzacții unice, ci parteneri pe termen lung. Succesul tău este succesul nostru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <TheFooter />
  </div>
</template>
