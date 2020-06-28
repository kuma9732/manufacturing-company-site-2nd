<template>
  <main id="products">
    <div class="products-heading">
        <h3>製品情報</h3>
    </div>
    <section class="lineup">
      <LineUp />
    </section>
    <section class="application">
      <Application />
    </section>
  </main>
</template>

<script>
import LineUp from '@/components/LineUp.vue'
import Application from '@/components/Application.vue'

export default {
  components: {
    LineUp,
    Application
  }
}
</script>

<style lang="scss" scoped>
#products {
  max-width: 1200px;
  margin: 0 auto;
}

</style>