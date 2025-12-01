<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import gsap from 'gsap'

const router = useRouter()
const route = useRoute()
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
      } else {
        // Always show navbar when near top
        gsap.to(navbarRef.value, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
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

const handleLogoClick = () => {
  // If we're on homepage, scroll to top
  if (route.path === '/') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    // Otherwise navigate to homepage
    router.push('/')
  }
}

const handleNavClick = (path) => {
  // Close mobile menu if open
  mobileMenuOpen.value = false

  // If we're already on this page, scroll to top instead of navigating
  if (route.path === path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  } else {
    router.push(path)
  }
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
    class="navbar fixed top-0 left-0 right-0 z-50 px-4 py-3 md:py-4"
    style="background-color: var(--color-bg-main); box-shadow: 0 2px 10px rgba(0,0,0,0.1)"
  >
    <div class="mx-auto max-w-page flex items-center justify-between">
      <!-- Logo (Left Side) - No hover menu -->
      <button
        @click="handleLogoClick"
        class="flex items-center gap-2 focus:outline-none transition-all duration-200 hover:scale-105"
        aria-label="Go to homepage"
      >
        <div
          class="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center"
          style="background-color: var(--color-accent-green)"
        >
          <span class="font-heading text-h5 md:text-h4" style="color: var(--color-bg-main)">
            P
          </span>
        </div>
        <span class="font-heading text-h5 hidden sm:block" style="color: var(--color-text-main)">
          PrintCo
        </span>
      </button>

      <!-- Desktop Navigation (Center) -->
      <ul class="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-body text-p1">
        <li>
          <button
            @click="handleNavClick('/')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Acasă
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/servicii')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Servicii
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/despre')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Despre Noi
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/cerinte-tehnice')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Cerințe
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/faq')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            FAQ
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/contact')"
            class="nav-link"
            style="color: var(--color-text-main)"
          >
            Contact
          </button>
        </li>
        <li>
          <button
            @click="handleNavClick('/sphere')"
            class="nav-link"
            style="color: var(--color-accent-green)"
          >
            Sphere
          </button>
        </li>
      </ul>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
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

        <!-- Mobile Menu -->
        <Transition name="mobile-menu">
          <ul
            v-if="mobileMenuOpen"
            class="absolute top-full left-0 right-0 mt-2 mx-4 rounded-lg shadow-lg overflow-hidden"
            style="background-color: var(--color-bg-main); border: 2px solid var(--color-accent-green)"
          >
            <li>
              <button
                @click="handleNavClick('/')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                Acasă
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/servicii')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                Servicii
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/despre')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                Despre Noi
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/cerinte-tehnice')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                Cerințe Tehnice
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/faq')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/contact')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-text-main)"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                @click="handleNavClick('/sphere')"
                class="w-full text-left nav-link-mobile block px-6 py-3"
                style="color: var(--color-accent-green)"
              >
                Sphere (Test)
              </button>
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

/* Mobile nav link */
.nav-link-mobile {
  transition: background-color 0.2s ease;
}

.nav-link-mobile:hover {
  background-color: var(--color-accent-soft);
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
