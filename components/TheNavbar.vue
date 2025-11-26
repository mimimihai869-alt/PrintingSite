<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navbarRef = ref(null)
let ctx

onMounted(() => {
  // Start with navbar hidden
  gsap.set(navbarRef.value, { y: -100, opacity: 0 })

  ctx = gsap.context(() => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -50',
      onEnter: () => {
        gsap.to(navbarRef.value, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        })
      },
      onLeaveBack: () => {
        gsap.to(navbarRef.value, {
          y: -100,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in'
        })
      }
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <nav
    ref="navbarRef"
    class="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    style="background-color: var(--color-bg-main); box-shadow: 0 2px 10px rgba(0,0,0,0.1)"
  >
    <div class="mx-auto max-w-page flex items-center justify-between">
      <div class="font-heading text-h4" style="color: var(--color-text-main)">
        PrintCo
      </div>

      <ul class="flex gap-8 font-body text-p1">
        <li>
          <a
            href="#services"
            class="hover:opacity-70 transition-opacity"
            style="color: var(--color-text-main)"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="hover:opacity-70 transition-opacity"
            style="color: var(--color-text-main)"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="hover:opacity-70 transition-opacity"
            style="color: var(--color-text-main)"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
