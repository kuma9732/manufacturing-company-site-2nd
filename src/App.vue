<template>
  <div id="app">
    <div id="nav">
      <DeskTopNav id="desktop-nav" />
      <MobileNav id="mobile-nav" />
    </div>
    <transition name="view">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import DeskTopNav from '@/components/DeskTopNav.vue'
import MobileNav from '@/components/MobileNav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    DeskTopNav,
    MobileNav,
    Footer
  }
}
</script>
<style lang="scss">
:root {
  --body-font: century, "Noto Sans JP", sans-serif;
  --first-color: rgb( 24, 15, 182);
  --secondary-color: rgb(185, 183, 233);
  --third-color: rgb(231, 231, 248);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h2 {
  margin: 30px 20px;
  border-bottom: var(--first-color) 2px solid;
  display: block;
  font-size: 28px;
  text-align: left;
  padding-left: 10px;
  font-weight: 600;
}

h3 {
  background: var(--secondary-color);
  padding: 10px 20px;
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style-type: none;
  padding: 0;
}

#desktop-nav {
  display: none;
}

#mobile-nav {
  display: flex;
}

footer {
  margin-top: 50px;
}

.view-enter-active,
.view-leave-active {
  transition: opacity .5s, transform .5s;
}

.view-enter-to,
.view-leave {
  opacity: 1;
  transform: translateY(0);
}

.view-enter,
.view-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
/* ==== PC版==== */
@media (min-width: 768px){ 
  h2 {
    margin: 30px 40px;
  }
  
  h3 {
    background: var(--secondary-color);
    padding: 20px;
    margin: 30px 40px;
    font-weight: 600;
    font-size: 24px;
  }
  

}
/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  #mobile-nav {
    display: none;
  }
  #desktop-nav {
    display: flex;
  }
}
</style>
