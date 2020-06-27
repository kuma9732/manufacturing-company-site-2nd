<template>
  <div id="mobileNav">
    <div class="nav-name">
      <h1>セラコン株式会社</h1>
    </div>
    <div class="nav-bar" @click="navOpen" :class="{'is-active': active}">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="nav">
      <ul class="nav-list" v-show="nav" @click="navOpen">
        <li class="nav-link"><router-link to="/">Home</router-link></li>
        <li class="nav-link"><router-link to="/products">製品情報</router-link></li>
        <li class="nav-link"><router-link to="/company">会社情報</router-link></li>
        <li class="nav-link"><router-link to="/ir">IR情報</router-link></li>
        <li class="nav-link"><router-link to="/recruit">採用情報</router-link></li>
        <li class="nav-link"><router-link to="/contact">お問い合わせ</router-link></li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active: false,
      nav: false,
    }
  },
  methods: {
    navOpen: function(){
      this.active = !this.active;
      this.nav = !this.nav
    }
  }
}
</script>

<style scoped lang="scss">
#mobile-nav {
  align-items: center;
  width: 100%;
  height: 80px;
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 110;

  .nav-name {
    justify-content: center;
    align-items: center;
    color:#fff;
    padding: 10px;
    margin-right: auto;

    h1 {
      font-size: 24px;
      color: #fff;
    }
  }
  .is-active span:nth-child(1) {
    top: 25px;
    transform: rotate(225deg);
  }

  .is-active span:nth-child(2) {
    opacity: 0;
  }

  .is-active span:nth-child(3) {
    top: 25px;
    transform: rotate(-225deg);
  }
  .nav-list {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    flex-direction: column;
    transition: .1s linear all;
    z-index: 10;

    li {
      border: 1.5px solid var(--first-color);
      border-bottom: none;
      &:last-child {
        border-bottom: 1.5px solid var(--first-color);
      }

    }
    a {
      background-color: #fff;
      display: flex;
      justify-content: center;
      font-weight: bold;
      color: #000;
      line-height: 50px;
      font-size: 16px;
      height: 50px;
      background-color: var(--third-color);
      color: #000;
    }
  }

}
.nav-bar {
  position: absolute;
  height: 50px;
  width: 35px;
  right: 20px;

  &:hover{
    cursor: pointer;
  }
  span {
    background-color: #fff;
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    right: 0;
    transition: .3s;
    
    &:nth-child(1) {
      top: 15px
    } 

    &:nth-child(2) {
    top: 25px;
    }

    &:nth-child(3) {
      top: 35px;
    }
  }
}
</style>
