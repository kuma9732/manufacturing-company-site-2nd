<template>
  <main id="products">
    <div class="products-heading">
        <h3>製品情報</h3>
    </div>
    <section class="lineup">
      <h2>ラインアップ</h2>
      <LineUp />
    </section>
    <section class="newsProducts">
      <h2>ニュース</h2>
      <NewsProducts />
    </section>
    <section class="application">
      <Application />
    </section>
  </main>
</template>

<script>
import LineUp from '@/components/LineUp.vue'
import NewsProducts from '@/components/NewsProducts.vue'
import Application from '@/components/Application.vue'

export default {
  components: {
    LineUp,
    NewsProducts,
    Application
  }
}
</script>

<style lang="scss" scoped>
#products {
  max-width: 1200px;
  margin: 0 auto;
}
.newsProducts {
  margin: 0 20px;

  h2 {
    margin: 30px 0 !important;
  }
}
/* ==== PC版==== */
@media (min-width: 768px){ 
  .newsProducts {
    margin: 50px 40px 100px;
  }
}
</style>