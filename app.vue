<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
    <the-toast></the-toast>
  </div>
</template>

<script setup lang="ts">

onMounted(() => {
  const body = window.document.body
  body.setAttribute('data-theme', 'cupcake')
})
</script>
