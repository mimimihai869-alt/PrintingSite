<script setup>
defineProps({
  title: String,
  subtitle: String,
  buttonText: String,
  buttonLink: String,
  imageSrc: String,
  imageAlt: String,
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="w-full py-16 md:py-24" style="background-color: var(--color-accent-soft)">
    <div class="mx-auto max-w-page px-6 md:px-8">
      <div
        class="grid md:grid-cols-2 gap-12 items-center"
        :class="{ 'md:flex-row-reverse': reverse }"
      >
        <!-- Text Column -->
        <div :class="{ 'md:order-2': reverse }">
          <h2
            class="font-heading text-h2 md:text-h1 mb-6"
            style="color: var(--color-text-main)"
          >
            {{ title }}
          </h2>
          <div
            class="font-body text-p1 md:text-[16px] space-y-4 mb-8"
            style="color: var(--color-text-muted)"
          >
            <slot />
          </div>
          <BaseButton
            v-if="buttonText"
            :label="buttonText"
            size="large"
            @click="buttonLink && $router.push(buttonLink)"
          />
        </div>

        <!-- Image Column -->
        <div :class="{ 'md:order-1': reverse }">
          <div
            class="aspect-[4/3] rounded-lg overflow-hidden"
            style="background-color: var(--color-bg-alt); border: 2px solid var(--color-accent-green)"
          >
            <div v-if="!imageSrc" class="w-full h-full flex items-center justify-center">
              <span class="font-body text-p2" style="color: var(--color-text-muted)">
                {{ imageAlt || 'Imagine' }}
              </span>
            </div>
            <NuxtImg
              v-else
              :src="imageSrc"
              :alt="imageAlt"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
