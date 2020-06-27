<template>
  <main id="company">
    <div class="company-heading">
      <h3>会社情報</h3>
    </div>
    <div class="company-wrapper">
      <h2>CERA-CONとは</h2>
      <h4>世界トップクラスのコンデンサ専門メーカー</h4>
      <p>セラコンは、長年に渡る技術・ノウハウの蓄積を糧に、お客様のニーズに対して高品質かつ高性能の製品を提供しています。</p>
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
  // name: 'Home',
  components: {
    RelatedInformation,
    OthersInformation
  }
}
</script>

<style lang="scss" scoped>
.related-info,
.others-info {
  margin:0 20px;
}
.company-image img{
  width: 100%;
}
.company-wrapper {
  margin: 0 20px;
}
.company-wrapper h4 {
  font-size: 22px;
}
.company-wrapper p {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.8;
}

/* ==== PC版==== */
@media (min-width: 768px){ 

}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>