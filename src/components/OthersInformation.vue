<template>
  <div class="others-info-wrapper">
    <div class="others-info-heading">
        <h2>その他</h2>
    </div>
    <div class="others-info-container">
      <div class="others-info-content" v-for="info in othersInfomation" :key="info.id">
        <a href="#">
          <img :src="info.url" alt="">
          <p>{{ info.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      othersInfomation: [
        {
          id: '1',
          name: '採用情報',
          url: require('@/assets/image/recruit.jpg'),
        },
        {
          id: '2',
          name: 'お問い合わせ',
          url: require('@/assets/image/contact.jpg'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.others-info-heading h2 {
  margin: 40px 20px;
}

.others-info-container {
  margin: 0 20px;
}

.others-info-content {
  margin-top: 20px;
  padding: 0;
  text-align: center;
  width: 130px;
  height: 130px;
  position: relative;
  overflow: hidden;
  float: left;
  margin-right: 20px;
  
  img {
    width: 100%; 
    height: 100%;
    display: block;
    transition-duration: .3s;
    
    &:hover {
      transform: scale(1.1);
      transition-duration: .3s;
    }
  }

  p {
    font-size: 16px;
    background-color: rgba(0,0,0,.6);
    margin-bottom: 0;
    padding: 10px 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
    font-weight: 600;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
}
/* ==== PC版==== */
@media (min-width: 768px){ 
  .others-info-heading h2 {
    margin: 30px 40px 20px;
  }

  .others-info-container {
    margin: 0 40px;
  }

  .others-info-content {
    width: 150px;
    height: 150px;
    margin-right: 30px;
  }
}

</style>
