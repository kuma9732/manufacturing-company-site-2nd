<template>
  <section id="home">
    <div class="first-view">
      <h1>Try for innovation<br><span>イノベーションを生み出す</span></h1>
    </div>
    <div class="lineup">
      <div class="lineup-container">
        <div class="home-lineup__heading">
          <h2>ラインアップ</h2>
        </div>
        <LineUp />
      </div>
    </div>
    <div class="application">
      <div class="application-heading">
        <h2>アプリケーション</h2>
        <p>CERA-CONのコンデンサは、現代社会の様々な場面で活用されています。</p>
      </div>
      <Application />   
    </div>  
  </section>
</template>

<script>
import LineUp from '@/components/LineUp.vue'
import Application from '@/components/Application.vue'

export default {
  // name: 'Home',
  components: {
    LineUp,
    Application
  },
}
</script>

<style lang="scss" scoped>
.application-heading p {
  padding-left: 10px;
  padding-bottom: 20px;
}
.lineup,
.application {
  margin: 0 20px;
}
.first-view {
  width: 100%;
  height: calc(100vh - 80px);
  background-image: url("../assets/image/first-view.jpg");
  background-position: center ;
  background-size: cover;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  color: #fff;
  font-weight: bold;

  h1{
    font-size: 48px;
    width: 100%;
    text-shadow: 0 0 10px rgb(10, 2, 54);
    animation: animateUp 1s ease;
  }

  span{
    text-shadow: 0 0 10px rgb(10, 2, 54);
    font-size: 28px;
  }
}
@keyframes animateUp{
  0%{
      opacity: 0;
      transform: translateY(4rem);
  }
  100%{
      opacity: 1;
      transform: translateY(0);
  }
}
/* ==== PC版==== */
@media (min-width: 768px){ 

}


/* ==== PC版 (大) ==== */
@media (min-width: 1025px){

}
</style>
