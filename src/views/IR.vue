<template>
  <main id="ir">
    <div class="ir-heading">
      <h3>IR情報</h3>
    </div>
    <section class="ir-wrapper">
      <h2>IRニュース</h2>
      <div class="ir-content" v-for="list in lists" :key="list.id">
          <a href="#">
              <p class="ir-content__date">{{ list.date }}</p>
              <span class="ir-content__mark">IR情報</span>
              <div class="ir-content__report">
                  <p class="ir-content__title">{{ list.title }}</p>
              </div>
          </a>
      </div>
      <div class="showAll">
        <a href="#">一覧を見る</a>
      </div>      
    </section>
    <section class="related-info">
      <RelatedInformation />
    </section>
    <section class="contact">
      <Contact />
    </section>
  </main>
</template>

<script>
import RelatedInformation from '@/components/RelatedInformation.vue'
import Contact from '@/components/Contact.vue'

export default {
  // name: 'Home',
  components: {
    RelatedInformation,
    Contact
  },

  data() {
    return {
      lists: [
        {
          id: '1',
          title: '四半期報告書（2020年３月期第３四半期）',
          date: '2020年02月15日'
        },
        {
          id: '2',
          title: '業績予想の修正に関するお知らせ',
          date: '2020年02月07日'
        },
        {
          id: '3',
          title: '2020年３月期 第３四半期業績資料',
          date: '2020年02月07日'
        },
        {
          id: '4',
          title: '2020年３月期 第２四半期決算短信',
          date: '2019年11月08日'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.ir-wrapper,
.related-info,
.contact {
  margin: 0 20px;
}

.ir-content {
  border-bottom: #000 1px solid;
  position: relative;

  &:first-child {
    border-top: #000 1px solid;
  }
}

.ir-content a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -5px;
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
.ir-content__date {
  display: inline-block;
}

.ir-content__mark {
  margin-left: 10px;
  background: var(--first-color);
  color: #fff;
  padding: 1px 10px;
  font-size: 12px;
  display: inline-block;
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

}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>