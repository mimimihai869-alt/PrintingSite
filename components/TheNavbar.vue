<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const navbarRef = ref(null)
const mobileMenuOpen = ref(false)

let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY

      // Only apply hide/show behavior after scrolling past 100px
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          // Scrolling down - hide navbar
          gsap.to(navbarRef.value, {
            y: -100,
            duration: 0.3,
            ease: 'power2.out'
          })
        } else {
          // Scrolling up - show navbar
          gsap.to(navbarRef.value, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      }

      lastScrollY = currentScrollY
      ticking = false
    })

    ticking = true
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    ref="navbarRef"
    class="navbar fixed top-0 left-0 right-0 z-50 px-4 py-5 md:py-6"
    style="background-color: var(--color-bg-main); box-shadow: 0 2px 10px rgba(0,0,0,0.1)"
  >
    <div class="mx-auto max-w-page">
      <!-- Desktop Navigation -->
      <ul class="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-body text-p1">
        <li>
          <NuxtLink
            to="/"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Acasă
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/servicii"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Servicii
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/despre"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Despre Noi
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/cerinte-tehnice"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Cerințe
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/faq"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            FAQ
          </NuxtLink>
        </li>
        <li>
          <a
            href="/#contact"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Contact
          </a>
        </li>
      </ul>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <!-- Mobile Header -->
        <div class="flex items-center justify-between">
          <div class="font-heading text-h5" style="color: var(--color-text-main)">
            PrintCo
          </div>

          <!-- Hamburger Button -->
          <button
            @click="toggleMobileMenu"
            class="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              :style="{ color: 'var(--color-text-main)' }"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <Transition name="mobile-menu">
          <ul
            v-if="mobileMenuOpen"
            class="mt-4 flex flex-col items-center gap-3 font-body text-p1 pb-4"
          >
            <li>
              <NuxtLink
                to="/"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                Acasă
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/servicii"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                Servicii
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/despre"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                Despre Noi
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/cerinte-tehnice"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                Cerințe Tehnice
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/faq"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                FAQ
              </NuxtLink>
            </li>
            <li>
              <a
                href="/#contact"
                class="nav-link block py-2"
                style="color: var(--color-text-main)"
                @click="mobileMenuOpen = false"
              >
                Contact
              </a>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  position: relative;
  display: inline-block;
  transition: opacity 0.2s ease;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  opacity: 0.7;
}

/* Underline effect on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 2px;
  background-color: var(--color-accent-green);
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: translateX(-50%) scaleX(1);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
