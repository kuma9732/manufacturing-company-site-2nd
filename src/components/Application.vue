<template>
  <div class="application-wrapper">
    <div class="application-heading">
        <h2>アプリケーション</h2>
        <p>CERA-CONのコンデンサは、現代社会の様々な場面で活用されています。</p>
    </div>
    <div class="application-container">
      <div class="application-content" v-for="application in applications" :key="application.id">
          <img :src="application.url" alt="">
          <span class="app-text">{{ application.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        {
          id: '1',
          name: '車載電装機器',
          url: require('@/assets/image/car_square.jpg'),
        },
        {
          id: '2',
          name: '通信基地局',
          url: require('@/assets/image/transmission_square.jpg'),
        },
        {
          id: '3',
          name: 'スマートフォン',
          url: require('@/assets/image/smartphone_square.jpg'),
        },
        {
          id: '4',
          name: '宇宙衛星',
          url: require('@/assets/image/satellite_square.jpg'),
        },
        {
          id: '5',
          name: '各種電源',
          url: require('@/assets/image/power-supply_square.jpg'),
        },
        {
          id: '6',
          name: 'LED照明',
          url: require('@/assets/image/led_square.jpg'),
        },

      ]
    }
  }
}
</script>

<style scoped lang="scss">
.application-heading {
  text-align: center;
  
   p {
    padding-bottom: 20px;
  }
}

.app-text {
  position: absolute;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  width: 100%;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.application-content {
  position: relative;
  height: 200px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    z-index: 0;
  }

  &:before {
    background-color: rgba(0,0,0,.3);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
    z-index: 10;
  }
}


/* ==== PC版==== */
@media (min-width: 768px){ 
  .application-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 40px;
  }

  .application-heading p {
    font-size: 18px;
    margin: 50px 0 20px;
  }

}

/* ==== PC版 (大) ==== */
@media (min-width: 1025px){
  .lineup-content p{
    font-size: 20px;
  }
}
</style>
