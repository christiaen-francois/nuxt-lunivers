<template>
  <li class="fade-in-up-osc">
    <nuxt-link :to="`/projets/${projet.slug}`">{{ projet.name }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    projet: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>
