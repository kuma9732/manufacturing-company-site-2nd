<template>
  <main id="company">
    <div class="company-heading">
      <h3>会社情報</h3>
      <h2>CERA-CONとは</h2>
    </div>
    <div class="company-wrapper">
      <div class="company-text">
        <h4>世界トップクラスのコンデンサ専門メーカー</h4>
        <p>セラコンは、長年に渡る技術・ノウハウの蓄積を糧に、お客様のニーズに対して高品質かつ高性能の製品を提供しています。</p>
      </div>
      <div class="company-image">
         <img src="@/assets/image/company-image.jpg" alt="">
      </div>
    </div>
    <section class="related-info">
      <RelatedInformation />
    </section>
    <section class="others-info">
      <OthersInformation />
    </section>
  </main>
</template>

<script>
import RelatedInformation from '@/components/RelatedInformation.vue'
import OthersInformation from '@/components/OthersInformation.vue'

export default {
  components: {
    RelatedInformation,
    OthersInformation
  }
}
</script>

<style lang="scss" scoped>
#company {
  max-width: 1200px;
  margin: 0 auto;

}

.company-heading h2 {
  margin: 30px 20px;
}

.company-image {
  text-align: center;

  img {
    width: 60%;
  }
}

.company-wrapper {
  margin: 0 20px;
  
  h4 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 50px;
    line-height: 1.8;
  }
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .company-heading h2 {
    margin: 30px 40px;
  }

  .company-wrapper {
    margin: 0 40px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 3fr 2fr;
  }

  .company-text {
    grid-column: 1/2;

    h4 {
      font-size: 32px;

    }
    p {
      font-size: 20px;
    }
  }
  .company-image {
    grid-column: 2/3;
    text-align: left;

    img {
      width: 80%;
    }
  }

  .related-info,
  .others-info {
    margin-bottom: 100px;
  }
}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>