<template>
  <main id="ir">
    <div class="ir-heading">
      <h3>IR情報</h3>
      <h2>IRニュース</h2>
    </div>
    <section class="ir-news">
      <NewsIR />
      <div class="showAll">
        <a href="#">一覧を見る</a>
      </div>      
    </section>
    <section class="related-info">
      <RelatedInformation />
    </section>
    <section class="contact">
      <ContactBox />
    </section>
  </main>
</template>

<script>
import NewsIR from '@/components/NewsIR.vue'
import RelatedInformation from '@/components/RelatedInformation.vue'
import ContactBox from '@/components/ContactBox.vue'

export default {
  components: {
    NewsIR,
    RelatedInformation,
    ContactBox
  }
}
</script>

<style lang="scss" scoped>
#ir {
  max-width: 1200px;
  margin: 0 auto;
}

.ir-heading h2 {
  margin: 30px 20px;
}

.ir-news,
.contact {
  margin: 0 20px;
}

.showAll {
  position: relative;
  text-align: right;

   a {
    display: inline-block;
    padding-right: 40px;
    margin-top: 20px;
    color: #000;

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      margin-top: 5px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 8px solid var(--first-color);
      right: 12px;
      margin-right: -8px;
    }
  }
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .ir-heading h2 {
    margin: 30px 40px;
  }

  .ir-news {
    margin: 0 40px;
  }

  .showAll {
    margin-bottom: 50px;
  }
  .contact {
    margin-bottom: 50px;
  }
}

</style>