<template>
  <div id="app">
    <div id="nav">
      <DeskTopNav id="desktop-nav" />
      <MobileNav id="mobile-nav" />
    </div>
    <div class="view-container">
      <transition name="view">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import DeskTopNav from '@/components/DeskTopNav.vue'
import MobileNav from '@/components/MobileNav.vue'

export default {
  components: {
    DeskTopNav,
    MobileNav
  }
}
</script>
<style lang="scss">
:root{
  --body-font: century, "Noto Sans JP", sans-serif;
  --first-color: rgb( 24, 15, 182);
  --secondary-color: rgb(185, 183, 233);
  --third-color: rgb(231, 231, 248);
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#nav {
  // padding: 30px;
  background: #000;
  a {
    font-weight: bold;
    color: #fff;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.view-container{
  // box-sizing: border-box;
  min-height: 100vh;
  background: #eee;
}

#mobile-nav {
  display: none;
}
.view-enter-active,
.view-leave-active{
  transition: opacity .5s, transform .5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 716px) {
  #desktop-nav {
    display: none;
  }
  #mobile-nav {
    display: flex;
  }
  .view-container {
    width: 100%;
    margin-left: 0;
  }
  .view-enter,
  .view-leave-to{
    opacity: 0;
    transform: translateX(-100px);
  }
  .view-enter-to,
  .view-leave{
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
