<template>
  <main id="home">
    <div class="first-view">
      <h1>Try for innovation<br><span>イノベーションを生み出す</span></h1>
    </div>
    <section class="lineup">
      <h2>ラインアップ</h2>
      <LineUp />
    </section>
    <section class="news">
      <h2>ニュース</h2>
      <div class="news-wrapper">
        <div class="tabs-menu">
          <div class="tab-btn" @click="tabSwitch" :class="{'is-active': !active}">IR情報</div>
          <div class="tab-btn" @click="tabSwitch" :class="{'is-active': active}">製品情報</div>
        </div>
        <div class="tabs-content">
          <NewsIR v-show="tabIR" />
          <NewsProducts v-show="tabProducts" />
        </div>
      </div>
    </section>
    <section class="application">
      <Application />
    </section>
  </main>
</template>

<script>
import LineUp from '@/components/LineUp.vue'
import NewsIR from '@/components/NewsIR.vue'
import NewsProducts from '@/components/NewsProducts.vue'
import Application from '@/components/Application.vue'

export default {
  components: {
    LineUp,
    NewsIR,
    NewsProducts,
    Application
  },
  data() {
    return {
      active: false,
      tabIR: true,
      tabProducts: false
    }
  },
  methods: {
    tabSwitch: function() {
      this.active = !this.active;
      this.tabIR = !this.tabIR;
      this.tabProducts = !this.tabProducts;
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  max-width: 1200px;
  margin: 0 auto;
  
}

.news-wrapper {
  margin: 0 20px;
}

.first-view {
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("../assets/image/first-view.jpg");
  background-position: center ;
  background-size: cover;
  display: flex;
  text-align: center;
  position: relative;
  color: #fff;
  font-weight: bold;

  h1 {
    font-size: 32px;
    width: 100%;
    padding-top: 200px;
    text-shadow: 0 0 10px rgb(10, 2, 54);
    animation: animateUp 1s ease;
  }

  span {
    text-shadow: 0 0 10px rgb(10, 2, 54);
    font-size: 20px;
  }
}

.tabs-menu {
  display: flex;
   width: 100%;
  
  .tab-btn {
      margin-bottom: 0px;
      border-style: solid;
      border-width: 1px;
      font-weight: 600;
      border-radius: 4px 4px 0 0;
      padding: 10px 0;
      color: #000;
      transition: all .15s;
      width: calc( 100% / 2);
      text-align: center;
  }

  .is-active {
    background-color: var(--first-color);
    color: #fff !important;
  }
}

.tabs-content {
  border: 1px solid #999;
  border-radius: 0 0 4px 4px;
}

.lineup,
.application {
  margin: 0 auto;
  max-width: 1200px;
}

@keyframes animateUp{
  0% {
      opacity: 0;
      transform: translateY(4rem);
  }

  100% {
      opacity: 1;
      transform: translateY(0);
  }
}

/* ==== PC版==== */
@media (min-width: 768px){ 
  .first-view h1 {
    font-size: 48px;
  }
  .first-view span {
    font-size: 28px;
  }

  .news-wrapper {
    margin: 50px 40px 100px;
  }
}
</style>
