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
  // name: 'Home',
  components: {
    LineUp,
    Application
  }
}
</script>

<style lang="scss" scoped>
#products {
  margin-top: 100px;
}

.lineup,
.application {
  margin: 0 20px;
}


/* ==== PC版==== */
@media (min-width: 768px){ 

}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>