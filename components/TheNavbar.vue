<script setup>
// Navbar animation is controlled by HeroSection
</script>

<template>
  <nav
    class="navbar fixed top-0 left-0 right-0 z-50 px-4 py-4"
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
            Servicii
          </a>
        </li>
        <li>
          <a
            href="#about"
            class="hover:opacity-70 transition-opacity"
            style="color: var(--color-text-main)"
          >
            Despre noi
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
